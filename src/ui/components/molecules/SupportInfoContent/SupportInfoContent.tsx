"use client";

import Link from "next/link";

import { InfoContentWrapper, Text, Button } from "@/src/ui/components/atoms";
import { List } from "@/src/ui/components/molecules";

import useResponsive from "@/store/useResponsive";

export const SupportInfoContent = () => {
    const responsive = useResponsive(state => state.responsive);

    const contentList = [
        "Безкоштовне проживання та харчування всім виноробам, відбудовникам і паломникам;",
        "Безкоштовний трансфер на півострів Афон усім військовим;",
        "Безкоштовну духовно-психологічну реабілітацію ветеранам на Афоні;",
        "Відродить та продовжить українську духовну спадщину на Афоні;",
        "Створить місце сили України на Святій землі та щоденну молитву за українців та мир;",
        "І, звісно, подарує нам чудове вино!"
    ];

    return (
        <InfoContentWrapper>
            <Text variant="info" asChild="strong">
                Відбудова україномовного осередку на Афоні – це народний проєкт реконструкції та розбудови, а тому кожен бажаючий може взяти участь у ньому та внести свою лепту у відродження, стати відбудовником чи опікуном!
            </Text>
            <Text variant="info">
                <i>“Vine of Athos”</i> (в пер. лоза Афону) – це складова великого проєкту, що направлений на збір коштів для відбудови україномовного осередку на Афоні, однак в даному випадку з фокусом на його винну складову і частину цієї відбудови – зародження українського вина на Афоні –  і як подяка колекціонерам та виноробам України, які підтримують дану відбудову.
            </Text>
            <Text variant="info" asChild="strong">
                Відбудований осередок створить:
            </Text>
            <List list={contentList} />
            {responsive === "mobile" && <Link href="/vine"><Button>Посадити лозу</Button></Link>}
        </InfoContentWrapper>
    );
};