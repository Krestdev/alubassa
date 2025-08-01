'use client'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

type Props = {
    href: string;
    title: string;
}

function Navlink({href, title}:Props) {

    const fullPath = usePathname();
    const isActive = fullPath.endsWith(href);

  return (
    <Link href={href} className={cn("px-4 h-10 flex items-center gap-2 text-base rounded-sm text-gray-900 hover:bg-primary/10", isActive && "font-semibold text-primary")}>{title}</Link>
  )
}

export default Navlink