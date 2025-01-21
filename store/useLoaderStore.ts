import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface LoaderState {
    mainIsLoad: boolean;
    responsiveIsLoad: boolean;
    vineIsLoad: boolean;
    setIsMainIsLoad: (value: boolean) => void;
    setIsResponsiveIsLoad: (value: boolean) => void;
    setIsVineIsLoad: (value: boolean) => void;
}

const useLoaderStore = create<LoaderState>()(immer((set) => ({
    mainIsLoad: false,
    responsiveIsLoad: false,
    vineIsLoad: false,
    setIsMainIsLoad: (value: boolean) => set((state) => {
        state.mainIsLoad = value;
    }),
    setIsResponsiveIsLoad: (value: boolean) => set((state) => {
        state.responsiveIsLoad = value;
    }),
    setIsVineIsLoad: (value: boolean) => set((state) => {
        state.vineIsLoad = value;
    }),
})));

export default useLoaderStore;