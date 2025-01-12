import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface Arguments {
    x: number;
    y: number;
    width: number;
    height: number;
}

interface MobileMenuState {
    x: number;
    y: number;
    width: number;
    height: number;
    setPosition: (value: Arguments) => void;
}

const useBlockPosition = create<MobileMenuState>()(immer((set) => ({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    setPosition: (value: Arguments) => set((state) => {
        state.x = value.x;
        state.y = value.y;
        state.width = value.width;
        state.height = value.height;
    })
})))

export default useBlockPosition;