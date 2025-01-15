"use client";

import { ClosePopUp, FormPopUpInner, FormPopUpWrapper, Text } from "@/src/ui/components/atoms";
import useFormModal from "@/store/useFormModal";
import { FormModal } from "../../molecules";

export const FormPopUp = () => {
    const setActiveStatus = useFormModal((state) => state.setActiveStatus);

    return (
        <FormPopUpWrapper>
            <FormPopUpInner>
                <ClosePopUp onClick={() => setActiveStatus(false)} />
                <Text variant={'formTitle'}> ЗВОРОТНІЙ ЗВʼЯЗОК </Text>
                <Text variant={'formSubTitle'}>  Залиште свої контакти, щоб ми підготували матеріали та зв&lsquo;язалися з Вами в найкоротший термін</Text>
                <FormModal />
            </FormPopUpInner>
        </FormPopUpWrapper>
    );
}; 