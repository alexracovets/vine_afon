"use client";

import { cn } from "@/src/utils/cn";
import { Button } from "@/src/ui/components/atoms";
import { useEffect, useState } from "react";

import useCardShop from "@/store/useCardShop";
import useFormModal from "@/store/useFormModal";

export const Price = () => {
    const setActiveStatus = useFormModal((state) => state.setActiveStatus);
    const blocks = useCardShop((state) => state.blocks);
    const tubes = useCardShop((state) => state.tubes);
    const leafs = useCardShop((state) => state.leafs);
    const mainBlock = useCardShop((state) => state.mainBlock);
    const priceBlock = useCardShop((state) => state.priceBlock);
    const priceTube = useCardShop((state) => state.priceTube);
    const priceLeaf = useCardShop((state) => state.priceLeaf);
    const priceBlockMain = useCardShop((state) => state.priceBlockMain);

    const [priceTotal, setPriceTotal] = useState(0);

    useEffect(() => {
        setPriceTotal(0);
    }, []);

    useEffect(() => {
        setPriceTotal(
            blocks.length * priceBlock +
            tubes.length * priceTube +
            leafs.length * priceLeaf +
            mainBlock.length * priceBlockMain
        );
    }, [blocks, tubes, leafs, mainBlock, priceBlock, priceTube, priceLeaf, priceBlockMain])

    return (
        <div
            className={cn(
                "flex flex-col gap-y-[1rem]",
                "max-tablet:w-[31.8rem]",
                "max-mobile:w-full"
            )}
        >
            <div className={cn(
                'text-[3rem] text-regalWhite font-[300] leading-[1]',
                'max-tablet:text-[1.6rem]',
            )}>
                Вартість: {priceTotal} €
            </div>
            <Button variant={"destructive"} onClick={() => setActiveStatus(true)} className="max-mobile:w-full">
                Зробити внесок
            </Button>
        </div>
    );
};