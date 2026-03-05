'use client'

import { useState } from 'react'
import { login } from '../actions'
import { toast } from 'sonner'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const supabase = createClient()

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            if (session) {
                router.push('/dashboard')
            }
        }
        checkSession()
    }, [supabase, router])

    async function handleSubmit(formData: FormData) {
        setLoading(true)
        const result = await login(formData)
        if (result?.error) {
            toast.error(result.error)
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6">
            <div className="w-full max-w-md">
                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl shadow-primary/5 border border-slate-200 dark:border-slate-800 p-8 md:p-12">
                    <div className="flex flex-col items-center mb-10">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-4xl font-bold">eco</span>
                        </div>
                        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Welcome Back</h1>
                        <p className="text-slate-500 text-center">Login to access your GreenMarket dashboard</p>
                    </div>

                    <form action={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="name@example.com"
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Password</label>
                                <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot?</a>
                            </div>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
                                <input
                                    name="password"
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-primary text-slate-900 font-black text-lg rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20 disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <div className="w-6 h-6 border-4 border-slate-900/30 border-t-slate-900 rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    <span>Login to Market</span>
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </>
                            )}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-slate-500 text-sm">
                        Don't have an account? {' '}
                        <Link href="/auth/signup" className="text-primary font-bold hover:underline">Create one for free</Link>
                    </p>
                </div>

                <div className="mt-8 flex justify-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
                    <a href="/" className="hover:text-primary transition-colors">Back to Home</a>
                    <span>•</span>
                    <a href="#" className="hover:text-primary transition-colors">Help Center</a>
                </div>
            </div>
        </div>
    )
}
