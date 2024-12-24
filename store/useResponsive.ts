import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface ResponsiveState {
    responsive: string;
    setResponsive: (value: number) => void;
}

const useResponsive = create<ResponsiveState>()(immer((set) => ({
    responsive: "waiting",
    setResponsive: (value: number) => set((state) => {
        console.log(`setResponsive called with value: ${value}`);
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