"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, X, Send, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AGENT } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  from: "agent" | "user";
  text: string;
  time: string;
};

function now() {
  return new Date().toLocaleTimeString("en-CA", { hour: "numeric", minute: "2-digit" });
}

export function ChatWidget() {
  const { t } = useLanguage();
  const tc = t.chat;

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Re-init greeting when language changes
  useEffect(() => {
    setMessages([
      {
        id: "0",
        from: "agent",
        text: tc.greeting(AGENT.fullName),
        time: now(),
      },
    ]);
  }, [tc]);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const getCannedResponse = (text: string): string => {
    const lower = text.toLowerCase();
    if (lower.includes("available") || lower.includes("disponible") || lower.includes("still") || lower.includes("toujours"))
      return tc.canned.available;
    if (lower.includes("view") || lower.includes("show") || lower.includes("visit") || lower.includes("visite") || lower.includes("planif"))
      return tc.canned.viewing;
    if (lower.includes("condo") || lower.includes("fee") || lower.includes("frais"))
      return tc.canned.condo;
    if (lower.includes("area") || lower.includes("neighbourhood") || lower.includes("neighborhood") || lower.includes("quartier"))
      return tc.canned.area;
    return tc.fallback(AGENT.phone);
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      from: "user",
      text: text.trim(),
      time: now(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      const reply: Message = {
        id: (Date.now() + 1).toString(),
        from: "agent",
        text: getCannedResponse(text),
        time: now(),
      };
      setMessages((prev) => [...prev, reply]);
    }, 1500);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        className={cn(
          "fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all",
          open && "hidden"
        )}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      <div
        className={cn(
          "fixed bottom-5 right-5 z-50 flex flex-col w-80 rounded-2xl shadow-2xl border bg-background transition-all duration-300 origin-bottom-right",
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        )}
        style={{ height: 480 }}
      >
        <div className="flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground rounded-t-2xl">
          <div className="relative h-9 w-9 rounded-full overflow-hidden shrink-0 bg-primary-foreground/20">
            <Image
              src={AGENT.photo}
              alt={AGENT.fullName}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm leading-tight">{AGENT.fullName}</p>
            <p className="text-xs opacity-80 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block" />
              {tc.onlineStatus}
            </p>
          </div>
          <button onClick={() => setOpen(false)} className="opacity-80 hover:opacity-100">
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex flex-col max-w-[85%] gap-0.5",
                msg.from === "user" ? "self-end items-end" : "self-start items-start"
              )}
            >
              <div
                className={cn(
                  "rounded-2xl px-3 py-2 text-sm leading-relaxed",
                  msg.from === "user"
                    ? "bg-primary text-primary-foreground rounded-br-sm"
                    : "bg-muted rounded-bl-sm"
                )}
              >
                {msg.text}
              </div>
              <span className="text-[10px] text-muted-foreground px-1">
                {msg.time}
              </span>
            </div>
          ))}
          {typing && (
            <div className="self-start bg-muted rounded-2xl rounded-bl-sm px-4 py-2.5">
              <span className="flex gap-1 items-center">
                <span className="h-1.5 w-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:0ms]" />
                <span className="h-1.5 w-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 bg-muted-foreground rounded-full animate-bounce [animation-delay:300ms]" />
              </span>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {messages.length < 3 && (
          <div className="px-3 pb-2 flex flex-wrap gap-1.5">
            {tc.quickReplies.map((qr) => (
              <button
                key={qr}
                onClick={() => sendMessage(qr)}
                className="text-xs border rounded-full px-2.5 py-1 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                {qr}
              </button>
            ))}
          </div>
        )}

        <div className="border-t px-3 py-2.5 flex gap-2">
          <Input
            placeholder={tc.placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage(input);
              }
            }}
            className="h-9 text-sm"
          />
          <Button
            size="icon"
            className="h-9 w-9 shrink-0"
            onClick={() => sendMessage(input)}
            disabled={!input.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {open && (
        <button
          onClick={() => setOpen(false)}
          aria-label="Close chat"
          className="fixed bottom-5 right-5 z-[51] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
