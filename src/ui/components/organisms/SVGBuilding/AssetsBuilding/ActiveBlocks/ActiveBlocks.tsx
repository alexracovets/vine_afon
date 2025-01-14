"use client";

import useActiveBlocks from "@/store/useActiveBlocks";
import { BlockActive } from "../";

export const ActiveBlocks = () => {
    const activeBlocks = useActiveBlocks((state) => state.activeBlocks);

    return (
        <g transform="translate(120 790)">
            {
                activeBlocks.map((block) => {
                    return (
                        <BlockActive
                            key={block.id}
                            row={block.row}
                            col={block.col}
                            second={block.isDeformed}
                            name={block.name}
                            status={block.status}
                            id={block.id}
                        />
                    );
                })
            }
        </g>
    );
};