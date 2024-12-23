"use client";

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
                <Logo />
            </FrameInfoWrapper>
            <Button variant="outline">Посадити лозу</Button>
        </FrameWrapper>
    )
}