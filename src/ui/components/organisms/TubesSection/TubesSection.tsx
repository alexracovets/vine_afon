"use client";

import { cn } from "@/src/utils/cn";
import Image from "next/image";
import { Tube } from "./Tube";
import { Leaf } from "./Leaf";

const currentActiveBlock = [
    {
        row: 1,
        cols: [
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 1
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 2
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 3
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 4
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 5
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 6
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 7
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 8
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 9
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 10
            }
        ]
    },
    {
        row: 2,
        cols: [
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 11
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 12
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 13
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 14
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 15
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 16
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 17
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 18
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 19
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 20
            }
        ]
    },
    {
        row: 3,
        cols: [
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 21
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 22
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 23
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 24
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 25
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 26
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 27
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 28
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 29
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 30
            }
        ]
    },
    {
        row: 4,
        cols: [
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 31
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 32
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 33
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 34
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 35
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 36
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 37
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 38
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 39
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 40
            }
        ]
    },
    {
        row: 5,
        cols: [
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 41
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 42
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 43
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 44
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 45
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 46
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 47
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 48
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 49
            },
            {
                tubeStatus: "active",
                leafStatus: "active",
                id: 50
            }
        ]
    },
];

export const TubesSection = () => {


    return (
        <div
            className={cn(
                "w-[50%] h-full mt-[5rem]",
                "max-mobile:w-full max-mobile:h-auto max-mobile:pt-0"
            )}
        >
            <div
                className="flex flex-col justify-center items-center w-full h-full"
            >
                {
                    currentActiveBlock.map((row, idx) => {
                        return (
                            <div
                                key={idx}
                                className="flex justify-start items-end w-full"
                            >
                                <div
                                    className={cn(
                                        "relative w-[30.5rem] h-[10rem] z-[1]",
                                        "max-tablet:w-[15.25rem] max-tablet:h-[5rem]",
                                        "max-mobile:w-[11rem] max-mobile:h-[3.6rem]"
                                    )}
                                >
                                    <Image src='mapa/test.png' priority alt="tubes" fill className="object-contain" />
                                </div>
                                <div
                                    className="flex h-full items-end"
                                >
                                    {
                                        row.cols.map((col, idxCol) => {
                                            return (
                                                <div
                                                    key={col.id}
                                                    className={cn(
                                                        "flex items-end w-[4.5rem] mb-[.35rem]",
                                                        "max-tablet:w-[2.15rem] max-tablet:mb-[.15rem]",
                                                        "max-mobile:mb-[0.2rem]"
                                                    )}
                                                >
                                                    <div
                                                        className={cn(
                                                            "relative outline outline-tubes-stroke realative flex justify-center items-center",
                                                            "w-full bg-tubes-normal",
                                                            "h-[2.4rem] max-tablet:h-[1.2rem] max-mobile:h-[.8rem]",
                                                            "outline-[.15rem] max-tablet:outline-[.05rem]"
                                                        )}
                                                    >
                                                        <Tube status={col.tubeStatus} row={row.row} col={idxCol + 1} id={col.id} />
                                                        <Leaf status={col.leafStatus} row={row.row} col={idxCol + 1} id={col.id} />
                                                        <div
                                                            className={cn(
                                                                "outline outline-tubes-stroke",
                                                                "content-[''] absolute z-[1] bg-dash-tube right-0 bottom-[50%] translate-x-[50%] translate-y-[50%]",
                                                                "h-[128%] max-tablet:h-[1.4rem] max-mobile:h-[1rem]",
                                                                "outline-[.15rem] max-tablet:outline-[.1rem] max-mobile:outline-[.05rem]",
                                                                "rounded-[.2rem] max-tablet:rounded-[.1rem] max-mobile:rounded-[.05rem]",
                                                                row.cols.length === col.id / row.row ? "w-[1.5rem] max-tablet:w-[.7rem] nax-mobile:w-[.4rem]" : "w-[.7rem] max-tablet:w-[.3rem] max-mobile:w-[.2rem]",
                                                            )}
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};