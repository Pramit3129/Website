import { cn } from "@/lib/utils";
import React from "react";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cn(
                "flex h-14 w-full rounded-xl border border-neutral-200 bg-neutral-50/50 px-5 py-3 text-base ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900/15 focus-visible:border-primary-900 hover:border-neutral-300 transition-all duration-300 focus-visible:shadow-[0_8px_20px_rgba(16,24,40,0.06)]",
                className
            )}
            ref={ref}
            {...props}
        />
    );
});
Input.displayName = "Input";

const Select = React.forwardRef(({ className, children, ...props }, ref) => {
    return (
        <div className="relative">
            <select
                className={cn(
                    "flex h-14 w-full appearance-none rounded-xl border border-neutral-200 bg-neutral-50/50 px-5 py-3 text-base ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900/15 focus-visible:border-primary-900 hover:border-neutral-300 transition-all duration-300 focus-visible:shadow-[0_8px_20px_rgba(16,24,40,0.06)]",
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-neutral-500">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>
        </div>
    );
});
Select.displayName = "Select";

const Checkbox = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <input
            type="checkbox"
            className={cn(
                "h-5 w-5 rounded border-neutral-300 text-primary-900 focus:ring-primary-900 transition-all duration-200 cursor-pointer accent-primary-900",
                className
            )}
            ref={ref}
            {...props}
        />
    );
});
Checkbox.displayName = "Checkbox";

export { Input, Select, Checkbox };
