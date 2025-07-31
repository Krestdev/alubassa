"use client"

import React from 'react'
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
import { Checkbox } from '../ui/checkbox';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "Le prénom doit contenir au moins 2 caractères.",
    }),
    lastName: z.string().min(2, {
        message: "Le nom doit contenir au moins 2 caractères.",
    }),
    email: z.string().email({
        message: "Veuillez entrer une adresse email valide.",
    }),
    phone: z.string().min(10, {
        message: "Le numéro de téléphone doit contenir au moins 10 chiffres.",
    }),
    message: z.string().min(10, {
        message: "Le message doit contenir au moins 10 caractères.",
    }),
    privacyPolicy: z.boolean().refine((val) => val === true, {
        message: "Vous devez accepter les politiques de confidentialité.",
    }),
});

const ContactForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            privacyPolicy: false
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        // Ici vous pourriez ajouter la logique pour envoyer les données à votre API
    }

    const t = useTranslations("contact")

    return (
        <div className='flex flex-row gap-[72px] max-w-[1106px] w-full mx-auto py-24'>
            <img src="/contact.webp" alt="Contact" className='max-w-[376px] w-full h-fit aspect-[3/4] rounded-[12px] object-cover' />

            <div className='flex flex-col gap-12'>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-black'>{t("contactUs")}</h2>
                    <p className='text-gray-700 text-[16px] max-w-[480px] w-full'>{t("description")}</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-[658px] w-full">
                        <div className='max-w-[480px] w-full mx-auto flex flex-col gap-8'>
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
                                            <Input placeholder="votre@email.com" {...field} />
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
                                            <Input placeholder="+237 6XX XX XX XX" {...field} />
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
                                                placeholder=""
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
                                    <FormItem className="flex flex-row items-start space-x-3">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel>
                                                {t("accept")}{" "}
                                                <Link
                                                    href="/politique-de-confidentialite"
                                                    className="text-primary underline"
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

                            <Button type="submit" className="w-full">
                                {t("send")}
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default ContactForm