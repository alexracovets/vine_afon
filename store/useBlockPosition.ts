import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { BlockPositionType, MainBlockPositionType } from "@/src/types";

interface MobileMenuState {
    mainBlock: MainBlockPositionType;
    blocks: BlockPositionType[];
    isActive: boolean;
    isMainBlockActive: boolean;
    currentActiveBlock: number;
    setPosition: (value: BlockPositionType) => void;
    setIsActive: (value: boolean) => void;
    setCurrentActiveBlock: (value: number) => void;
    setMainBlockActive: (value: boolean) => void;
    setMainBlockPosition: (value: MainBlockPositionType) => void;
}

const useBlockPosition = create<MobileMenuState>()(immer((set) => ({
    mainBlock: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        name: "",
        status: "active",
    },
    blocks: [],
    isActive: false,
    isMainBlockActive: false,
    currentActiveBlock: -1,
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
    }),
    setMainBlockPosition: (value: MainBlockPositionType) => set((state) => {
        state.mainBlock = value;
    }),
    setMainBlockActive: (value: boolean) => set((state) => {
        state.isMainBlockActive = value;
    }),
})))

export default useBlockPosition;