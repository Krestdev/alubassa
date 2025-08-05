import Head from '@/components/Head';
import { useTranslations } from 'next-intl';
import React from 'react';

function Page() {
  const t = useTranslations("terms");
  const sections = t.raw("sections") as { title: string; content: string }[];

  return (
    <div>
      <Head name={t("title")} title={t("title")} />
      <div className='flex flex-col gap-4 py-24 containerBloc'>
        {sections.map((section, index) => (
          <div key={index} className='flex flex-col gap-2'>
            <h3 className='text-primary'>{section.title}</h3>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
