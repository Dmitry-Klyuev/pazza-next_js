import React from "react";
import Link from "next/link";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {Title} from "@/components/shared/title";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";

interface Props {
    className?: string
    id: number
    imageUrl: string
    name: string
    price: number
}

export const ProductCard: React.FC<Props> = ({className, id, name, price, imageUrl}) => {
    return (
        <div className={className}>
            <Link href={`/product/${id}`} >
                <div
                    className={cn('flex justify-center items-center p-6 bg-secondary rounded-lg h-[260px]', className)}>
                    <Image src={`/products/${imageUrl}`} alt="photo_product" width={215} height={215}/>

                </div>
                <Title text={name} className={'mb-1 mt-3 font-bold'}/>
                <p className={'text-sm text-gray-400'}>Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо,
                    чеснок</p>

                <div className={'flex justify-between mt-4 items-center'}>
                    <span className={'text-[20px]'}>
                        от <b>{price} ₽</b>
                    </span>
                    <Button variant={'secondary'} className={'text-base font-bold'}>
                        <Plus className="mr-2"/>
                        Добавить
                    </Button>
                </div>
            </Link>

        </div>
    );
};