'use client'
import { memo, useActionState } from "react";
import { login } from "@/utils/actions/auth";

export const AuthForm = memo(() => {
  const [state, formAction, isPending] = useActionState(login, { errors: {}, email: '', password: '' });

  return (
    <form 
    className="space-y-6" 
    action={formAction}
  >
    <input type="hidden" name="remember" defaultValue="true" />
    <div className="rounded-md -space-y-px">
      <div>
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          defaultValue={state.email || ''}
          className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${state.errors?.email ? 'border-red-500 text-red-900' : 'border-gray-300 text-gray-900'} placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          placeholder="Email address"
          required
        />
        {state.errors?.email && (
          <p className="mt-1 text-sm text-red-500">
            {state.errors.email}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          defaultValue={state.password || ''}
          className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${state.errors?.password ? 'border-red-500 text-red-900' : 'border-gray-300 text-gray-900'} placeholder-gray-500 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          placeholder="Password"
          required
          minLength={6}
        />
        {state.errors?.password && (
          <p className="mt-1 text-sm text-red-500">
            {state.errors.password}
          </p>
        )}
      </div>
    </div>

    {state.errors?.root && (
      <div className="text-center text-sm text-red-500">
        {state.errors.root}
      </div>
    )}

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label htmlFor="remember-me" className="block text-sm text-gray-900">
          Remember me
        </label>
      </div>

      <div className="text-sm">
        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
          Forgot your password?
        </a>
      </div>
    </div>

    <div>
      <button
        type="submit"
        disabled={isPending}
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {isPending ? "Signing in..." : "Sign in"}
      </button>
    </div>
  </form>  ) 
})

AuthForm.displayName = "AuthForm";