"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps, toast as sonnerToast } from "sonner"
import { Button } from "./button"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }

export const toastVariants = cva(
  "flex w-full md:max-w-[364px] items-center p-4 rounded-lg shadow-lg ring-1 ring-black/5",
  {
    variants: {
      variant: {
        default: "bg-white text-gray-900",
        success: "bg-green-50 text-green-800 border border-green-200",
        warning: "bg-yellow-50 text-yellow-800 border border-yellow-200",
        destructive: "bg-red-50 text-red-800 border border-red-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export function toast(toast: Omit<ToastProps, 'id'>) {
  return sonnerToast.custom((id) => (
    <Toast
      id={id}
      {...toast}
    />
  ));
}
/** A fully custom toast that still maintains the animations and interactions. */
function Toast(props: ToastProps) {
  const { title, description, button, id, variant = "default" } = props;

  return (
    <div className={cn(toastVariants({ variant }))}>
      <div className="flex flex-1 items-center">
        <div className="w-full">
          <p className="text-sm font-medium">{title}</p>
          {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
        </div>
      </div>
      {button && (
        <div className="ml-5 shrink-0 rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
          <Button
            size={"sm"}
            onClick={() => {
              button.onClick();
              sonnerToast.dismiss(id);
            }}
          >
            {button.label}
          </Button>
        </div>
      )}
    </div>
  );
}

type buttonType = {
  label: string;
  onClick: () => void;
}

type ToastVariant = "default" | "warning" | "destructive" | "success";

interface ToastProps {
  id: string | number;
  title: string;
  description?: string;
  button?: buttonType;
  variant?:ToastVariant;
}
