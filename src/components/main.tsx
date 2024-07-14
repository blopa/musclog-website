import { Button } from '@/components/ui/button';
import { DumbbellIcon, MenuIcon } from '@/components/ui/icons';
import Link from 'next/link';
import { appWithTranslation, useTranslation } from 'next-i18next';

import '../i18n';

type MainProps = {
    children: React.ReactNode;
    showMenuItems?: boolean;
};

function Main({ children, showMenuItems = true }: MainProps) {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col min-h-dvh bg-background">
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur w-full">
                <div className="container mx-auto flex items-center justify-between h-14 px-4 md:px-6">
                    <Link className="flex items-center gap-2" href="#" prefetch={false}>
                        <DumbbellIcon className="w-6 h-6"/>
                        <span className="font-bold text-lg">{t('app_name')}</span>
                    </Link>
                    {showMenuItems && (
                        <>
                            <nav className="hidden md:flex items-center gap-4">
                                <Link className="text-sm font-medium hover:underline" href="#" prefetch={false}>
                                    {t('nav_home')}
                                </Link>
                                <Link className="text-sm font-medium hover:underline" href="#features" prefetch={false}>
                                    {t('nav_features')}
                                </Link>
                                <Link className="text-sm font-medium hover:underline" href="#workouts" prefetch={false}>
                                    {t('nav_workouts')}
                                </Link>
                                <Link className="text-sm font-medium hover:underline" href="#testimonials" prefetch={false}>
                                    {t('nav_testimonials')}
                                </Link>
                                <Link className="text-sm font-medium hover:underline" href="#download" prefetch={false}>
                                    {t('nav_download')}
                                </Link>
                            </nav>
                            <Button className="md:hidden" size="icon" variant="outline">
                                <MenuIcon className="w-6 h-6"/>
                                <span className="sr-only">{t('toggle_navigation')}</span>
                            </Button>
                        </>
                    )}
                </div>
            </header>
            <main className="flex-1 w-full">
                {children}
            </main>
        </div>
    );
}

// @ts-ignore
export default appWithTranslation(Main);
