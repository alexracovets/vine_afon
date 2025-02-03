"use client";

import { MouseEvent, useEffect, useState } from "react";
import { useControls } from "react-zoom-pan-pinch";

import { PopUpBlockWrapper, PopupBlockBG } from "@/src/ui/components/atoms";
import { BlockHidden, BlockShown, } from "@/src/ui/components/molecules";
import { BlockPopUpMain } from "@/src/ui/components/organisms";
import useBlockPosition from "@/store/useBlockPosition";
import useCardShop from "@/store/useCardShop";

export const BlockPopUp = () => {
    const [isShow, setIsShow] = useState(false);
    const setIsActive = useBlockPosition((state) => state.setIsActive);
    const setMainBlockActive = useBlockPosition((state) => state.setMainBlockActive);
    const setCurrentActiveBlock = useBlockPosition((state) => state.setCurrentActiveBlock);
    const setIsShowCard = useCardShop((state) => state.setIsShowCard);
    const currentActiveBlock = useBlockPosition((state) => state.currentActiveBlock);
    const currentArguments = useBlockPosition((state) => state.blocks);
    const isActive = useBlockPosition((state) => state.isActive);
    const { resetTransform } = useControls();

    const closePopUp = (e?: MouseEvent<HTMLDialogElement> | MouseEvent<HTMLButtonElement>) => {
        if (e) {
            e.stopPropagation();
        }
        setIsActive(false);
        setMainBlockActive(false);
        setCurrentActiveBlock(-1)
        setTimeout(() => {
            setIsShow(false);
            setIsShowCard(true);
        }, 500);
    };

    const openPopUp = (e: MouseEvent<HTMLDialogElement>, idx: number) => {
        e.stopPropagation();
        setCurrentActiveBlock(idx);
        setIsActive(true);
        resetTransform();
        setTimeout(() => {
            setIsShow(true);
        }, 500);
    };

    useEffect(() => {
        if (isActive) {
            resetTransform();
        }
    }, [isActive]);
    return (
        <>
            {
                currentArguments.map((block, idx) => {
                    const isActiveBlock = currentActiveBlock === idx && isActive;
                    const active = block.status === 'active';
                    const reserved = block.status === 'reserved';
                    const buyed = block.status === 'buyed';

                    return (
                        <PopUpBlockWrapper
                            key={idx}
                            isActiveBlock={isActiveBlock}
                            block={block}
                            active={active}
                            reserved={reserved}
                            buyed={buyed}
                            idx={idx}
                            openPopUp={openPopUp}
                        >
                            <BlockShown
                                isShow={isShow}
                                isActiveBlock={isActiveBlock}
                                active={active}
                                reserved={reserved}
                                buyed={buyed}
                                block={block}
                                idx={idx}
                                closePopUp={closePopUp}
                            />
                            <BlockHidden
                                isActiveBlock={isActiveBlock}
                                active={active}
                                reserved={reserved}
                                buyed={buyed}
                            />
                        </PopUpBlockWrapper>
                    )
                })
            }
            <BlockPopUpMain closePopUp={closePopUp} />
            <PopupBlockBG closePopUp={closePopUp} />
        </>
    );
};