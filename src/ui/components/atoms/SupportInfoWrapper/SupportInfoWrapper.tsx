"use client";

interface SupportInfoWrapperProps {
    children: React.ReactNode;
};

export const SupportInfoWrapper = ({ children }: SupportInfoWrapperProps) => {

    return (
        <div className="flex gap-x-[2rem] max-tablet:gap-x-[1rem] max-mobile:flex-col ">
            {children}
        </div>
    );
};