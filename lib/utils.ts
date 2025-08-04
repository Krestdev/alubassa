import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(raw: string): string {
  const match = raw.match(/^\+237(\d{3})(\d{2})(\d{2})(\d{2})$/);
  if (!match) return raw;
  return `+237 ${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
}