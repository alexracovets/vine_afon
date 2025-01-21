"use client";

import { useState } from "react";
import { z } from "zod";

import { Button, Input, Text, TextArea } from "@/src/ui/components/atoms";
import useFormModal from "@/store/useFormModal";
import useCardShop from "@/store/useCardShop";
import { useFormLists } from "@/src/hooks";
import { MyFormData } from "@/src/types";

const formSchema = z.object({
    name: z.string().min(3, "Мінімум 3 символи"),
    email: z.string().email("Некоректний e-mail"),
    phone: z.string().min(7, "Некоректний номер"),
});

export const FormModal = () => {
    const setActiveStatus = useFormModal((state) => state.setActiveStatus);
    const activeBlocks = useCardShop((state) => state.blocks);
    const activeLeafs = useCardShop((state) => state.leafs);
    const activeTubes = useCardShop((state) => state.tubes);
    const activeBlockMain = useCardShop((state) => state.mainBlock);

    const [errors, setErrors] = useState<Record<string, string | undefined>>({});

    const [formData, setFormData] = useState<MyFormData>({
        formData: 'Заявка з сайту Vine of Athos',
        name: '',
        email: '',
        phone: '',
        message: '',
        blockList: '',
        leafList: '',
        tubesList: '',
        mainBlock: '',
    });

    useFormLists(activeBlocks, activeLeafs, activeTubes, activeBlockMain, setFormData);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        const fieldSchema = formSchema.shape[name as keyof typeof formSchema.shape];
        if (fieldSchema) {
            const result = fieldSchema.safeParse(value);
            setErrors((prev) => ({
                ...prev,
                [name]: result.success ? undefined : result.error?.issues[0]?.message,
            }));
        }
    };

    const handleSubmitContactForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const parsed = formSchema.safeParse({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
        });

        if (!parsed.success) {
            const errorMessages = parsed.error.issues.reduce((acc, issue) => {
                acc[issue.path[0]] = issue.message;
                return acc;
            }, {} as Record<string, string>);

            setErrors(errorMessages);
            return;
        }

        setErrors({});

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
                tubesList: formData.tubesList,
                mainBlock: formData.mainBlock
            }),
        });

        if (response.ok) {
            setActiveStatus(false);
        } else {
            console.log(formData);
        }
    };

    return (
        <form
            onSubmit={handleSubmitContactForm}
            className="flex flex-col w-full justify-center items-center gap-y-[1rem]"
        >
            <Input
                onChange={handleChange}
                type="text"
                name='name'
                value={formData.name}
                placeholder="Прізвище, Ім’я, По батькові"
            />
            {errors.name && <Text variant={"popUpError"}>{errors.name}</Text>}
            <Input
                onChange={handleChange}
                type="email"
                name='email'
                value={formData.email}
                placeholder="E-Mail"
            />
            {errors.email && <Text variant={"popUpError"}>{errors.email}</Text>}
            <Input
                onChange={handleChange}
                type="tel"
                name='phone'
                value={formData.phone}
                placeholder="Номер телефону"
            />
            {errors.phone && <Text variant={"popUpError"}>{errors.phone}</Text>}
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