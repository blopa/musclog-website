// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './Layout.module.css';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur">
                <div className="container flex items-center justify-between h-14 px-4 md:px-6">
                    <Link to="#" className="flex items-center gap-2">
                        <DumbbellIcon className="w-6 h-6" />
                        <span className="font-bold text-lg">Fitify</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-4">
                        <Link to="#" className="text-sm font-medium hover:underline">
                            Home
                        </Link>
                        <Link to="#" className="text-sm font-medium hover:underline">
                            Features
                        </Link>
                        <Link to="#" className="text-sm font-medium hover:underline">
                            Workouts
                        </Link>
                        <Link to="#" className="text-sm font-medium hover:underline">
                            Testimonials
                        </Link>
                        <Link to="#" className="text-sm font-medium hover:underline">
                            Download
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="bg-muted p-6 md:p-12">
                <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
                    <div className="grid gap-1">
                        <h3 className="font-semibold">Company</h3>
                        <Link to="#">About Us</Link>
                        <Link to="#">Careers</Link>
                        <Link to="#">Contact</Link>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="font-semibold">Products</h3>
                        <Link to="#">Fitify App</Link>
                        <Link to="#">Workout Plans</Link>
                        <Link to="#">Nutrition Guides</Link>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="font-semibold">Resources</h3>
                        <Link to="#">Blog</Link>
                        <Link to="#">FAQ</Link>
                        <Link to="#">Support</Link>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="font-semibold">Legal</h3>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;

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
