"use client";

import { Button } from "@/components/ui/Button";

export function ChatTrigger() {
    return (
        <Button variant="secondary" onClick={() => document.getElementById('chatbot-toggle')?.click()}>
            Open Chat Assistant
        </Button>
    );
}
