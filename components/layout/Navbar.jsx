"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X, Home, BookOpen, Info, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/", Icon: Home, color: "bg-blue-100 text-blue-600" },
    { name: "Programs", href: "/programs", Icon: BookOpen, color: "bg-emerald-100 text-emerald-600" },
    { name: "About", href: "/#mission", Icon: Info, color: "bg-amber-100 text-amber-600" },
    { name: "Contact", href: "/contact", Icon: Phone, color: "bg-rose-100 text-rose-600" },
];

function NavLink({ name, href, Icon, color }) {
    const [isHovered, setIsHovered] = useState(false);
    const [bgClass, textClass] = color.split(" ");

    return (
        <Link href={href} passHref legacyBehavior>
            <motion.a
                className="relative flex items-center justify-center h-10 px-4 rounded-full text-sm font-medium text-primary-900/80 transition-colors cursor-pointer"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >
                {/* Animated Background Pill */}
                <motion.div
                    className={`absolute inset-0 rounded-full z-0 ${bgClass}`}
                    initial={false}
                    animate={{
                        width: isHovered ? 40 : "100%",
                        left: isHovered ? "50%" : "0%",
                        x: isHovered ? "-50%" : "0%",
                        opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />

                {/* Text */}
                <motion.span
                    className="whitespace-nowrap relative z-10"
                    animate={{
                        opacity: isHovered ? 0 : 1,
                        scale: isHovered ? 0.8 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                >
                    {name}
                </motion.span>

                {/* Icon */}
                <motion.div
                    className={`absolute inset-0 flex items-center justify-center z-10 ${textClass}`}
                    initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        scale: isHovered ? 1 : 0.5,
                        rotate: isHovered ? 0 : -45,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                    <Icon size={20} />
                </motion.div>
            </motion.a>
        </Link>
    );
}

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    scrolled ? "py-4" : "py-6"
                )}
            >
                <div className={cn(
                    "container mx-auto px-6 transition-all duration-300",
                    scrolled ? "max-w-5xl" : "max-w-7xl"
                )}>
                    <div className={cn(
                        "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
                        scrolled
                            ? "bg-white/90 backdrop-blur-xl border border-transparent shadow-2xl shadow-primary-900/10"
                            : "bg-white/80 backdrop-blur-md border border-neutral-200/60 shadow-lg shadow-primary-900/5"
                    )}>
                        <Link href="/" className="text-2xl font-heading font-bold tracking-tight text-primary-900 z-50 relative">
                            ELV8S
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center space-x-2">
                            {navLinks.map((link) => (
                                <NavLink key={link.name} {...link} />
                            ))}
                            <Button variant="primary" size="sm" asChild className="ml-4 rounded-full px-6 font-heading tracking-wide shadow-md hover:shadow-lg transition-all">
                                <Link href="/contact">Book Consultation</Link>
                            </Button>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden text-primary-900 z-50 relative p-2"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-3xl font-heading font-bold text-primary-900"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button size="lg" asChild onClick={() => setIsOpen(false)} className="rounded-full px-8">
                            <Link href="/contact">Book Consultation</Link>
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
