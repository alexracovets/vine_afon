import { LeafData, TubeData } from "@/src/types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer"; 

interface Block {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface CardShopState {
    tubes: TubeData[];
    leafs: LeafData[];
    blocks: Block[];
    addTube: (tube: TubeData) => void;
    removeTube: (tube: TubeData) => void;
    addLeaf: (leaf: LeafData) => void;
    removeLeaf: (leaf: LeafData) => void;
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
    removeLeaf: (leaf) => set((state) => {
        state.leafs = state.leafs.filter((t) => t.id !== leaf.id);
    }),
    addBlock: (block) => set((state) => {
        state.blocks.push(block)
    })
})))

export default useCardShop;