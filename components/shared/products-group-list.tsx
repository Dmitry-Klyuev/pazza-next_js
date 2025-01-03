import React from "react";
import {Title} from "@/components/shared/title";
import {cn} from "@/lib/utils";
import {ProductCard} from "@/components/shared/product-card";

interface Props {
    className?: string
    title: string
    items: any[]
    categoryId: number
    listClassName?: string

}

export const ProductsGroupList: React.FC<Props> = ({className, title, items, categoryId, listClassName}) => {
    return (
        <div className={className}>
            <Title text={title} size={'lg'} className={'font-extrabold mb5'}/>
            <div className={cn(listClassName, 'grid grid-cols-3 gap-[50px]')}>
                {items.map(product => (
                    <ProductCard key={product.id}
                                 id={product.id}
                                 imageUrl={product.imageUrl}
                                 name={product.name}
                                 price={product.items[0].price} />
                ))}
            </div>
        </div>
    );
};