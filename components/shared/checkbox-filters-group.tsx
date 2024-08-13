import React from "react";
import {FilterCheckboxProps} from "@/components/shared/filter-checkbox";

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
        <div>

        </div>
    );
};