"use client";

import { Text } from "@/src/ui/components/atoms";
import { cn } from "@/src/utils/cn";

interface BlockHiddenProps {
    isActiveBlock: boolean;
    active: boolean;
    reserved: boolean;
    buyed: boolean;
}

export const BlockHidden = ({ isActiveBlock, active, reserved, buyed }: BlockHiddenProps) => {
    return (
        <>
            {
                !isActiveBlock && <div
                    className={cn(
                        "relative flex flex-grow w-full h-full justify-center items-center",
                        isActiveBlock ? "opacity-0" : "opacity-100",
                    )}
                >
                    <Text variant={'activeBlock'} className="text-white">
                        {active && "Доступно"}
                        {reserved && "Резерв"}
                        {buyed && "Зайнято"}
                    </Text>
                </div>
            }
        </>
    );
};