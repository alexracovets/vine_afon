"use client";

import { motion } from "motion/react";

import { useLoader } from "@/src/hooks";
import { Logo } from "@/src/ui/components/atoms";

export const Loader = () => {
    const isLoader = useLoader();

    return (
        <>
            {
                isLoader &&
                <motion.div className="fixed top-0 left-0 w-full h-full bg-regalWhite z-50">
                    <div className="flex justify-center items-center h-full">
                        <div className="loader animate-bounce">
                            <Logo isDefault />
                        </div>
                    </div>
                </motion.div>
            }
        </>
    );
};