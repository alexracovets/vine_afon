"use client";

import { cn } from "@/src/utils/cn";
import { Text } from "../../atoms";

interface ListProps {
    list: string[];
};

export const List = ({ list }: ListProps) => {

    return (
        <ul
            className="w-full flex flex-col gap-y-[.5rem]"
        >
            {list.map((item, idx) => (
                <li
                    key={idx}
                    className={cn(
                        "relative",
                        "before:content-[''] before:absolute before:left-0 before:bg-regalBlack before:rounded-[50%]",
                        "pl-[1rem] before:w-[.4rem] before:h-[.4rem] before:top-[1rem]"
                    )}
                >
                    <Text variant="info">
                        {item}
                    </Text>
                </li>
            ))}
        </ul>
    );
};