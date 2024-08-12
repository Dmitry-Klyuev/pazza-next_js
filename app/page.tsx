import {Container} from "@/components/shared/container";
import {Title} from "@/components/shared/title";
import {Categories} from "@/components/shared/categories";
import {SortPopup} from "@/components/shared/sort-popup";
import {TopBar} from "@/components/shared/top-bar";

export default function Home() {
    return (
        <>
            <Container className={'mt-10'}>
                <Title text={'Все пиццы'} size={'lg'} className={'font-extrabold'}/>
            </Container>
            <TopBar/>
        </>
    );
}
