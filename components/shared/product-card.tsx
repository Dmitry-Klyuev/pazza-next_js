import React from "react";
import Link from "next/link";
import Image from "next/image";
import {cn} from "@/lib/utils";

interface Props {
    className?: string
    id: string
    imageUrl?: string
    name: string
    price: number

}

export const ProductCard: React.FC<Props> = ({className, id, name, price, imageUrl}) => {
    return (
        <div className={className}>
            <Link href={`/product/${id}`} className={'flex flex-col items-center gap-1'}>
                <div
                    className={cn('flex justify-center items-center p-6 bg-secondary rounded-lg h-[260px]', className)}>
                    <Image src={`/products/${imageUrl}`} alt="photo_product" width={215} height={215}/>

                </div>
                <h2 className={'font-bold'}>{name}</h2>
                <p className={''}>Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок</p>
            </Link>
        </div>
    );
};