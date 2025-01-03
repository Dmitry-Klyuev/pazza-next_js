import {Container} from "@/components/shared/container";
import {Title} from "@/components/shared/title";
import {TopBar} from "@/components/shared/top-bar";
import {Filters} from "@/components/shared/filters";
import {ProductsGroupList} from "@/components/shared/products-group-list";

export default function Home() {

    return (
        <>
            <Container className={'mt-10'}>
                <Title text={'Все пиццы'} size={'lg'} className={'font-extrabold'}/>
            </Container>
            <TopBar/>
            <Container className={'mt-10 pb-14'}>
                <div className={'flex gap-[60px]'}>
                    {/*Фильтрация*/}
                    <div className={'w-[250px]'}>
                        <Filters/>
                    </div>


                    {/*Список товаров*/}
                    <div className={'flex-1'}>
                        <div className={'flex flex-col gap-16'}>
                            Список товаров
                            <ProductsGroupList categoryId={1}
                                               title={'Пицца'}
                                               items={[
                                                   {
                                                       id: 1,
                                                       name: 'Сырный цыпленок',
                                                       imageUrl: 'pizza1.png',
                                                       items: [{price: 395}, {price: 395}, {price: 395}]
                                                   },
                                                   {
                                                       id: 2,
                                                       name: 'Сырный цыпленок',
                                                       imageUrl: 'pizza1.png',
                                                       items: [{price: 395}, {price: 395}, {price: 395}]
                                                   },
                                                   {
                                                       id: 3,
                                                       name: 'Сырный цыпленок',
                                                       imageUrl: 'pizza1.png',
                                                       items: [{price: 395}, {price: 395}, {price: 395}]
                                                   },
                                                   {
                                                       id: 4,
                                                       name: 'Сырный цыпленок',
                                                       imageUrl: 'pizza1.png',
                                                       items: [{price: 395}, {price: 395}, {price: 395}]
                                                   },
                                                   {
                                                       id: 5,
                                                       name: 'Сырный цыпленок',
                                                       imageUrl: 'pizza1.png',
                                                       items: [{price: 395}, {price: 395}, {price: 395}]
                                                   },
                                               ]}

                            />
                            {/*<ProductCard name={'Сырный цыпленок'} id={1} imageUrl={'pizza1.png'} price={395}/>*/}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
