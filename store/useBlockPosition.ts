import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface Arguments {
    x: number;
    y: number;
    width: number;
    height: number;
    name: string;
    status: string;
    idx: number;
}

interface MobileMenuState {
    blocks: Arguments[];
    isActive: boolean;
    currentActiveBlock: number;
    setPosition: (value: Arguments) => void;
    setIsActive: (value: boolean) => void;
    setCurrentActiveBlock: (value: number) => void;
}

const useBlockPosition = create<MobileMenuState>()(immer((set) => ({
    blocks: [],
    isActive: false,
    currentActiveBlock: 0,
    setPosition: (value: Arguments) =>
        set((state) => {
            const existingIndex = state.blocks.findIndex((block) => block.idx === value.idx);
            if (existingIndex !== -1) {
                state.blocks[existingIndex] = value;
            } else {
                state.blocks.push(value);
            }
        }),
    setIsActive: (value: boolean) => set((state) => {
        state.isActive = value;
    }),
    setCurrentActiveBlock: (value: number) => set((state) => {
        state.currentActiveBlock = value;
    })
})))

export default useBlockPosition;