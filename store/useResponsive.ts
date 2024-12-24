import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface UseResponsiveProps {
    responsive: string;
    setResponsive: (value: number) => void;
}

const useResponsive = create<UseResponsiveProps>()(immer((set) => ({
    responsive: "waiting",
    setResponsive: (value: number) => set((state) => {
        if (value >= 1024) {
            state.responsive = "desktop";
        } else if (value >= 768) {
            state.responsive = "tablet";
        } else {
            state.responsive = "mobile";
        }
    })
})));

export default useResponsive;