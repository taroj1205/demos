'use server';

import { redirect } from "next/navigation";
import { authenticateUser } from "../auth";

export type FormErrors = {
    email?: string;
    password?: string;
    root?: string;
};

export type FormState = {
    errors: FormErrors;
    email?: string;
    password?: string;
};

function validateEmail(email: string): string | null {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!email) return 'Email is required';
    if (!emailRegex.test(email)) return 'Invalid email address';
    return null;
}

function validatePassword(password: string): string | null {
    if (!password) return 'Password is required';
    if (password.length < 6) return 'Password must be at least 6 characters';
    return null;
}

export async function login(prevState: FormState, formData: FormData): Promise<FormState> {

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const errors: FormErrors = {};

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError) errors.email = emailError;
    if (passwordError) errors.password = passwordError;

    if (Object.keys(errors).length > 0) {
        return { errors, email, password };
    }

    try {
        const result = await authenticateUser(email, password);

        if (!result.user) {
            return { errors: { root: 'Invalid email or password' }, email, password };
        }
    } catch (error) {
        console.log(error);
        return { errors: { root: 'An unexpected error occurred' }, email, password };
    }

    redirect('/dashboard');
}
