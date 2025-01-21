"use client";

import { useEffect, useState } from "react";
import { Text, Input, Button } from "@/src/ui/components/atoms";
import { MdClose } from "react-icons/md";

import useCardShop from "@/store/useCardShop";
import { cn } from "@/src/utils/cn";

interface BlockShownMainProps {
    isShow: boolean;
    isActiveBlock: boolean;
    active: boolean;
    reserved: boolean;
    buyed: boolean;
    closePopUp: () => void;
}

export const BlockShownMain = ({ isShow, isActiveBlock, active, reserved, buyed, closePopUp }: BlockShownMainProps) => {
    const price = useCardShop((state) => state.priceBlockMain);
    const block = useCardShop((state) => state.mainBlock[0]);
    const setMainBlock = useCardShop((state) => state.addMainBlock);
    const removeBlock = useCardShop((state) => state.removeMainBlock);
    const [isСhosen, setIsСhosen] = useState(false);
    const [InputValue, setInputValue] = useState('');
    const [firstClick, setFirstClick] = useState(false);
    const [isError, setIsError] = useState(false);

    const clickHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (firstClick) {
            setMainBlock({
                name: InputValue,
                status: 'reserved',
            });
            setIsСhosen(true);
            setFirstClick(false);
            setInputValue('');
        } else {
            setFirstClick(true);
            if (InputValue.length >= 3) {
                setMainBlock({
                    name: InputValue,
                    status: 'reserved',
                });
                setIsСhosen(true);
                setFirstClick(false);
                setInputValue('');
            }
        }
    }

    const changeChose = () => {
        setMainBlock({
            name: '',
            status: 'active',
        });
        removeBlock();
        setIsСhosen(false);
        setFirstClick(false);
        setInputValue('');
    }

    useEffect(() => {
        if (firstClick) {
            setIsError(InputValue.length < 3);
        }
    }, [InputValue, firstClick])

    return (
        <>
            {
                isShow && isActiveBlock && <div
                    className={cn(
                        "relative flex-grow h-full bg-regalBlack",
                        "transition-opacity duration-300 ease-in-out",
                        "px-[3rem] py-[2rem]",
                        "max-mobile:p-[1rem]",
                        isActiveBlock ? "opacity-100" : "opacity-0",
                        isСhosen && "bg-transparent"
                    )}
                >
                    <button className="absolute top-[1rem] right-[1rem]" onClick={closePopUp}>
                        <MdClose color='#6a2841' className='w-[4rem] h-[4rem]' />
                    </button>
                    <div
                        className="flex flex-col items-center flex-grow justify-center w-full h-full gap-y-[3rem] max-mobile:gap-[2rem]"
                    >
                        <Text variant='activeBlockNumber' className="text-center leading-[1] max-mobile:text-[3rem]">
                            Стати головним міценатом  - {price} €
                        </Text>
                        {active && !isСhosen &&
                            <>
                                <Text variant='activeBlockName' className="text-center max-mobile:text-[2rem]">
                                    Введіть ім&#39;я або назву організації, для резерву:
                                </Text>
                                <form
                                    onSubmit={(e) => clickHandler(e)}
                                    className="flex flex-col gap-y-[2rem] w-full justify-center items-center mt-[2rem]"
                                >
                                    <Input type='text' placeholder='Ім`я' value={InputValue} onChange={(e) => setInputValue(e.target.value)} />
                                    {isError && <Text variant='popUpError'>Введіть будь-ласка Ім&#39;я або назву</Text>}
                                    <Button variant={"destructive"} disabled={isError}>Зарезервувати</Button>
                                </form>
                            </>
                        }
                        {
                            active && isСhosen && <>
                                <Text variant='activeBlockName' className="text-center max-mobile:text-[2rem]">Дякуємо за Ваш вклад!</Text>
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