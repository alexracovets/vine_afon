import { LeafData, TubeData, BlockActiveData, MainBlockData } from "@/src/types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface CardShopState {
    tubes: TubeData[];
    leafs: LeafData[];
    blocks: BlockActiveData[];
    mainBlock: MainBlockData[];
    isShowCard: boolean;
    priceBlock: number;
    priceBlockMain: number;
    priceTube: number;
    priceLeaf: number;
    setIsShowCard: (value: boolean) => void;
    addTube: (tube: TubeData) => void;
    removeTube: (tube: TubeData) => void;
    addLeaf: (leaf: LeafData) => void;
    removeLeaf: (leaf: LeafData) => void;
    addBlock: (block: BlockActiveData) => void;
    removeBlock: (block: BlockActiveData) => void;
    addMainBlock: (block: MainBlockData) => void;
    removeMainBlock: () => void;
}

const useCardShop = create<CardShopState>()(immer((set) => ({
    tubes: [],
    leafs: [],
    blocks: [],
    mainBlock: [],
    isShowCard: true,
    priceBlock: 10000,
    priceBlockMain: 150000,
    priceTube: 500,
    priceLeaf: 1000,
    setIsShowCard: (value) => set((state) => {
        state.isShowCard = value;
    }),
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
    }),
    removeBlock: (block) => set((state) => {
        state.blocks = state.blocks.filter((t) => t.id !== block.id);
    }),
    addMainBlock: (block) => set((state) => {
        state.mainBlock.push(block);
    }),
    removeMainBlock: () => set((state) => {
        state.mainBlock = [];
    })
})))

export default useCardShop;