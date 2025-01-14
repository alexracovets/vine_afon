"use client";

import { cn } from "@/src/utils/cn";
import { Button } from "@/src/ui/components/atoms";
import { useEffect, useState } from "react";

export const Price = () => {
    const [priceTotal, setPriceTotal] = useState(0);

    useEffect(() => {
        setPriceTotal(0);
    }, []);

    return (
        <div
            className={cn(
                "flex flex-col"
            )}
        >
            <div className={cn(
                'text-[3rem] text-regalWhite font-[300] mb-[1rem] leading-[1]',
                'max-tablet:text-[1.6rem] max-tablet:mb-[1.2rem]',
                'max-mobile:mb-[2.6rem]'
            )}>
                Вартість: {priceTotal} $
            </div>
            <Button variant={"destructive"}>
                Зробити внесок
            </Button>
        </div>
    );
};