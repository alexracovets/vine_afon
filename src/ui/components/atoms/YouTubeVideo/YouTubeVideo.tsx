"use client";

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import { cn } from '@/src/utils/cn';

interface YouTubeVideoProps {
    url: string;
};

export const YouTubeVideo = ({ url }: YouTubeVideoProps) => {
    return (
        <div id="video" className={cn(
            'w-[100rem] h-[56.3rem] mx-auto rounded-[2rem] overflow-hidden',
            'max-tablet:w-full max-tablet:h-[38.5rem]',
            'max-mobile:h-[15.5rem] max-mobile:rounded-[1rem]'
        )}>
            <ReactPlayer
                url={url}
                width="100%"
                height="100%"
                controls
                volume={0.5}
            />
        </div>
    );
};