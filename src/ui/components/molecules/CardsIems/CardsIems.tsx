"use client";

import { cn } from "@/src/utils/cn";
import useCardShop from "@/store/useCardShop";
import { CardItem } from "./CardItem";

export const CardsIems = () => {
    const activeTubes = useCardShop((state) => state.tubes);
    const activeLeafs = useCardShop((state) => state.leafs);
    const activeBlocks = useCardShop((state) => state.blocks);

    return (
        <div className={cn(
            'flex justify-start items-center gap-[2rem]',
            'max-tablet:gap-[1.2rem]',
            'max-mobile:w-full max-mobile:gap-[1.133rem] max-mobile:mb-[3rem]'
        )}>
            <CardItem
                image={"/jpg/tube.jpg"}
                alt="leaf"
                value={activeTubes}
            />
            <CardItem
                image={"/jpg/leaf.jpg"}
                alt="leaf"
                value={activeLeafs}
            />
            <CardItem
                image={"/jpg/block.jpg"}
                alt="leaf"
                value={activeBlocks}
            />
        </div >
    );
};