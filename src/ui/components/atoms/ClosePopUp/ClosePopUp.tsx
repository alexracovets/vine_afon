"use client";

import { MdClose } from "react-icons/md";

interface ClosePopUpProps {
    onClick: () => void;
}

export const ClosePopUp = ({ onClick }: ClosePopUpProps) => {

    return (
        <div className='absolute right-[2rem] top-[2rem] cursor-pointer' onClick={onClick}>
            <MdClose color='#D2F999' className='w-[4rem] h-[4rem]' />
        </div>
    );
};