import { infos } from "@/app/contact/infos";
import ContactForm from "@/components/Contact/ContactForm";
import IconBox from "@/components/Contact/IconBox";
import Reveal from "@/components/reveal";
import { formatNumber } from "@/lib/utils";
import { LucideMail, LucidePhone, MapPinIcon } from "lucide-react";
import { useTranslations } from "next-intl";

const Contact = () => {
    const t = useTranslations("contact");
    return (
        <div>
            <Reveal y={20} className="component py-10 sm:py-12 md:py-14 lg:py-[60px] w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-[22px]">
                <IconBox title={t("localisation")} icon={<MapPinIcon size={20} />}>
                    <p className="text-gray-900 text-base font-semibold">
                        {t(infos.location)}
                    </p>
                </IconBox>
                <IconBox title={t("mail")} icon={<LucideMail size={20} />}>
                    <a
                        href={`mailto:${infos.mail}`}
                        className="font-semibold text-gray-900 hover:text-primary-800"
                    >
                        {infos.mail}
                    </a>
                </IconBox>
                <IconBox title={t("phone")} icon={<LucidePhone size={20} />}>
                    <div className="grid">
                        {infos.phone.map((x, id) => (
                            <a
                                key={id}
                                href={`tel:${x}`}
                                className="font-semibold text-gray-900 hover:text-primary-800"
                            >
                                {formatNumber(x)}
                            </a>
                        ))}
                    </div>
                </IconBox>
            </Reveal>
            <ContactForm />
        </div>
    );
};

export default Contact;
