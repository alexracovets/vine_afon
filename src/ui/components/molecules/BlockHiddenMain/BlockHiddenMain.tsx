"use client";

import { Text } from "@/src/ui/components/atoms";
import { cn } from "@/src/utils/cn";

interface BlockHiddenMainProps {
    isActive: boolean;
    active: boolean;
    reserved: boolean;
    buyed: boolean;
};

export const BlockHiddenMain = ({ isActive, active, reserved, buyed }: BlockHiddenMainProps) => {

    return (
        <>
            {
                !isActive && <div
                    className={cn(
                        "relative flex flex-grow w-full h-full justify-center items-center",
                        isActive ? "opacity-0" : "opacity-100",
                    )}
                >
                    <Text variant={'activeBlockMain'} className="text-white text-center ">
                        {active && "Стати головним меценатом!"}
                        {reserved && "Резерв"}
                        {buyed && "Зайнято"}
                    </Text>
                </div>
            }
        </>
    );
};