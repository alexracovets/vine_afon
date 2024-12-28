"use client";

import Link from "next/link";

import { Button, InfoTitleWrapper, Text } from "@/src/ui/components/atoms";
import useResponsive from "@/store/useResponsive";

export const SupportInfoTitle = () => {
    const responsive = useResponsive(state => state.responsive);

    return (
        <InfoTitleWrapper>
            <Text variant="title" asChild="h2">
                Підтримайте зародження українського вина на Афоні
            </Text>
            {responsive !== "mobile" && <Link href="/vine"><Button>Посадити лозу</Button></Link>}
        </InfoTitleWrapper>
    );
};