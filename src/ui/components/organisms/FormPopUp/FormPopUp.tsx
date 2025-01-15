"use client";

import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

import { Button, FormPopUpInner, FormPopUpWrapper, Input, Text, TextArea } from "@/src/ui/components/atoms";
import useFormModal from "@/store/useFormModal";
import useCardShop from "@/store/useCardShop";

export const FormPopUp = () => {
    const setActiveStatus = useFormModal((state) => state.setActiveStatus);
    const activeBlocks = useCardShop((state) => state.blocks);
    const activeLeafs = useCardShop((state) => state.leafs);
    const activeTubes = useCardShop((state) => state.tubes);

    const [formData, setFormData] = useState({
        formData: 'Заявка з сайту Vine of Athos',
        name: '',
        email: '',
        phone: '',
        message: '',
        blockList: '',
        leafList: '',
        tubesList: ''
    });

    useEffect(() => {
        const blocksList = activeBlocks.map((block) => {
            return (
                `<li>Комірка №:${block.id} заброньована на ім'я '${block.name}'</li>`
            );
        });
        setFormData((prev) => ({
            ...prev,
            blockList: `<ul>${blocksList.join('')}</ul>`
        }));
    }, [activeBlocks]);

    useEffect(() => {
        const leafList = activeLeafs.map((leaf) => {
            return (
                `<li>Листок під №:${leaf.id} з позиціями по x-${leaf.col} по y-${leaf.row}</li>`
            );
        });
        setFormData((prev) => ({
            ...prev,
            leafList: `<ul>${leafList.join('')}</ul>`
        }));
    }, [activeLeafs]);

    useEffect(() => {
        const tubesList = activeTubes.map((tube) => {
            return (
                `<li>Труба під №:${tube.id} з позиціями по x-${tube.col} по y-${tube.row}</li>`
            );
        });
        setFormData((prev) => ({
            ...prev,
            tubesList: `<ul>${tubesList.join('')}</ul>`
        }));
    }, [activeTubes]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmitContactForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const response = await fetch('/send-mail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                formName: formData.formData,
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
                blockList: formData.blockList,
                leafList: formData.leafList,
                tubesList: formData.tubesList
            }),
        });

        if (response.ok) {
            setActiveStatus(false);
        } else console.log(formData)
    }

    return (
        <FormPopUpWrapper>
            <FormPopUpInner>
                <div className='absolute right-[2rem] top-[2rem] cursor-pointer' onClick={() => setActiveStatus(false)}>
                    <MdClose color='#D2F999' className='w-[4rem] h-[4rem]' />
                </div>
                <Text variant={'formTitle'}>
                    ЗВОРОТНІЙ ЗВʼЯЗОК
                </Text>
                <Text variant={'formSubTitle'}>
                    Залиште свої контакти, щоб ми підготували матеріали та зв&lsquo;язалися з Вами в найкоротший термін
                </Text>
                <form onSubmit={handleSubmitContactForm}>
                    <Input
                        onChange={handleChange}
                        type="text"
                        name='name'
                        value={formData.name}
                        placeholder="Прізвище, Ім’я, По батькові"
                    />
                    <Input
                        onChange={handleChange}
                        type="email"
                        name='email'
                        value={formData.email}
                        placeholder="E-Mail"
                    />
                    <Input
                        onChange={handleChange}
                        type="tel"
                        name='phone'
                        value={formData.phone}
                        placeholder="Номер телефону"
                    />
                    <TextArea
                        onChange={handleChange}
                        name='message'
                        value={formData.message}
                        placeholder="Додаткова інформація"
                    />
                    <Button variant='secondary' className='mx-auto'>Надіслати</Button>
                </form>
            </FormPopUpInner>
        </FormPopUpWrapper>
    );
}; 