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
                        "pl-[1rem]",
                        "max-tablet:pl-[.8rem]",
                    )}
                >
                    <div
                        className={cn(
                            "w-[.4rem] h-[.4rem] min-w-[.4rem] min-h-[.4rem] absolute left-0 top-[.8rem] bg-regalBlack rounded-[50%] will-change-contents",
                            "max-tablet:w-[.3rem] max-tablet:min-w-[.3rem] max-tablet:h-[.3rem] max-tablet:min-h-[.3rem] max-tablet:w-top-[.5rem] max-tablet:top-[.5rem]"
                        )}
                    >

                    </div>
                    <Text variant="info">
                        {item}
                    </Text>
                </li>
            ))}
        </ul>
    );
};