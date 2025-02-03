"use client";

import Image from 'next/image';

import { cn } from '@/src/utils/cn';
import { ActiveBlock } from './ActiveBlock';
import { MainBlock } from './MainBlock';

const blocks = [
    {
        items: [
            {
                status: "buyed",
                name: "Клімов С.",
                id: 1
            }
        ]
    },
    {
        items: [
            {
                status: "active",
                name: "",
                id: 2
            },
            {
                status: "active",
                name: "",
                id: 3
            }
        ]
    },
    {
        items: [
            {
                status: "active",
                name: "",
                id: 4
            }
        ]
    },
    {
        items: [
            {
                status: "active",
                name: "",
                id: 5
            },
            {
                status: "active",
                name: "",
                id: 6
            }
        ]
    },
    {
        items: [
            {
                status: "active",
                name: "",
                id: 7
            }
        ]
    },
    {
        items: [
            {
                status: "active",
                name: "",
                id: 8
            },
            {
                status: "active",
                name: "",
                id: 9
            }
        ]
    },
    {
        items: [
            {
                status: "active",
                name: "",
                id: 10
            }
        ]
    },
    {
        items: [
            {
                status: "active",
                name: "",
                id: 11
            },
            {
                status: "active",
                name: "",
                id: 12
            }
        ]
    },
]

export const HomeSection = () => {
    const blocksWidth = "w-[7.45rem] max-tablet:w-[4rem] max-mobile:w-[3rem]";
    const blocksHeight = "h-[2.3rem] max-tablet:h-[1.2rem] max-mobile:h-[.91rem]";

    return (
        <div className={cn(
            "w-[50%] h-full flex justify-center items-center",
            "max-mobile:w-full max-mobile:h-auto"
        )}>
            <div className={cn(
                "relative w-[70rem] h-[60rem]",
                "max-tablet:w-[36.5rem] max-tablet:h-[32rem]",
                "max-mobile:w-[28rem] max-mobile:h-[24rem]"
            )}>
                <Image src='mapa/home.png' priority alt="home" fill className="object-contain" />
                <div
                    className={cn(
                        "absolute left-[1.8rem] bottom-[9.6rem]",
                        "flex flex-col justify-center items-center",
                        "w-[15rem] max-tablet:w-[8rem] max-mobile:w-[6rem]",
                        "max-tablet:left-[.8rem] max-tablet:bottom-[5.35rem]",
                        "max-mobile:left-[.7rem] max-mobile:bottom-[3.9rem]"
                    )}
                >
                    {
                        blocks.map((row, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className='flex justify-center items-center'
                                >
                                    {
                                        row.items.map((block) => {
                                            return (
                                                <ActiveBlock
                                                    key={block.id}
                                                    status={block.status}
                                                    name={block.name}
                                                    blocksWidth={blocksWidth}
                                                    blocksHeight={blocksHeight}
                                                    id={block.id}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <MainBlock />
            </div>
        </div >
    );
};