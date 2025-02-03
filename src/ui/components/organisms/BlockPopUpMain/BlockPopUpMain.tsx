"use client";

import { useControls } from "react-zoom-pan-pinch";

import { BlockHiddenMain, BlockShownMain } from "@/src/ui/components/molecules";
import { PopUpBlockWrapperMain } from "@/src/ui/components/atoms";
import useBlockPosition from "@/store/useBlockPosition";
import useCardShop from "@/store/useCardShop";

interface BlockPopUpMainProps {
    closePopUp: () => void;
}

export const BlockPopUpMain = ({ closePopUp }: BlockPopUpMainProps) => {
    const setIsShowCard = useCardShop((state) => state.setIsShowCard);
    const isActive = useBlockPosition((state) => state.isMainBlockActive);
    const mainBlock = useBlockPosition((state) => state.mainBlock);
    const openPopUp = useBlockPosition((state) => state.setMainBlockActive);
    const popUpActiver = useBlockPosition((state) => state.isActive);
    const setBlockPopUp = useBlockPosition((state) => state.setIsActive);
    const { resetTransform } = useControls();

    const active = mainBlock.status === 'active';
    const reserved = mainBlock.status === 'reserved';
    const buyed = mainBlock.status === 'buyed';

    const openBlockPopUp = () => {
        openPopUp(true);
        resetTransform();
        setTimeout(() => {
            setBlockPopUp(true);
            setIsShowCard(true);
        }, 500);
    };

    return (
        <PopUpBlockWrapperMain
            isActive={isActive}
            active={active}
            reserved={reserved}
            buyed={buyed}
            mainBlock={mainBlock}
            openPopUp={openBlockPopUp}
        >
            <BlockHiddenMain
                isActive={isActive}
                active={active}
                reserved={reserved}
                buyed={buyed}
            />
            <BlockShownMain
                isShow={popUpActiver}
                isActiveBlock={isActive}
                active={active}
                reserved={reserved}
                buyed={buyed}
                closePopUp={closePopUp}
            />
        </PopUpBlockWrapperMain>
    );
};