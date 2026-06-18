"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export function ContactForm({
  listingAddress,
  defaultMessage,
}: {
  listingAddress?: string;
  defaultMessage?: string;
}) {
  const { t } = useLanguage();
  const tc = t.contact;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const resolvedDefault =
    defaultMessage ??
    (listingAddress ? tc.defaultMessage(listingAddress) : "");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { message: resolvedDefault },
  });

  const onSubmit = async (_data: FormData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center gap-3">
        <CheckCircle2 className="h-10 w-10 text-emerald-500" />
        <p className="font-semibold text-lg">{tc.successTitle}</p>
        <p className="text-muted-foreground text-sm max-w-xs">{tc.successSub}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <div>
        <Label htmlFor="cf-name">{tc.name}</Label>
        <Input
          id="cf-name"
          placeholder={tc.namePlaceholder}
          {...register("name")}
          className="mt-1"
        />
        {errors.name && (
          <p className="text-xs text-destructive mt-1">{tc.errors.name}</p>
        )}
      </div>
      <div>
        <Label htmlFor="cf-email">{tc.email}</Label>
        <Input
          id="cf-email"
          type="email"
          placeholder="your@email.com"
          {...register("email")}
          className="mt-1"
        />
        {errors.email && (
          <p className="text-xs text-destructive mt-1">{tc.errors.email}</p>
        )}
      </div>
      <div>
        <Label htmlFor="cf-phone">
          {tc.phone}{" "}
          <span className="text-muted-foreground">{tc.phoneOptional}</span>
        </Label>
        <Input
          id="cf-phone"
          type="tel"
          placeholder="(514) 000-0000"
          {...register("phone")}
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="cf-message">{tc.message}</Label>
        <Textarea
          id="cf-message"
          rows={4}
          {...register("message")}
          className="mt-1 resize-none"
        />
        {errors.message && (
          <p className="text-xs text-destructive mt-1">{tc.errors.message}</p>
        )}
      </div>
      <Button type="submit" disabled={loading} className="w-full mt-1">
        {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
        {tc.send}
      </Button>
    </form>
  );
}
