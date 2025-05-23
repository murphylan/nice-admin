"use client";

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { signIn } from 'next-auth/react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { IconStar } from '@tabler/icons-react';
import { type Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Authentication',
    description: 'Authentication forms built using the components.'
};

export default function SignInView({ stars }: { stars: number }) {
    return (
        <div className='relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
            <Link
                href='/examples/authentication'
                className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'absolute top-4 right-4 hidden md:top-8 md:right-8'
                )}
            >
                Login
            </Link>
            <div className='bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r'>
                <div className='absolute inset-0 bg-zinc-900' />
                <div className='relative z-20 flex items-center text-lg font-medium'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='mr-2 h-6 w-6'
                    >
                        <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
                    </svg>
                    Logo
                </div>
                <div className='relative z-20 mt-auto'>
                    <blockquote className='space-y-2'>
                        <p className='text-lg'>
                            &ldquo;This starter template has saved me countless hours of work
                            and helped me deliver projects to my clients faster than ever
                            before.&rdquo;
                        </p>
                        <footer className='text-sm'>Random Dude</footer>
                    </blockquote>
                </div>
            </div>
            <div className='flex h-full items-center justify-center p-4 lg:p-8'>
                <div className='flex w-full max-w-md flex-col items-center justify-center space-y-6'>
                    {/* github link  */}
                    <Link
                        className={cn('group inline-flex hover:text-yellow-200')}
                        target='_blank'
                        href={'https://github.com/kiranism/next-shadcn-dashboard-starter'}
                    >
                        <div className='flex items-center'>
                            <GitHubLogoIcon className='size-4' />
                            <span className='ml-1 inline'>Star on GitHub</span>{' '}
                        </div>
                        <div className='ml-2 flex items-center gap-1 text-sm md:flex'>
                            <IconStar
                                className='size-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300'
                                fill='currentColor'
                            />
                            <span className='font-display font-medium'>{stars}</span>
                        </div>
                    </Link>

                    {/* NextAuth 登录表单 */}
                    <div className="w-full space-y-4">
                        <button
                            onClick={() => signIn('github')}
                            className={cn(
                                buttonVariants({ variant: 'outline' }),
                                'w-full'
                            )}
                        >
                            <GitHubLogoIcon className="mr-2 h-4 w-4" />
                            Sign in with GitHub
                        </button>

                        <button
                            onClick={() => signIn('google')}
                            className={cn(
                                buttonVariants({ variant: 'outline' }),
                                'w-full'
                            )}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-2 h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Sign in with Google
                        </button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={() => signIn('credentials', {
                                email: 'your_email@example.com',
                                password: 'your_password',
                                callbackUrl: '/dashboard'
                            })}
                            className={cn(
                                buttonVariants({ variant: 'default' }),
                                'w-full'
                            )}
                        >
                            Sign in with Email
                        </button>
                    </div>

                    <p className='text-muted-foreground px-8 text-center text-sm'>
                        By clicking continue, you agree to our{' '}
                        <Link
                            href='/terms'
                            className='hover:text-primary underline underline-offset-4'
                        >
                            Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link
                            href='/privacy'
                            className='hover:text-primary underline underline-offset-4'
                        >
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}