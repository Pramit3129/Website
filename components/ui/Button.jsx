import { cn } from "@/lib/utils";
import React from "react";

const Button = React.forwardRef(({ className, variant = "primary", size = "default", asChild = false, children, ...props }, ref) => {
    const variants = {
        primary: "bg-primary-900 text-white hover:bg-primary-800 shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-hard)] hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300 active:scale-95",
        secondary: "bg-accent-500 text-primary-950 hover:bg-accent-400 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300 font-semibold tracking-wide",
        ghost: "bg-transparent text-primary-900 hover:bg-neutral-100/50 hover:text-primary-800 transition-colors",
        outline: "bg-transparent border border-neutral-200 text-primary-900 hover:bg-neutral-50 hover:border-primary-900/20 transition-all duration-300",
        gradient: "gradient-bg text-white shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-hard)] hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300 border-none",
        white: "bg-white text-primary-900 hover:bg-neutral-50 shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-hard)] hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300",
    };

    const sizes = {
        default: "h-12 px-8 py-3 text-sm",
        sm: "h-10 px-5 text-xs uppercase tracking-wider",
        lg: "h-14 px-10 text-base",
        icon: "h-12 w-12",
    };

    const classes = cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-all transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 cursor-pointer will-change-transform",
        variants[variant],
        sizes[size],
        className
    );

    if (asChild) {
        return React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    className: cn(classes, child.props.className),
                    ref,
                    ...props,
                });
            }
            return child;
        });
    }

    return (
        <button
            ref={ref}
            className={classes}
            {...props}
        >
            {children}
        </button>
    );
});
Button.displayName = "Button";

export { Button };
