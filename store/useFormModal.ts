import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface ResponsiveState {
    isActive: boolean;
    responseStatus: boolean;
    setActiveStatus: (value: boolean) => void;
    setResponseStatus: (value: boolean) => void;
}

const useFormModal = create<ResponsiveState>()(immer((set) => ({
    isActive: false,
    responseStatus: false,
    setActiveStatus: (value: boolean) => set((state) => {
        state.isActive = value;
    }),
    setResponseStatus: (value: boolean) => set((state) => {
        state.responseStatus = value;
    })
})));

export default useFormModal;