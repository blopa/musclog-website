'use client';
import TranslationProvider from '@/components/TranslationProvider';
import Main from '@/components/main';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { AppleIcon, ClipboardIcon, DumbbellIcon, PlayIcon, UsersIcon } from '@/components/ui/icons';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const PATH = process.env.NEXT_PUBLIC_BASE_PATH ? `/${process.env.NEXT_PUBLIC_BASE_PATH}` : '';

function Home() {
    const { t } = useTranslation();

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <Main>
            <section className="w-full bg-muted">
                <div
                    className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-12 md:py-24">
                    <div className="space-y-4 p-5 md:p-0 md:max-w-[500px]">
                        <h1 className="text-3xl font-bold tracking-tighter md:text-5xl">{t('title')}</h1>
                        <p className="text-muted-foreground md:text-xl">
                            {t('description')}
                        </p>
                        <div className="flex flex-col gap-2 sm:flex-row">
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                href="#"
                                prefetch={false}
                            >
                                {t('download_google_play')}
                            </Link>
                            <Link
                                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                href="#"
                                prefetch={false}
                            >
                                {t('download_app_store')}
                            </Link>
                        </div>
                    </div>
                    <div className="w-full max-w-[600px] md:max-w-[700px]">
                        <img
                            alt="Musclog App"
                            className="rounded-xl object-cover"
                            height={500}
                            src={`${PATH}/placeholder.png`}
                            width={700}
                        />
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24" id="features">
                <div className="container mx-auto grid gap-8 px-4 md:px-6">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            {t('discover_power')}
                        </h2>
                        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                            {t('power_description')}
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col items-center gap-4 text-center">
                            <DumbbellIcon className="w-12 h-12 text-primary"/>
                            <h3 className="text-lg font-bold">{t('personalized_workouts')}</h3>
                            <p className="text-muted-foreground">
                                {t('personalized_workouts_description')}
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-4 text-center">
                            <ClipboardIcon className="w-12 h-12 text-primary"/>
                            <h3 className="text-lg font-bold">{t('expert_guidance')}</h3>
                            <p className="text-muted-foreground">
                                {t('expert_guidance_description')}
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-4 text-center">
                            <UsersIcon className="w-12 h-12 text-primary"/>
                            <h3 className="text-lg font-bold">{t('supportive_community')}</h3>
                            <p className="text-muted-foreground">
                                {t('supportive_community_description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-muted py-12 md:py-24" id="workouts">
                <div className="container mx-auto grid gap-8 px-4 md:px-6">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            {t('workout_routines')}
                        </h2>
                        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                            {t('workout_routines_description')}
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="bg-background shadow-sm">
                            <CardContent className="p-6 flex flex-col gap-4">
                                <img
                                    alt="Beginner Workout"
                                    className="rounded-lg object-cover"
                                    height={200}
                                    src={`${PATH}/beginner.png`}
                                    width={300}
                                />
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold">{t('beginner_workout')}</h3>
                                    <p className="text-muted-foreground">
                                        {t('beginner_workout_description')}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-background shadow-sm">
                            <CardContent className="p-6 flex flex-col gap-4">
                                <img
                                    alt="Intermediate Workout"
                                    className="rounded-lg object-cover"
                                    height={200}
                                    src={`${PATH}/intermediate.png`}
                                    width={300}
                                />
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold">{t('intermediate_workout')}</h3>
                                    <p className="text-muted-foreground">
                                        {t('intermediate_workout_description')}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-background shadow-sm">
                            <CardContent className="p-6 flex flex-col gap-4">
                                <img
                                    alt="Advanced Workout"
                                    className="rounded-lg object-cover"
                                    height={200}
                                    src={`${PATH}/advanced.png`}
                                    width={300}
                                />
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold">{t('advanced_workout')}</h3>
                                    <p className="text-muted-foreground">
                                        {t('advanced_workout_description')}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24" id="testimonials">
                <div className="container mx-auto grid gap-8 px-4 md:px-6">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t('user_testimonials')}</h2>
                        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                            {t('user_testimonials_description')}
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="bg-background shadow-sm">
                            <CardContent className="p-6 flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <Avatar className="w-12 h-12">
                                        <AvatarImage src={`${PATH}/placeholder-user.jpg`} />
                                        <AvatarFallback>U1</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-bold">Pablo Montenegro</h4>
                                        <p className="text-sm text-muted-foreground">
                                            {t('john_doe_title')}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground">
                                    {t('john_doe_quote')}
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-background shadow-sm">
                            <CardContent className="p-6 flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <Avatar className="w-12 h-12">
                                        <AvatarImage src={`${PATH}/placeholder-user.jpg`} />
                                        <AvatarFallback>U2</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-bold">Laura F.</h4>
                                        <p className="text-sm text-muted-foreground">
                                            {t('jane_smith_title')}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground">
                                    {t('jane_smith_quote')}
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-background shadow-sm">
                            <CardContent className="p-6 flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <Avatar className="w-12 h-12">
                                        <AvatarImage src={`${PATH}/placeholder-user.jpg`} />
                                        <AvatarFallback>U3</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-bold">Vitor</h4>
                                        <p className="text-sm text-muted-foreground">
                                            {t('sarah_lee_title')}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground">
                                    {t('sarah_lee_quote')}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="w-full bg-muted py-12 md:py-24">
                <div className="container mx-auto grid gap-8 px-4 md:px-6">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">App Screenshots</h2>
                        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                            Take a look at some of the key features of the Fitify app.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="bg-background shadow-sm">
                            <CardContent className="p-6 flex flex-col gap-4">
                                <img
                                    alt="Fitify App Screenshot 1"
                                    className="rounded-lg object-cover"
                                    height={500}
                                    src={`${PATH}/screenshot.png`}
                                    width={300}
                                />
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold">Personalized Workouts</h3>
                                    <p className="text-muted-foreground">
                                        Discover personalized workout plans tailored to your fitness level and goals.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-background shadow-sm">
                            <CardContent className="p-6 flex flex-col gap-4">
                                <img
                                    alt="Fitify App Screenshot 2"
                                    className="rounded-lg object-cover"
                                    height={500}
                                    src={`${PATH}/screenshot.png`}
                                    width={300}
                                />
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold">Progress Tracking</h3>
                                    <p className="text-muted-foreground">Monitor your progress and see your improvements
                                        over time.</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-background shadow-sm">
                            <CardContent className="p-6 flex flex-col gap-4">
                                <img
                                    alt="Fitify App Screenshot 3"
                                    className="rounded-lg object-cover"
                                    height={500}
                                    src={`${PATH}/screenshot.png`}
                                    width={300}
                                />
                                <div className="space-y-2">
                                    <h3 className="text-lg font-bold">Community Support</h3>
                                    <p className="text-muted-foreground">
                                        Connect with a supportive community of fitness enthusiasts and share your
                                        progress.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="w-full bg-muted py-12 md:py-24" id="download">
                <div className="container mx-auto grid gap-8 px-4 md:px-6">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{t('download_today')}</h2>
                        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                            {t('download_today_description')}
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row justify-center">
                        <Link
                            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            href="#"
                            prefetch={false}
                        >
                            <PlayIcon className="w-4 h-4 mr-2"/>
                            {t('download_google_play')}
                        </Link>
                        <Link
                            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            href="#"
                            prefetch={false}
                        >
                            <AppleIcon className="w-4 h-4 mr-2"/>
                            {t('download_app_store')}
                        </Link>
                    </div>
                </div>
            </section>
        </Main>
    )
}

export default function Page() {
    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <TranslationProvider>
            <Home/>
        </TranslationProvider>
    );
};