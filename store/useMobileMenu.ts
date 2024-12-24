import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface MobileMenuState {
    isOpenedMobileMenu: boolean;
    setIsOpenMobileMenu: (value: boolean) => void;
}

const useMobileMenu = create<MobileMenuState>()(immer((set) => ({
    isOpenedMobileMenu: false,
    setIsOpenMobileMenu: (value: boolean) => set((state) => {
        state.isOpenedMobileMenu = value;
    })
})))

export default useMobileMenu;