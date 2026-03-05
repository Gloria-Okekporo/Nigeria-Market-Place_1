'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
    const supabase = await createClient()

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    console.log('Attempting login for:', data.email)
    const { data: signInData, error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        console.error('Login error details:', {
            message: error.message,
            status: error.status,
            name: error.name
        })
        return { error: error.message }
    }

    console.log('Login successful for:', data.email)

    revalidatePath('/', 'layout')
    redirect('/dashboard')
}

export async function signup(formData: FormData) {
    try {
        const supabase = await createClient()

        const data = {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
            options: {
                data: {
                    first_name: formData.get('firstName') as string,
                    last_name: formData.get('lastName') as string,
                },
                emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/callback`,
            }
        }

        console.log('Attempting signup for:', data.email)
        const { error } = await supabase.auth.signUp(data)

        if (error) {
            console.error('Signup error:', error.message)
            return { error: error.message }
        }

        revalidatePath('/', 'layout')
        return { success: 'Check your email for a confirmation link' }
    } catch (err: any) {
        console.error('Signup fetch failure:', err)
        return { error: 'Connection failed. Please check your internet or Supabase configuration.' }
    }
}

export async function logout() {
    const supabase = await createClient()
    const { error } = await supabase.auth.signOut()

    if (error) {
        return { error: error.message }
    }

    revalidatePath('/', 'layout')
    redirect('/auth/login')
}
