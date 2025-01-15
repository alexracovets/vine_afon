"use client";

import { useState } from "react";

import { Button, Input, TextArea } from "@/src/ui/components/atoms";
import useFormModal from "@/store/useFormModal";
import useCardShop from "@/store/useCardShop";
import { useFormLists } from "@/src/hooks";
import { MyFormData } from "@/src/types";

export const FormModal = () => {
    const setActiveStatus = useFormModal((state) => state.setActiveStatus);
    const activeBlocks = useCardShop((state) => state.blocks);
    const activeLeafs = useCardShop((state) => state.leafs);
    const activeTubes = useCardShop((state) => state.tubes);

    const [formData, setFormData] = useState<MyFormData>({
        formData: 'Заявка з сайту Vine of Athos',
        name: '',
        email: '',
        phone: '',
        message: '',
        blockList: '',
        leafList: '',
        tubesList: ''
    });

    useFormLists(activeBlocks, activeLeafs, activeTubes, setFormData);

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
        <form
            onSubmit={handleSubmitContactForm}
            className="flex flex-col w-full justify-center items-center"
        >
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
            <Button variant='destructive' className='mx-auto'>Надіслати</Button>
        </form>
    );
};