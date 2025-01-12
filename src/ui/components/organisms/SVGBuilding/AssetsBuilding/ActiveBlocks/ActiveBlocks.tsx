"use client";

import { BlockActive } from "../";


export const ActiveBlocks = () => {

    return (
        <g transform="translate(120 790)">
            <BlockActive row={1} col={11} second />
            <BlockActive row={1} col={10} />
            <BlockActive row={2} col={10} />
            <BlockActive row={1} col={9} second />
            <BlockActive row={1} col={8} />
            <BlockActive row={2} col={8} />
            <BlockActive row={1} col={7} second />
            <BlockActive row={1} col={6} />
            <BlockActive row={2} col={6} />
            <BlockActive row={1} col={5} second />
            <BlockActive row={1} col={4} />
            <BlockActive row={2} col={4} />
        </g>
    );
};