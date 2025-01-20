"use client";

import { PopUpBlockWrapperMain } from "@/src/ui/components/atoms";
import { BlockHiddenMain } from "@/src/ui/components/molecules";
import useBlockPosition from "@/store/useBlockPosition";

export const BlockPopUpMain = () => {
    const isActive = useBlockPosition((state) => state.isMainBlockActive);
    const mainBlock = useBlockPosition((state) => state.mainBlock);
    const openPopUp = useBlockPosition((state) => state.setMainBlockActive);
    const setBlockPopUp = useBlockPosition((state) => state.setIsActive);

    const active = mainBlock.status === 'active';
    const reserved = mainBlock.status === 'reserved';
    const buyed = mainBlock.status === 'buyed';

    const openBlockPopUp = () => {
        setBlockPopUp(true);
        openPopUp(true);
    }

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
        </PopUpBlockWrapperMain>
    );
};