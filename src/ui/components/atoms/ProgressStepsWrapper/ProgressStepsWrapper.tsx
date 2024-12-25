"use client";

interface ProgressStepsWrapperProps {
    children: React.ReactNode;
};

export const ProgressStepsWrapper = ({ children }: ProgressStepsWrapperProps) => {

    return (
        <div
            className="flex w-full max-mobile:flex-col max-mobile:gap-y-[2rem]"
        >
            {children}
        </div>
    );
};