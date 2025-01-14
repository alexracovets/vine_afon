import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { BlockPositionType } from "@/src/types";

interface MobileMenuState {
    blocks: BlockPositionType[];
    isActive: boolean;
    currentActiveBlock: number;
    setPosition: (value: BlockPositionType) => void;
    setIsActive: (value: boolean) => void;
    setCurrentActiveBlock: (value: number) => void;
}

const useBlockPosition = create<MobileMenuState>()(immer((set) => ({
    blocks: [],
    isActive: false,
    currentActiveBlock: 0,
    setPosition: (value: BlockPositionType) =>
        set((state) => {
            const existingIndex = state.blocks.findIndex((block) => block.id === value.id);
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