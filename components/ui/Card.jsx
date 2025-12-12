import { cn } from "@/lib/utils";
import React from "react";

const Card = React.forwardRef(({ className, children, hoverEffect = true, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "rounded-3xl bg-white border border-neutral-100/50 p-8 md:p-10 will-change-transform",
                hoverEffect && "transition-all duration-500 hover:shadow-[var(--shadow-medium)] hover:-translate-y-1 hover:scale-[1.01] hover:rotate-[0.25deg] hover:border-transparent",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
});
Card.displayName = "Card";

export { Card };
