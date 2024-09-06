'use client'
import React from "react";
import {FilterCheckbox, FilterCheckboxProps} from "@/components/shared/filter-checkbox";
import {cn} from "@/lib/utils";
import {Input} from "@/components/ui/input";

type Item = FilterCheckboxProps

interface Props {
    className?: string
    title: string
    items: Item[]
    defaultItems?: Item[]
    limit?: number
    searchInputPlaceholder?: string
    onChange?: (values: string[]) => void
    defaultValue?: string[]
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
                                                          title,
                                                          items,
                                                          defaultItems,
                                                          limit = 5,
                                                          searchInputPlaceholder = 'Поиск...',
                                                          onChange,
                                                          defaultValue,
                                                          className
                                                      }) => {

    const [showAll, setShowAll] = React.useState<boolean>(false);
    const showItems = showAll ? items : items.slice(0, limit);

    return (
        <div className={cn(className, '')}>
            <p className={'font-bold mb-3'}>{title}</p>
            {showAll && <div className={'mb-5'}>
                <Input placeholder={searchInputPlaceholder} className={'bg-gray-50 border-none'}/>
            </div>}

            <div className={'flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'}>
                {showItems.map((item, index) => (
                    <FilterCheckbox key={index}
                                    text={item.text}
                                    value={item.value}
                                    checked={false}
                                    endAdornment={item.endAdornment}
                                    onCheckedChange={() => console.log('click')}
                    />
                ))}
            </div>
            {items.length > limit && (
                <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                    <button className={'text-primary mt-3'}
                            onClick={()=>setShowAll(!showAll)}
                    >{showAll ? 'скрыть' : 'показать'}</button>
                </div>
            )}
        </div>
    );
};