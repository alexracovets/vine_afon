"use client";

interface ContainerProps {
    children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {

    return (
        <div className="w-full px-[8.8rem]">
            {children}
        </div>
    );
};