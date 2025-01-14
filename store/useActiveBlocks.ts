import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { BlockData } from "@/src/types";

interface MobileMenuState {
    activeBlocks: BlockData[];
}

const useActiveBlocks = create<MobileMenuState>()(immer(() => ({
    activeBlocks: [
        {
            status: "active",
            name: "0",
            isDeformed: true,
            row: 1,
            col: 11,
            id: 1
        },
        {
            status: "reserved",
            name: "Reserved",
            isDeformed: false,
            row: 1,
            col: 10,
            id: 2
        },
        {
            status: "buyed",
            name: "Buyed",
            isDeformed: false,
            row: 2,
            col: 10,
            id: 3
        },
        {
            status: "active",
            name: "0",
            isDeformed: true,
            row: 1,
            col: 9,
            id: 4
        },
        {
            status: "active",
            name: "0",
            isDeformed: false,
            row: 1,
            col: 8,
            id: 5
        },
        {
            status: "active",
            name: "0",
            isDeformed: false,
            row: 2,
            col: 8,
            id: 6
        },
        {
            status: "active",
            name: "0",
            isDeformed: true,
            row: 1,
            col: 7,
            id: 7
        },
        {
            status: "active",
            name: "0",
            isDeformed: false,
            row: 1,
            col: 6,
            id: 8
        },
        {
            status: "active",
            name: "0",
            isDeformed: false,
            row: 2,
            col: 6,
            id: 9
        },
        {
            status: "active",
            name: "0",
            isDeformed: true,
            row: 1,
            col: 5,
            id: 10
        },
        {
            status: "active",
            name: "0",
            isDeformed: false,
            row: 1,
            col: 4,
            id: 11
        },
        {
            status: "active",
            name: "0",
            isDeformed: false,
            row: 2,
            col: 4,
            id: 12
        }
    ]
})))

export default useActiveBlocks;