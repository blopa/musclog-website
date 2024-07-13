// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <section className="w-full bg-muted">
                <div className="container flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-12 md:py-24">
                    <div className="space-y-4 md:max-w-[500px]">
                        <h1 className="text-3xl font-bold tracking-tighter md:text-5xl">Get Fit with Fitify</h1>
                        <p className="text-muted-foreground md:text-xl">
                            Discover a world of personalized workouts, expert guidance, and a supportive community to help you
                            achieve your fitness goals.
                        </p>
                        <div className="flex flex-col gap-2 sm:flex-row">
                            <Link
                                to="#"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            >
                                Download on Google Play
                            </Link>
                            <Link
                                to="#"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            >
                                Download on App Store
                            </Link>
                        </div>
                    </div>
                    <div className="w-full max-w-[600px] md:max-w-[700px]">
                        <img
                            src="/placeholder.svg"
                            width={700}
                            height={500}
                            alt="Fitify App"
                            className="rounded-xl object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24">
                <div className="container grid gap-8 px-4 md:px-6">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Discover the Power of Fitify</h2>
                        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                            Fitify is your ultimate fitness companion, packed with personalized workouts, expert guidance, and a
                            supportive community to help you reach your goals.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col items-center gap-4 text-center">
                            <DumbbellIcon className="w-12 h-12 text-primary" />
                            <h3 className="text-lg font-bold">Personalized Workouts</h3>
                            <p className="text-muted-foreground">
                                Fitify tailors workout plans to your fitness level, goals, and preferences, ensuring you get the
                                most effective results.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-4 text-center">
                            <ClipboardIcon className="w-12 h-12 text-primary" />
                            <h3 className="text-lg font-bold">Expert Guidance</h3>
                            <p className="text-muted-foreground">
                                Benefit from the expertise of our certified trainers, who provide step-by-step instructions and
                                motivation to keep you on track.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-4 text-center">
                            <UsersIcon className="w-12 h-12 text-primary" />
                            <h3 className="text-lg font-bold">Supportive Community</h3>
                            <p className="text-muted-foreground">
                                Connect with like-minded individuals, share your progress, and find inspiration in our vibrant
                                community of fitness enthusiasts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Additional sections here */}
        </div>
    );
};

export default Home;

function DumbbellIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14.4 14.4 9.6 9.6" />
            <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
            <path d="m21.5 21.5-1.4-1.4" />
            <path d="M3.9 3.9 2.5 2.5" />
            <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
        </svg>
    );
}

function ClipboardIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        </svg>
    );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}
