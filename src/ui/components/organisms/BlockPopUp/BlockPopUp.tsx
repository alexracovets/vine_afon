"use client";

import { MouseEvent, useState } from "react";
import { MdClose } from "react-icons/md";

import useBlockPosition from "@/store/useBlockPosition";
import { cn } from "@/src/utils/cn";
import { Button, Input, Text } from "../../atoms";

export const BlockPopUp = () => {
    const currentActiveBlock = useBlockPosition((state) => state.currentActiveBlock);
    const currentArguments = useBlockPosition((state) => state.blocks);
    const isActive = useBlockPosition((state) => state.isActive);
    const setCurrentActiveBlock = useBlockPosition((state) => state.setCurrentActiveBlock);
    const setIsActive = useBlockPosition((state) => state.setIsActive);
    const [isShow, setIsShow] = useState(false);

    const [InputValue, setInputValue] = useState('');

    const closePopUp = (e: MouseEvent<HTMLDialogElement> | MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setIsActive(false);
        setTimeout(() => {
            setIsShow(false);
        }, 500);
    };

    const openPopUp = (e: MouseEvent<HTMLDialogElement>, idx: number) => {
        e.stopPropagation();
        setCurrentActiveBlock(idx)
        setIsActive(true);
        setTimeout(() => {
            setIsShow(true);
        }, 500);
    };

    return (
        <>
            <dialog
                onClick={closePopUp}
                className={cn(
                    "w-full h-[100dvh] left-0 top-0 absolute flex justify-center items-center",
                    isActive ? "bg-bgDialog z-[0]" : "bg-transparent z-[-1]"
                )}
            />
            {
                currentArguments.map((block, idx) => {
                    const isActiveBlock = currentActiveBlock === idx && isActive;
                    const active = block.status === 'active';
                    const reserved = block.status === 'reserved';
                    const buyed = block.status === 'buyed';

                    return (
                        <dialog
                            key={idx}
                            className={cn(
                                "outline",
                                isActiveBlock ? "outline-[.5rem] outline-[#efbf04]" : "outline-[.1rem]",
                                active && "bg-[#247616]",
                                reserved && "bg-[#1f2b1d]",
                                buyed && "bg-[#7b8618]",
                                isActiveBlock && "bg-[#171717]",
                                "fixed transition-[transform left top width height] ease-in duration-500 flex justify-center items-center will-change-contents",
                                isActiveBlock ? "rounded-[2rem] z-[10]" : "cursor-pointer z-[0]"
                            )}
                            onClick={(e) => openPopUp(e, idx)}
                            style={{
                                width: isActiveBlock ? "60rem" : block.width,
                                height: isActiveBlock ? "30rem" : block.height,
                                left: isActiveBlock ? "50%" : block.x,
                                top: isActiveBlock ? "50%" : block.y,
                                transform: isActiveBlock ? "translate(-50%, -50%)" : "translate(0%, 0%)",
                            }}
                        >
                            {
                                isShow && isActiveBlock && <div
                                    className={cn(
                                        "relative flex-grow h-full",
                                        "transition-opacity duration-300 ease-in-out",
                                        "px-[3rem] py-[2rem]",
                                        isActiveBlock ? "opacity-100" : "opacity-0"
                                    )}
                                >
                                    <button className="absolute top-[1rem] right-[1rem]" onClick={closePopUp}>
                                        <MdClose color='#6a2841' className='w-[4rem] h-[4rem]' />
                                    </button>
                                    <div
                                        className="flex flex-col items-center flex-grow justify-center w-full h-full gap-y-[2rem]"
                                    >
                                        <Text variant='activeBlockNumber'>
                                            Комірка №{idx + 1}
                                        </Text>
                                        <Text variant='activeBlockName'>
                                            {active && "Введіть ім'я для резерву:"}
                                            {reserved && "Зарезервовано:"}
                                            {buyed && "Ім'я власника:"}
                                        </Text>
                                        {active && <Input type='text' placeholder='Ім`я' value={InputValue} onChange={(e) => setInputValue(e.target.value)} />}
                                        {active && <Button variant={"destructive"}>Зарезервувати</Button>}
                                        {reserved && <Text variant='activeBlockNameFill'>{block.name}</Text>}
                                        {buyed && <Text variant='activeBlockNameFill'>{block.name}</Text>}
                                    </div>
                                </div>
                            }
                            {
                                !isShow && <div
                                    className={cn(
                                        "relative flex flex-grow w-full h-full justify-center items-center",
                                        isActiveBlock ? "opacity-0" : "opacity-100",

                                    )}
                                >
                                    <Text variant={'activeBlock'} className="text-white">
                                        {active && "Доступно"}
                                        {reserved && "Резерв"}
                                        {buyed && "Зайнято"}
                                    </Text>
                                </div>
                            }

                        </dialog >
                    )
                })
            }
        </>
    );
};