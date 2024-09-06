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
    return (
        <div className={cn(className, '')}>
            <p className={'font-bold mb-3'}>{title}</p>
            <div className={'mb-5'}>
                <Input placeholder={searchInputPlaceholder} className={'bg-gray-50 border-none'}/>
            </div>
            <div className={'flex flex-col gap-4 max-h-96 pr-2 overflow-y-auto scrollbar'}>
                {items.map((item, index) => (
                    <FilterCheckbox key={index}
                                    text={item.text}
                                    value={item.value}
                                    onChange={onChange}
                                    checked={false}
                                    endAdornment={item.endAdornment}

                    />
                ))}
            </div>
        </div>
    );
};