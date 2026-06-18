"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Calendar, Clock, CheckCircle2, Loader2, ChevronLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const TIME_SLOTS = [
  "9:00 AM","10:00 AM","11:00 AM","12:00 PM",
  "1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM",
];

function getAvailableDates() {
  const dates: Date[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 1; dates.length < 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getDay() !== 0) dates.push(d);
  }
  return dates;
}

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
});

type ContactData = z.infer<typeof contactSchema>;

export function ShowingScheduler({ listingAddress }: { listingAddress: string }) {
  const { t } = useLanguage();
  const ts = t.scheduler;

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactData>({ resolver: zodResolver(contactSchema) });

  const dates = getAvailableDates();

  const handleOpenChange = (o: boolean) => {
    setOpen(o);
    if (!o) {
      setStep(1);
      setSelectedDate(null);
      setSelectedTime(null);
      reset();
    }
  };

  const onSubmit = async (_data: ContactData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setStep(3);
  };

  const formatDate = (d: Date) =>
    d.toLocaleDateString(ts.locale, {
      weekday: "long",
      month: "long",
      day: "numeric",
    });

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger render={<Button className="w-full" size="lg" />}>
        <Calendar className="h-4 w-4 mr-2" />
        {ts.scheduleBtn}
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>
            {step === 1 && ts.step1Title}
            {step === 2 && ts.step2Title}
            {step === 3 && ts.step3Title}
          </DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" /> {ts.selectDate}
              </p>
              <div className="grid grid-cols-4 gap-1.5">
                {dates.map((d) => (
                  <button
                    key={d.toISOString()}
                    onClick={() => setSelectedDate(d)}
                    className={cn(
                      "flex flex-col items-center py-2 px-1 rounded-lg border text-sm transition-colors",
                      selectedDate?.toDateString() === d.toDateString()
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <span className="text-[10px] uppercase font-medium opacity-70">
                      {ts.days[d.getDay()]}
                    </span>
                    <span className="font-bold text-base">{d.getDate()}</span>
                    <span className="text-[10px] opacity-70">
                      {ts.months[d.getMonth()]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {selectedDate && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {ts.selectTime}
                </p>
                <div className="grid grid-cols-3 gap-1.5">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      className={cn(
                        "py-2 px-3 rounded-lg border text-sm transition-colors",
                        selectedTime === slot
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <Button
              disabled={!selectedDate || !selectedTime}
              onClick={() => setStep(2)}
              className="mt-1"
            >
              {ts.continueBtn}
            </Button>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <div className="bg-muted/50 rounded-lg px-4 py-3 text-sm flex items-start gap-2">
              <Calendar className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <div>
                <p className="font-medium">
                  {selectedDate && formatDate(selectedDate)}
                  {" · "}
                  {selectedTime}
                </p>
                <p className="text-muted-foreground text-xs truncate">
                  {listingAddress}
                </p>
              </div>
            </div>

            <div>
              <Label htmlFor="ss-name">{ts.fullName}</Label>
              <Input
                id="ss-name"
                placeholder={ts.yourName}
                {...register("name")}
                className="mt-1"
              />
              {errors.name && (
                <p className="text-xs text-destructive mt-1">{ts.errors.name}</p>
              )}
            </div>
            <div>
              <Label htmlFor="ss-email">Email</Label>
              <Input
                id="ss-email"
                type="email"
                placeholder="your@email.com"
                {...register("email")}
                className="mt-1"
              />
              {errors.email && (
                <p className="text-xs text-destructive mt-1">{ts.errors.email}</p>
              )}
            </div>
            <div>
              <Label htmlFor="ss-phone">{t.contact.phone}</Label>
              <Input
                id="ss-phone"
                type="tel"
                placeholder="(514) 000-0000"
                {...register("phone")}
                className="mt-1"
              />
              {errors.phone && (
                <p className="text-xs text-destructive mt-1">{ts.errors.phone}</p>
              )}
            </div>
            <div className="flex gap-2 mt-1">
              <Button type="button" variant="outline" onClick={() => setStep(1)}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button type="submit" disabled={loading} className="flex-1">
                {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                {ts.confirmBtn}
              </Button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="flex flex-col items-center text-center gap-3 py-6">
            <CheckCircle2 className="h-12 w-12 text-emerald-500" />
            <p className="font-semibold text-lg">{ts.confirmedTitle}</p>
            <p className="text-muted-foreground text-sm max-w-xs">
              {selectedDate &&
                selectedTime &&
                ts.confirmedText(formatDate(selectedDate), selectedTime)}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleOpenChange(false)}
              className="mt-2"
            >
              {ts.doneBtn}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
