"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/src/ui/components/molecules";
import { Text, Button, YouTubeVideo } from "@/src/ui/components/atoms";
import { useEffect, useState } from "react";
import { cn } from "@/src/utils/cn";

export const HowWorks = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState("+розгорнути");

    useEffect(() => {
        setStatus(isOpen ? "-згорнути" : "+розгорнути");
    }, [isOpen]);

    return (
        <div
            className="flex flex-col gap-y-[5rem]"
        >
            <Accordion
                type="single"
                collapsible
                onValueChange={(value) => setIsOpen(value === "item-1")}
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger className="pb-[2rem] max-tablet:pb-[1.5rem] max-mobile:pb-[1rem]">
                        <Text variant="acordionTitle">
                            Як це працює? <span className="font-[400]">({status})</span>
                        </Text>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div
                            className="py-[1.5rem] max-tablet:py-[1rem] max-mobile:py-[.5rem] flex flex-col gap-y-[.5rem]"
                        >
                            <Text variant="info" className="indent-[2rem] text-justify">
                                Територія україномовного осередку на Афоні складає 1,6 ГА або ж приблизно 16000 кв.м. та знаходиться у закинутому і зарослому хащами стані.
                            </Text>
                            <Text variant="info" className="indent-[2rem] text-justify">
                                Близько 15% території на схилі пагорба заплановано під виноробну справу.
                            </Text>
                            <Text variant="info" className="indent-[2rem] text-justify">
                                Обираючи на план-схемі виноробні один або декілька кущів лози (листок) у вигляді посадженої культури, можливість провести воду до неї чи внеску за закладену цеглину від Вашого імені ви обираєте свого роду опікунство і відмічаєте їх за собою (бронь) та відправляєте запит нам.
                            </Text>
                            <Text variant="info" className="indent-[2rem] text-justify">
                                В залежності від розміщення внесок може становити від 500 до 50.000 євро, а кількість яку можна обрати залежить від Вашої фінансової можливості.
                            </Text>
                            <Text variant="info" className="indent-[2rem] text-justify">
                                Якщо ж Ви хочете одноосібно або виключно від свого бренду взяти опіку над відбудовою цієї частини проєкту – внесок складе 200.000 євро. Всі кошти поступають виключно на рахунок БФ “Святих Архангелів”, що опікується відбудовою.
                            </Text>
                            <Text variant="info" className="indent-[2rem] text-justify">
                                Вказуючи свої дані при оплаті (тел та e-mail) ми зв’яжемось з Вами та надішлемо сертифікат винороба-відбудовника “Афону” на знак подяки та пам’ятний сувенір відповідно до Вашої підтримки, а також Ваше прізвище та рід потрапляє в перше видання афонської збірки виноробів-відбудовників розділу тому ГОРА-2025, який також буде у Вас.
                            </Text>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Button
                className="mx-auto"
            >
                Посадити лозу
            </Button>
            <Text variant="info">
                <b>
                    Мета збору “Vine of Athos” – це відбудова 1033-літньої Келії Св. Архангелів, розбудова осередку та приведення до ладу всієї території навколо неї (ландшафту) загальним кошторисом в 3 млн євро.
                    “Vine of Athos” формується в період з 1.01.25 по 1.01.2026 року.
                </b>
            </Text>
            <YouTubeVideo url="https://youtu.be/TdaKvO8tYuQ" />
            <div
                className={cn(
                    "flex flex-col w-full gap-y-[2.4rem]",
                    "max-tablet:gap-y-[1.2rem]"
                )}
            >
                <Text variant="info">
                    <b>
                        “Vine of Athos” – це концептуальна ідея “закласти” українську лозу на Святій Горі, тим самим через коріння “духовної рослини” поєднати виноробів-відбудовників України з виноробами-монахами Афону із єдиною метою – спільно відбудувати осередок та створити Божий напій. За стародавньою традицією вважається, що посадка лози символізує родючість та процвітання як господарства, так і самого господаря, хто це робить.
                    </b>
                </Text>
                <Text variant="info">
                    Виноградна лоза (та її плід) — один із найдавніших символів родючості, достатку та життєвої сили. Символ духовного життя та відродження у християнському світі. Виноградна лоза була першою рослиною, посадженою Ноєм після потопу.
                </Text>
                <Text variant="info">
                    У християнстві виноградна лоза — один із символів Христа, який сказав: “Я є виноградна Лоза, а ви гілки. Хто перебуває в Мені, і Я в ньому, той приносить багато плоду; бо без Мене нічого робити не можете”. Будь-яку гілку, що приносить плід, Бог очищає, щоб ще більше принесла плоду. Так і людина, що віддає – отримує ще більше.
                </Text>
                <Text variant="info">
                    Біблійний вислів: «Кожен буде сидіти під своєю виноградною лозою і під своєю смоковницею» - завжди було доброю ознакою домашнього миру і благополуччя. Розростання і плодючість виноградників на землі служили знаком, що благословення Боже є з людиною.
                </Text>
            </div>
        </div>
    )
};