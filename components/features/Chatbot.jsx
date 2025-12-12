"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            <div
                className={cn(
                    "bg-white rounded-2xl shadow-2xl border border-neutral-100 w-80 md:w-96 mb-4 overflow-hidden transition-all duration-300 origin-bottom-right",
                    isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 translate-y-10 pointer-events-none"
                )}
            >
                <div className="bg-primary-900 p-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                        <h3 className="text-white text-sm font-semibold m-0">ELV8S Assistant</h3>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
                        <X size={18} />
                    </button>
                </div>

                <div className="h-80 bg-neutral-50 p-4 overflow-y-auto flex flex-col space-y-4">
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm self-start max-w-[85%] text-sm text-neutral-800">
                        Hi there! 👋 I'm here to help you navigate your career journey. Ask me anything about our programs!
                    </div>
                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm self-start max-w-[85%] text-sm text-neutral-800">
                        Try asking: "What's the best program for a career switcher?"
                    </div>
                </div>

                <div className="p-3 bg-white border-t border-neutral-100 flex items-center space-x-2">
                    <Input placeholder="Type a message..." className="flex-1 h-10 text-sm" />
                    <Button size="icon" className="h-10 w-10 rounded-lg bg-primary-900 hover:bg-primary-800">
                        <Send size={16} />
                    </Button>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                id="chatbot-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="h-14 w-14 rounded-full bg-primary-900 text-white shadow-lg hover:shadow-xl hover:bg-primary-800 flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </button>
        </div>
    );
}
