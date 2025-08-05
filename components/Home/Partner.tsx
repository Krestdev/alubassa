"use client"

import React, { useEffect, useRef } from 'react';

const Partner = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);
    const animationFrameId = useRef<number | null>(null);
    const scrollAmount = useRef(0);
    const isPaused = useRef(false);
    const speed = 1;

    useEffect(() => {

         const partner = ["/logo.png", "/logo.png", "/logo.png", "/logo.png", "/logo.png", "/logo.png", "/logo.png", "/logo.png"];
        if (!containerRef.current || !scrollerRef.current) return;

        const container = containerRef.current;
        const scroller = scrollerRef.current;

        // Dupliquer les logos pour défilement infini
        scroller.innerHTML = '';
        const logos = partner.map((item, index) => (
            `<div key="${index}" class="flex-shrink-0 h-[80px] w-[120px] flex items-center">
                <img src="${item}" alt="Logo" class="max-w-[120px] w-full h-auto aspect-auto" />
            </div>`
        )).join('');
        scroller.innerHTML = logos + logos;

        const scroll = () => {
            if (isPaused.current) {
                animationFrameId.current = requestAnimationFrame(scroll);
                return;
            }

            if (scroller.scrollWidth / 2 <= scrollAmount.current) {
                scrollAmount.current = 0;
                scroller.style.transition = 'none';
                scroller.style.transform = `translateX(0px)`;
            } else {
                scrollAmount.current += speed;
                scroller.style.transition = 'transform 0.1s linear';
                scroller.style.transform = `translateX(${-scrollAmount.current}px)`;
            }

            animationFrameId.current = requestAnimationFrame(scroll);
        };

        scroll(); // Lancer l'animation

        // Pause/Resume on hover
        container.addEventListener('mouseenter', () => {
            isPaused.current = true;
        });

        container.addEventListener('mouseleave', () => {
            isPaused.current = false;
        });

        return () => {
            if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
            container.removeEventListener('mouseenter', () => { });
            container.removeEventListener('mouseleave', () => { });
        };
    }, []);

    return (
        <div className='w-full overflow-hidden bg-gray-100 py-12'>
            <div ref={containerRef} className='relative w-full'>
                <div className='max-w-[1106px] w-full mx-auto overflow-x-hidden'>
                    <div
                        ref={scrollerRef}
                        className='flex gap-5'
                        style={{ willChange: 'transform' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Partner;
