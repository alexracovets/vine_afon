"use client";

import { Button, ClosePopUp, FormPopUpInner, FormPopUpWrapper, Text } from "@/src/ui/components/atoms";
import useFormModal from "@/store/useFormModal";
import { FormModal } from "../../molecules";

export const FormPopUp = () => {
    const setActiveStatus = useFormModal((state) => state.setActiveStatus);
    const setResponseStatus = useFormModal((state) => state.setResponseStatus);
    const isRespose = useFormModal((state) => state.responseStatus);

    const closePopUpHandler = () => {
        setActiveStatus(false);
        setResponseStatus(false);
    };

    return (
        <FormPopUpWrapper>
            <FormPopUpInner>
                <ClosePopUp onClick={closePopUpHandler} />
                <Text variant={'formTitle'}> ЗВОРОТНІЙ ЗВʼЯЗОК </Text>
                {isRespose ?
                    <>
                        <Text variant={'formSubTitle'}>  Дякуємо Вам за заявку, наші менеджери зв&#39;яжуться з вами найближчим часом</Text>
                        <Button variant="destructive" onClick={closePopUpHandler}>Закрити</Button>
                    </>
                    :
                    <>
                        <Text variant={'formSubTitle'}>  Залиште свої контакти, щоб ми підготували матеріали та зв&lsquo;язалися з Вами в найкоротший термін</Text>
                        <FormModal />
                    </>
                }
            </FormPopUpInner>
        </FormPopUpWrapper>
    );
}; 