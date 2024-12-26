"use client";

import { Button, Container, InfoContentWrapper, InfoTitleWrapper, Section, SupportInfoWrapper, Text } from "@/src/ui/components/atoms";
import { List, ProgressSteps } from "@/src/ui/components/molecules";
import useResponsive from "@/store/useResponsive";

export const WorkSection = () => {
    const responsive = useResponsive(state => state.responsive);

    const contentList = [
        "Безкоштовне проживання та харчування всім виноробам, відбудовникам і паломникам;",
        "Безкоштовний трансфер на півострів Афон усім військовим;",
        "Безкоштовну духовно-психологічну реабілітацію ветеранам на Афоні;",
        "Відродить та продовжить українську духовну спадщину на Афоні;",
        "Створить місце сили України на Святій землі та щоденну молитву за українців та мир;",
        "І, звісно, подарує нам чудове, “святе і духовне” вино!"
    ];

    return (
        <Section rounded>
            <Container className="gap-y-[10rem] max-tablet:gap-y-[5rem]">
                <ProgressSteps />
                <SupportInfoWrapper>
                    <InfoTitleWrapper>
                        <Text variant="title" asChild="h2">
                            Підтримайте зародження українського вина на Афоні
                        </Text>
                        {responsive !== "mobile" && <Button>Посадити лозу</Button>}
                    </InfoTitleWrapper>
                    <InfoContentWrapper>
                        <Text variant="info" asChild="strong">
                            Відбудова україномовного осередку на Афоні – це народний проєкт реконструкції та розбудови, а тому кожен бажаючий може взяти участь у ньому та внести свою лепту у відродження, стати відбудовником чи опікуном!
                        </Text>
                        <Text variant="info">
                            <i>“Vine of Athos”</i> (в пер. лоза Афону) – це складова великого проєкту, що направлений на збір коштів для відбудови україномовного осередку на Афоні, однак в даному випадку з фокусом на його винну складову і частину цієї відбудови – зародження українського вина на Афоні – духовного вина на потреби монахів і як подяка колекціонерам та виноробам України, які підтримують дану відбудову.
                        </Text>
                        <Text variant="info" asChild="strong">
                            Відбудований осередок створить:
                        </Text>
                        <List list={contentList} />
                        {responsive === "mobile" && <Button className="mt-[3rem]">Посадити лозу</Button>}
                    </InfoContentWrapper>
                </SupportInfoWrapper>
            </Container>
        </Section>
    );
};