"use client";

import Link from "next/link";

import { Button, FrameInfoWrapper, FrameWrapper, Logo, Text } from "@/src/ui/components/atoms";
import { Frame } from "@/src/ui/components/molecules";

export const MainFrame = () => {
    return (
        <FrameWrapper>
            <Frame />
            <FrameInfoWrapper>
                <Text variant="frame">
                    Винороби Афону у Відбудові
                </Text>
                <Logo isDefault />
            </FrameInfoWrapper>
            <Link href="/vine"><Button>Посадити лозу</Button></Link>
        </FrameWrapper>
    )
}