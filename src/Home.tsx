import React from 'react';
import styles from './Home.module.css';
import {AppleIcon, ClipboardIcon, DumbbellIcon, PlayIcon, UsersIcon} from "./Icons.tsx";

function Home() {
    return (
        <div className={`${styles.container} flex flex-col min-h-dvh bg-background`}>
            <main className="flex-1">
                <section className="w-full bg-muted">
                    <div className={`${styles.section} container flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-12 md:py-24`}>
                        <div className="space-y-4 md:max-w-[500px]">
                            <h1 className="text-3xl font-bold tracking-tighter md:text-5xl">Get Fit with Musclog</h1>
                            <p className="text-muted-foreground md:text-xl">
                                Discover a world of personalized workouts, expert guidance, and a supportive community to help you
                                achieve your fitness goals.
                            </p>
                            <div className="flex flex-col gap-2 sm:flex-row">
                                <a
                                    href="#"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                >
                                    Download on Google Play
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                >
                                    Download on App Store
                                </a>
                            </div>
                        </div>
                        <div className="w-full max-w-[600px] md:max-w-[700px]">
                            <img
                                src="/placeholder.svg"
                                width={700}
                                height={500}
                                alt="Musclog App"
                                className="rounded-xl object-cover"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24">
                    <div className="container grid gap-8 px-4 md:px-6">
                        <div className="space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Discover the Power of Musclog</h2>
                            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                                Musclog is your ultimate fitness companion, packed with personalized workouts, expert guidance, and a
                                supportive community to help you reach your goals.
                            </p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div className="flex flex-col items-center gap-4 text-center">
                                <DumbbellIcon className="w-12 h-12 text-primary" />
                                <h3 className="text-lg font-bold">Personalized Workouts</h3>
                                <p className="text-muted-foreground">
                                    Musclog tailors workout plans to your fitness level, goals, and preferences, ensuring you get the most
                                    effective results.
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
                <section className="w-full bg-muted py-12 md:py-24">
                    <div className="container grid gap-8 px-4 md:px-6">
                        <div className="space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                                Workout Routines for Every Fitness Level
                            </h2>
                            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                                Musclog offers a wide range of workout routines to cater to different fitness levels, from beginner to
                                advanced, ensuring you can find the perfect program to suit your needs.
                            </p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div className={`${styles.card} bg-background shadow-sm`}>
                                <div className="p-6 flex flex-col gap-4">
                                    <img
                                        src="/placeholder.svg"
                                        width={300}
                                        height={200}
                                        alt="Beginner Workout"
                                        className="rounded-lg object-cover"
                                    />
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-bold">Beginner Workout</h3>
                                        <p className="text-muted-foreground">
                                            Start your fitness journey with our carefully designed beginner-friendly workouts, focusing on
                                            building a strong foundation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.card} bg-background shadow-sm`}>
                                <div className="p-6 flex flex-col gap-4">
                                    <img
                                        src="/placeholder.svg"
                                        width={300}
                                        height={200}
                                        alt="Intermediate Workout"
                                        className="rounded-lg object-cover"
                                    />
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-bold">Intermediate Workout</h3>
                                        <p className="text-muted-foreground">
                                            Take your fitness to the next level with our intermediate-level workouts, designed to challenge
                                            and push you further.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.card} bg-background shadow-sm`}>
                                <div className="p-6 flex flex-col gap-4">
                                    <img
                                        src="/placeholder.svg"
                                        width={300}
                                        height={200}
                                        alt="Advanced Workout"
                                        className="rounded-lg object-cover"
                                    />
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-bold">Advanced Workout</h3>
                                        <p className="text-muted-foreground">
                                            Conquer your fitness goals with our advanced-level workouts, tailored for experienced individuals
                                            seeking maximum results.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24">
                    <div className="container grid gap-8 px-4 md:px-6">
                        <div className="space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Users Say</h2>
                            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                                Hear from real Musclog users and learn how our app has transformed their fitness journeys.
                            </p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div className={`${styles.card} bg-background shadow-sm`}>
                                <div className="p-6 flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className={`${styles.avatar} w-12 h-12`}>
                                            <img src="/placeholder-user.jpg" alt="User 1" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">John Doe</h4>
                                            <p className="text-sm text-muted-foreground">Fitness Enthusiast</p>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground">
                                        "Musclog has been a game-changer for me. The personalized
                                        workouts and expert guidance have helped me achieve my
                                        fitness goals in a way that's sustainable and enjoyable."
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.card} bg-background shadow-sm`}>
                                <div className="p-6 flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className={`${styles.avatar} w-12 h-12`}>
                                            <img src="/placeholder-user.jpg" alt="User 2" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Jane Smith</h4>
                                            <p className="text-sm text-muted-foreground">Busy Professional</p>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground">
                                        "As a busy professional, Musclog has been a lifesaver. The
                                        app's flexibility and variety of workouts make it easy for
                                        me to stay on track with my fitness routine, even with a
                                        hectic schedule."
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles.card} bg-background shadow-sm`}>
                                <div className="p-6 flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className={`${styles.avatar} w-12 h-12`}>
                                            <img src="/placeholder-user.jpg" alt="User 3" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Sarah Lee</h4>
                                            <p className="text-sm text-muted-foreground">Fitness Beginner</p>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground">
                                        "As a fitness beginner, Musclog has been an incredible
                                        resource. The app's user-friendly interface and
                                        beginner-friendly workouts have made it easy for me to
                                        build a consistent exercise routine and see real progress."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full bg-muted py-12 md:py-24">
                    <div className="container grid gap-8 px-4 md:px-6">
                        <div className="space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Download Musclog Today</h2>
                            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                                Take the first step towards a healthier, fitter you. Download Musclog now and start your transformative
                                fitness journey.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row justify-center">
                            <a
                                href="#"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            >
                                <PlayIcon className="w-4 h-4 mr-2" />
                                Download on Google Play
                            </a>
                            <a
                                href="#"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            >
                                <AppleIcon className="w-4 h-4 mr-2" />
                                Download on App Store
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;
