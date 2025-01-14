import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface Arguments {
    status: string;
    name: string;
    index: number;
    row: number;
    col: number;
    isDeformed: boolean;
}

interface MobileMenuState {
    activeBlocks: Arguments[];
}

const useActiveBlocks = create<MobileMenuState>()(immer(() => ({
    activeBlocks: [
        {
            status: "active",
            name: "0",
            isDeformed: true,
            row: 1,
            col: 11,
            index: 1
        },
        {
            status: "reserved",
            name: "Reserved",
            isDeformed: false,
            row: 1,
            col: 10,
            index: 2
        },
        {
            status: "buyed",
            name: "Buyed",
            isDeformed: false,
            row: 2,
            col: 10,
            index: 3
        },
        {
            status: "active",
            name: "0",
            isDeformed: true,
            row: 1,
            col: 9,
            index: 4
        },
        {
            status: "active",
            name: "0",
            isDeformed: false,
            row: 1,
            col: 8,
            index: 5
        },
        {
            status: "active",
            name: "0",
            isDeformed: false,
            row: 2,
            col: 8,
            index: 6
        },
        {
            status: "active",
            name: "0",
            isDeformed: true,
            row: 1,
            col: 7,
            index: 7
        },
        {
            status: "active",
            name: "0",
            isDeformed: false,
            row: 1,
            col: 6,
            index: 8
        },
        {
            status: "active",
            name: "0",
            isDeformed: false,
            row: 2,
            col: 6,
            index: 9
        },
        {
            status: "active",
            name: "0",
            isDeformed: true,
            row: 1,
            col: 5,
            index: 10
        },
        {
            status: "active",
            name: "0",
            isDeformed: false,
            row: 1,
            col: 4,
            index: 11
        },
        {
            status: "active",
            name: "0",
            isDeformed: false,
            row: 2,
            col: 4,
            index: 12
        }
    ]
})))

export default useActiveBlocks;