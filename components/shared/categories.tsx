'use client'

import React, {useState} from "react";
import {cn} from "@/lib/utils";

interface Props {
    className?: string
}

const cats = ["Пиццы", "Комбо", "Закуски", "Коктейли", "Кофе", "Напитки", "Десерты"];

export const Categories: React.FC<Props> = ({className}) => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className={cn('inline-flex gap-1 p-1 rounded-2xl bg-gray-50 ', className)}>
            {cats.map((el, i) => (
                <a key={i} className={cn(
                    'flex items-center font-bold h-11 rounded-2xl px-5',
                    activeIndex === i && 'bg-white shadow-md shadow-gray-200 text-primary'
                )}
                onClick={()=>setActiveIndex(i)}
                >
                    <button>{el}</button>
                </a>
            ))}
        </div>
    );
};