"use client";

import { Text, Section, Container, ImageAtom } from "@/src/ui/components/atoms";
import { cn } from "@/src/utils/cn";

export const OrganizersSection = () => {

    return (
        <Section id="organizer">
            <Container
                className={cn(
                    "flex flex-col w-full gap-y-[5rem]",
                    "max-tablet:gap-y-[3rem]",
                )}
            >
                <Text variant="title" asChild="h2"
                    className="max-mobile:mb-0"
                >
                    Автори проєкту
                </Text>
                <div
                    className={cn(
                        "flex justify-between items-center gap-x-[2.4rem]",
                        "max-tablet:gap-x-[1rem]",
                        "max-mobile:gap-x-[.5rem]"
                    )}
                >
                    <div
                        className={cn(
                            "relative w-[50%] h-[50rem] rounded-[1rem] overflow-hidden",
                            "max-tablet:h-[30rem]",
                            "max-mobile:h-[15rem] max-mobile:rounded-[.5rem]"
                        )}
                    >
                        <ImageAtom src={`/organizers/sergio.jpg`} alt="sergio" cover />
                    </div>
                    <div
                        className={cn(
                            "relative w-[50%] h-[50rem] rounded-[1rem] overflow-hidden",
                            "max-tablet:h-[30rem]",
                            "max-mobile:h-[15rem] max-mobile:rounded-[.5rem]"
                        )}
                    >
                        <ImageAtom src={`/organizers/denis.jpg`} alt="denis" cover />
                    </div>
                </div>
                <div
                    className={cn(
                        "flex flex-col w-full gap-y-[2.4rem]",
                        "max-tablet:gap-y-[1.2rem]"
                    )}
                >
                    <Text variant="info">
                        Проєкт “Україна-Афон” почав своє життя в грудні 2021 р.
                        з рішення старців монастиря Пантократор про дозвіл на відновлення Келії
                        Св. Архангелів та розбудову україномовного осередку на Афоні,
                        де щоденно звучатиме українська молитва за наш народ та невинно загинувших від війни.
                        “Vine of Athos - це один з 5 підпроєктів осередку загальною площею 1,6 Га,
                        частиною якого можете стати і Ви” - каже <b>Денис Руденко, ініціатор “Великого збору” на Афон та керівник проєкту відбудови</b>.
                    </Text>
                    <Text variant="info">
                        “Виноробство тисячі років крокує разом із людством,
                        вино використовують на літургії та в інших таїнствах.
                        Виноградна лоза та грона винограду є неодмінним атрибутом Святого Письма та іконопису.
                        Створення виноградника з українськими сортами винограду в духовному осередку нашої країни на
                        Святій Горі Афон - це ще один потужний крок до воз’єднання України з прадавнім корінням - духовним та фізичним.
                    </Text>
                    <Text variant="info">
                        Догляд за виноградною лозою - це унікальний досвід,
                        певний вид духовної рефлексії, який дає сили та натхнення доглядаючому,
                        фокусує на одній конкретній та досяжній цілі, від якої залежить життя рослини
                        та майбутнє ягоди, з якої буде створене унікальне вино.
                        Я впевнений, що багато людей, які шукають зцілення душі знайдуть у цій справі нові сенси,
                        відновлять власну енергію та усвідомлять, ким вони є і ким насправді хочуть бути.
                    </Text>
                    <Text variant="info">
                        Боротьба за українське майбутнє відбувається як на фізичному,
                        так і на духовному рівнях. Якщо вам відгукується справа,
                        яка буде жити ще довго після нас - доєднуйтесь” - <b>Сергій Клімов, керівник проєкту “Vine of Athos”</b>.
                    </Text>
                </div>
            </Container>
        </Section >
    );
};