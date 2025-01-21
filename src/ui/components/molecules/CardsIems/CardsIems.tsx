"use client";

import { cn } from "@/src/utils/cn";
import useCardShop from "@/store/useCardShop";
import { CardItem } from "./CardItem";

export const CardsIems = () => {
    const activeTubes = useCardShop((state) => state.tubes);
    const activeLeafs = useCardShop((state) => state.leafs);
    const activeBlocks = useCardShop((state) => state.blocks);
    const activeMainBlock = useCardShop((state) => state.mainBlock);

    return (
        <div className={cn(
            'flex justify-start items-center gap-[2rem]',
            'max-tablet:gap-[2rem] max-tablet:flex-wrap',
            'max-mobile:mb-[1rem] max-mobile:w-full max-mobile:gap-0 max-mobile:items-start'
        )}>
            <CardItem
                image={"/jpg/tube.jpg"}
                alt="tube"
                value={activeTubes}
            />
            <CardItem
                image={"/jpg/leaf.jpg"}
                alt="leaf"
                value={activeLeafs}
            />
            <CardItem
                image={"/jpg/block.jpg"}
                alt="block"
                value={activeBlocks}
            />
            <CardItem
                image={"/jpg/cup.jpg"}
                alt="cup"
                value={activeMainBlock}
            />
        </div >
    );
};