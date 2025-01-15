import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface ResponsiveState {
    isActive: boolean;
    setActiveStatus: (value: boolean) => void;
}

const useFormModal = create<ResponsiveState>()(immer((set) => ({
    isActive: false,
    setActiveStatus: (value: boolean) => set((state) => {
        state.isActive = value;
    })
})));

export default useFormModal;