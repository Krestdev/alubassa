"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Checkbox } from '../ui/checkbox';
import Reveal from "../reveal";
import { toast } from "../ui/sonner";
import { useState } from "react";
import { Loader } from "lucide-react";
//import { toast } from "sonner";

const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "Trop court",
    }).max(21,{message:"Trop long"}),
    lastName: z.string().min(2, {
        message: "Trop court",
    }).max(21, {message: "Trop long"}),
    email: z.string().email({
        message: "Veuillez entrer une adresse email valide.",
    }),
    phone: z.string().min(9, {
        message: "Veuillez entre un numéro valide",
    }),
    subject: z.string().min(3, {message: "Trop court"}).max(30, {message: "Trop long"}),
    message: z.string().min(10, {
        message: "Trop court",
    }),
    privacyPolicy: z.boolean().refine((val) => val === true, {
        message: "Veuillez accepter pour soumettre votre message",
    }),
});

const ContactForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            subject: "",
            email: "",
            phone: "",
            message: "",
            privacyPolicy: false
        },
    });

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
         try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setIsSubmitting(false);
        toast({title: "Erreur d'envoi", description:"Une erreur s'est produite pendant l'envoi de votre message", button:{label: "Ressayer", onClick:()=>{}}, variant: "destructive"});
        throw new Error(result.error || "Erreur serveur");
      }

      setIsSubmitting(false);
      toast({title: t("success"), variant: "success"});
      form.reset();


    } catch (error) {
        setIsSubmitting(false);
      toast({title:t("error"), variant: "destructive", description: String(error)});
      console.error("Erreur:", error);
    }
    }

    const t = useTranslations("contact")

    return (
        <div className='component grid grid-cols-1 md:grid-cols-5 gap-7 sm:gap-10 md:gap-14 lg:gap-[72px]'>
            <Reveal blur={3} y={20} className="hidden md:block col-span-2">
                <img src="/contact.webp" alt="Contact" className='w-full h-fit aspect-[3/4] rounded-[12px] object-cover' />
            </Reveal>

            <Reveal blur={3} opacity={50} y={20} delay={0.35} className='col-span-1 md:col-span-3 flex flex-col gap-12'>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-black'>{t("contactUs")}</h2>
                    <p>{t("description")}</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className='flex flex-col gap-8'>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Champ Prénom */}
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t("firstName")}</FormLabel>
                                            <FormControl>
                                                <Input placeholder={t("firstName")} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Champ Nom */}
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t("lastName")}</FormLabel>
                                            <FormControl>
                                                <Input placeholder={t("lastName")} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Champ Email */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t("email")}</FormLabel>
                                        <FormControl>
                                            <Input placeholder="ex. votre@email.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Champ Téléphone */}
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t("phone")}</FormLabel>
                                        <FormControl>
                                            <Input placeholder="ex. +237 655 55 55 55" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Champ Sujet */}
                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t("subject")}</FormLabel>
                                        <FormControl>
                                            <Input placeholder="ex. Prise de contact" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Champ Message */}
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t("message")}</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Rédigez votre message"
                                                className="min-h-[120px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="privacyPolicy"
                                render={({ field }) => (
                                    <FormItem className='flex flex-row gap-2 items-center flex-wrap'>
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1">
                                            <FormLabel>
                                                {t("accept")}
                                                <Link
                                                    href="/politique-de-confidentialite"
                                                    className="underline"
                                                    target="_blank"
                                                >
                                                    {t("privacy")}
                                                </Link>
                                            </FormLabel>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {
                                    isSubmitting && <Loader size={16} className="animate-spin"/>
                                }
                                {t("send")}
                            </Button>
                        </div>
                    </form>
                </Form>
            </Reveal>
        </div>
    )
}

export default ContactForm