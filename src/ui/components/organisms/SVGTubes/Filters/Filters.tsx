"use client";

export const Filters = () => {
    return (
        <g>
            <defs>
                <linearGradient id="tube-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(45, 91, 157, .6)" />
                    <stop offset="100%" stopColor="rgba(38, 56, 108, 0)" />
                </linearGradient>
            </defs>
            <defs>
                <linearGradient id="tube-gradient-revers" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="rgba(45, 91, 157, .6)" />
                    <stop offset="100%" stopColor="rgba(38, 56, 108, 0)" />
                </linearGradient>
            </defs>
            <defs>
                <linearGradient id="dash-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(0, 20, 50, .6)" />
                    <stop offset="100%" stopColor="rgba(0, 20, 50, 0)" />
                </linearGradient>
            </defs>
            <defs>
                <linearGradient id="dash-gradient-revers" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="rgba(0, 20, 50, .6)" />
                    <stop offset="100%" stopColor="rgba(0, 20, 50, 0)" />
                </linearGradient>
            </defs>
            <filter id="drop-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="3" dy="3" stdDeviation="3" floodColor="black" floodOpacity="0.5" />
            </filter>
            <filter id="grayscale">
                <feColorMatrix type="luminanceToAlpha" values="0.10" />
            </filter>
        </g>
    );
};