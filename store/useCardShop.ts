import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface Tube {
    id: number;
    name: string;
    price: number;
    image: string;
}

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
    tubes: Tube[];
    leafs: Leaf[];
    blocks: Block[];
    addTube: (tube: Tube) => void;
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
    addLeaf: (leaf) => set((state) => {
        state.leafs.push(leaf)
    }),
    addBlock: (block) => set((state) => {
        state.blocks.push(block)
    })
})))

export default useCardShop;