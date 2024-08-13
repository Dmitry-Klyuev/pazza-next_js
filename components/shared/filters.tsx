import React from "react";
import {Title} from "@/components/shared/title";
import {FilterCheckbox} from "@/components/shared/filter-checkbox";
import {Input} from "@/components/ui/input";
import {RangeSlider} from "@/components/shared/range-slider";

interface Props {
    className?: string

}

export const Filters: React.FC<Props> = () => {
    return (
        <div>
            <Title text={'Фильтрация'} size={'sm'} className={'mb-5 font-bold'} />
            <div className={'flex flex-col gap-4'}>
                <FilterCheckbox text={'Можно выбрать'} value={'1'} />
                <FilterCheckbox text={'Новинки'} value={'2'} />
            </div>
            <div className={'mt-5 border-y border-neutral-100 py-6 pb-7'}>
                <p className={'font-bold mb-3'}>Цены от и до:</p>
                <div className={'flex gap-3 mb-5'}>
                    <Input type={'number'} placeholder={'0'} min={0} max={1000} defaultValue={0} />
                    <Input type={'number'} min={100} max={1000} placeholder={'10000'} />

                </div>
                <RangeSlider min={1} max={1000} step={10} value={[0, 1000]}/>
            </div>

        </div>
    );
};