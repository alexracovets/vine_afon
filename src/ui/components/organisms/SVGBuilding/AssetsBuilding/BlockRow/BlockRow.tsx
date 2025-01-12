"use client";

import { Block } from "../";

interface BlockRowProps {
    second?: boolean;
    col: number;
}

export const BlockRow = ({ second, col }: BlockRowProps) => {
    const count = 11;

    return (
        <g>
            {
                Array.from({ length: count }).map((_, idx) => {
                    return (
                        <Block
                            key={idx}
                            row={idx}
                            col={col}
                            second={second}
                        />
                    )
                })
            }
        </g>
    );
};