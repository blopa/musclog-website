import React from 'react';
import styles from './Layout.module.css';
import { Link } from 'react-router-dom';
import {DumbbellIcon, MenuIcon} from "./Icons.tsx";

function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-dvh bg-background">
            <header className={`${styles.header} sticky top-0 z-50 bg-background/80 backdrop-blur`}>
                <div className={`${styles.container} container flex items-center justify-between h-14 px-4 md:px-6`}>
                    <Link to="#" className="flex items-center gap-2">
                        <DumbbellIcon className="w-6 h-6" />
                        <span className="font-bold text-lg">Musclog</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-4">
                        <Link to="#" className="text-sm font-medium hover:underline">Home</Link>
                        <Link to="#" className="text-sm font-medium hover:underline">Features</Link>
                        <Link to="#" className="text-sm font-medium hover:underline">Workouts</Link>
                        <Link to="#" className="text-sm font-medium hover:underline">Testimonials</Link>
                        <Link to="#" className="text-sm font-medium hover:underline">Download</Link>
                    </nav>
                    <button className="md:hidden">
                        <MenuIcon className="w-6 h-6" />
                        <span className="sr-only">Toggle navigation</span>
                    </button>
                </div>
            </header>
            {children}
            <footer className={`${styles.footer} bg-muted p-6 md:p-12`}>
                <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
                    <div className="grid gap-1">
                        <h3 className="font-semibold">Company</h3>
                        <Link to="#">About Us</Link>
                        <Link to="#">Careers</Link>
                        <Link to="#">Contact</Link>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="font-semibold">Products</h3>
                        <Link to="#">Musclog App</Link>
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
                        <Link to="#">Privacy Policy</Link>
                        <Link to="#">Terms of Service</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Layout;
