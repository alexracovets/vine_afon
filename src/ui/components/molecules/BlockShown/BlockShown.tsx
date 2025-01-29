"use client";

import { MouseEvent, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

import { Text, Input, Button } from "@/src/ui/components/atoms";
import { BlockPositionType } from "@/src/types";
import useCardShop from "@/store/useCardShop";
import { cn } from "@/src/utils/cn";

interface BlockShownProps {
    isShow: boolean;
    isActiveBlock: boolean;
    active: boolean;
    reserved: boolean;
    buyed: boolean;
    block: BlockPositionType;
    idx: number;
    closePopUp: (e?: MouseEvent<HTMLDialogElement> | MouseEvent<HTMLButtonElement>) => void;
}

export const BlockShown = ({ isShow, isActiveBlock, active, reserved, buyed, block, idx, closePopUp }: BlockShownProps) => {
    const blocks = useCardShop((state) => state.blocks);
    const price = useCardShop((state) => state.priceBlock);
    const addBlock = useCardShop((state) => state.addBlock);
    const removeBlock = useCardShop((state) => state.removeBlock);
    const [InputValue, setInputValue] = useState('');
    const [firstClick, setFirstClick] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isСhosen, setIsСhosen] = useState(false);

    const clickHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (firstClick) {
            addBlock({
                name: InputValue,
                id: block.id,
            });
            setFirstClick(false);
            setInputValue('');
        } else {
            setFirstClick(true);
            if (InputValue.length >= 3) {
                addBlock({
                    name: InputValue,
                    id: block.id,
                });
                setFirstClick(false);
                setInputValue('');
            }
        }
    }

    const changeChose = () => {
        removeBlock({
            id: block.id
        });
        setFirstClick(false);
        setInputValue('');
    }

    useEffect(() => {
        if (firstClick) {
            setIsError(InputValue.length < 3);
        }
    }, [InputValue, firstClick])

    useEffect(() => {
        setIsСhosen(blocks.filter((b) => b.id === block.id).length > 0);
    }, [blocks, block.id])

    return (
        <>
            {
                isShow && isActiveBlock && <div
                    className={cn(
                        "relative flex-grow h-full",
                        "transition-opacity duration-300 ease-in-out",
                        "px-[3rem] py-[2rem]",
                        "max-mobile:p-[1rem]",
                        isActiveBlock ? "opacity-100" : "opacity-0"
                    )}
                >
                    <button className="absolute top-[1rem] right-[1rem]" onClick={closePopUp}>
                        <MdClose color='#6a2841' className='w-[4rem] h-[4rem]' />
                    </button>
                    <div
                        className="flex flex-col items-center flex-grow justify-center w-full h-full gap-y-[3rem] max-mobile:gap-[2rem]"
                    >
                        <Text variant='activeBlockNumber' className="text-center leading-[1] max-mobile:text-[3rem]">
                            Цеглина №{idx + 1} - {price} €
                        </Text>
                        {active && !isСhosen &&
                            <>
                                <Text variant='activeBlockName' className="text-center max-mobile:text-[2rem]">
                                    Введіть ім&#39;я для резерву:
                                </Text>
                                <form
                                    onSubmit={(e) => clickHandler(e)}
                                    className="flex flex-col gap-y-[2rem] w-full justify-center items-center mt-[2rem]"
                                >
                                    <Input type='text' placeholder='Ім`я' value={InputValue} onChange={(e) => setInputValue(e.target.value)} />
                                    {isError && <Text variant='popUpError'>Введіть будь-ласка Ім&#39;я</Text>}
                                    <Button variant={"destructive"} type="submit" disabled={isError}>Зарезервувати</Button>
                                </form>
                            </>
                        }
                        {
                            active && isСhosen && <>
                                <Text variant='activeBlockName'>Дякуємо за Ваш вклад!</Text>
                                <Button variant={"destructive"} onClick={() => changeChose()}>Скасувати рішення?</Button>
                            </>
                        }
                        {
                            reserved &&
                            <>
                                <Text variant='activeBlockName'>
                                    Зарезервовано:
                                </Text>
                                <Text variant='activeBlockNameFill'>{block.name}</Text>
                            </>
                        }
                        {
                            buyed &&
                            <>
                                <Text variant='activeBlockName'>
                                    Ім&#39;я власника:
                                </Text>
                                <Text variant='activeBlockNameFill'>{block.name}</Text>
                            </>
                        }
                    </div>
                </div >
            }
        </>
    );
};