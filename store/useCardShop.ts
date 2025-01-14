import { TubeData } from "@/src/types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface Leaf {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface Block {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface CardShopState {
    tubes: TubeData[];
    leafs: Leaf[];
    blocks: Block[];
    addTube: (tube: TubeData) => void;
    removeTube: (tube: TubeData) => void;
    addLeaf: (leaf: Leaf) => void;
    addBlock: (block: Block) => void;
}

const useCardShop = create<CardShopState>()(immer((set) => ({
    tubes: [],
    leafs: [],
    blocks: [],
    addTube: (tube) => set((state) => {
        state.tubes.push(tube)
    }),
    removeTube: (tube) => set((state) => {
        state.tubes = state.tubes.filter((t) => t.id !== tube.id);
    }),
    addLeaf: (leaf) => set((state) => {
        state.leafs.push(leaf)
    }),
    addBlock: (block) => set((state) => {
        state.blocks.push(block)
    })
})))

export default useCardShop;