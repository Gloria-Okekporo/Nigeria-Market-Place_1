'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { logout } from '@/app/auth/actions'
import { User } from '@supabase/supabase-js'

export function AuthButton() {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const supabase = createClient()

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            setUser(user)
            setLoading(false)
        }

        getUser()

        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_event: any, session: any) => {
                setUser(session?.user ?? null)
            }
        )

        return () => subscription.unsubscribe()
    }, [supabase])

    if (loading) return null

    if (user) {
        return (
            <div className="flex items-center gap-4">
                <Link
                    href="/dashboard"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                    <span className="material-symbols-outlined text-xl">person</span>
                    <span className="text-sm font-bold truncate max-w-[100px]">
                        {user.user_metadata?.first_name || user.email?.split('@')[0]}
                    </span>
                </Link>
                <button
                    onClick={() => logout()}
                    className="p-2 text-slate-500 hover:text-red-500 transition-colors"
                    title="Logout"
                >
                    <span className="material-symbols-outlined">logout</span>
                </button>
            </div>
        )
    }

    return (
        <div className="flex items-center gap-2">
            <Link
                href="/auth/login"
                className="px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
            >
                Log In
            </Link>
            <Link
                href="/auth/signup"
                className="px-5 py-2.5 bg-primary text-slate-900 text-sm font-black rounded-xl hover:scale-105 transition-transform shadow-lg shadow-primary/20"
            >
                Sign Up
            </Link>
        </div>
    )
}
