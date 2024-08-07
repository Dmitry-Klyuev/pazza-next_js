import React from 'react';
import {cn} from "@/lib/utils";
import {Container} from "@/components/shared/container";
import Image from "next/image";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {ArrowRight, ShoppingCart, User} from "lucide-react";


interface iHeader {
    className?: string
}


export const Header: React.FC<iHeader> = ({className}) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container>
                <div className={'flex justify-between items-center py-8'}>
                    <div className={'flex items-center gap-3'}>
                        <Image src={'/logo.png'} alt={'logo'} width={35} height={35 }/>
                        <div className={'flex flex-col '}>
                            <h2 className={'text-2xl uppercase font-black'}>Next pizza</h2>
                            <p className={'text-sm uppercase text-gray-400 leading-3'}>вкуснее уже некуда</p>
                        </div>
                    </div>
                    <div>
                        <Input placeholder={'поиск пиццы'} className={'bg-gray-100'} />
                    </div>
                    <div className={'flex items-center gap-3'}>
                        <Button variant={'outline'} className={'flex items-center gap-1'}>
                            <User size={16}/>
                            Войти
                        </Button>
                        <div>
                            <Button className={'relative group'}>
                                <p>520р</p>
                                <span className={'h-full w-[1px] bg-white/30 mx-3 '}></span>
                                <div className={'flex items-center gap-1 transition duration-300 group-hover:opacity-0' }>
                                    <ShoppingCart className={'w-4 h-4 relative'}/>
                                    3
                                </div>
                                <ArrowRight className={'w-5 absolute right-5 opacity-0 group-hover:opacity-100 transition duration-300 -translate-x-3 group-hover:translate-x-0'} />

                            </Button>

                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};