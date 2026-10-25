import type { ReactNode } from "react";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("block", className)}>
      <div className="eyebrow mb-1">{label}</div>
      {children}
      {error && <div className="text-xs text-destructive mt-1">{error}</div>}
    </div>
  );
}

function toIso(d: Date) {
  return format(d, "yyyy-MM-dd");
}

export function DateField({
  value,
  onChange,
  placeholder = "Choisir une date",
  disablePast = true,
}: {
  value?: string;
  onChange: (v: string) => void;
  placeholder?: string;
  disablePast?: boolean;
}) {
  const selected = value ? parseISO(value) : undefined;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn("field-input flex items-center justify-between text-left", !selected && "text-muted-foreground")}
        >
          {selected ? format(selected, "EEEE d MMMM yyyy", { locale: fr }) : placeholder}
          <CalendarIcon size={16} className="text-accent shrink-0" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          locale={fr}
          selected={selected}
          onSelect={(d) => d && onChange(toIso(d))}
          disabled={disablePast ? { before: today } : undefined}
          initialFocus
          className="p-3 pointer-events-auto"
        />
      </PopoverContent>
    </Popover>
  );
}

/** Pill-style radio / checkbox option. Pass the react-hook-form `register` result via `inputProps`. */
export function Chip({
  type,
  value,
  label,
  inputProps,
}: {
  type: "radio" | "checkbox";
  value: string;
  label: string;
  inputProps: React.InputHTMLAttributes<HTMLInputElement> & { ref?: React.Ref<HTMLInputElement> };
}) {
  return (
    <label className="cursor-pointer">
      <input type={type} value={value} className="peer sr-only" {...inputProps} />
      <span className="inline-block text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-border transition-colors hover:border-foreground peer-checked:bg-foreground peer-checked:text-background peer-checked:border-foreground peer-focus-visible:ring-2 peer-focus-visible:ring-ring">
        {label}
      </span>
    </label>
  );
}
