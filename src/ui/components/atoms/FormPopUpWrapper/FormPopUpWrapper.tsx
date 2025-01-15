"use client";

interface FormPopUpWrapperProps {
    children: React.ReactNode;
}

import useFormModal from "@/store/useFormModal";

export const FormPopUpWrapper = ({ children }: FormPopUpWrapperProps) => {
    const isActive = useFormModal((state) => state.isActive);
    const setActiveStatus = useFormModal((state) => state.setActiveStatus);

    return (
        <>
            {
                isActive && (
                    <dialog
                        onClick={() => setActiveStatus(false)}
                        className='absolute left-0 top-0 w-full h-[100dvh] z-[11] flex justify-center items-center bg-bgDialog'
                    >
                        {children}
                    </dialog>
                )
            }
        </>
    );
};