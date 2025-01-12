"use client";

interface BlockRowProps {
    second?: boolean;
    row: number;
}

export const BlockRow = ({ second, row }: BlockRowProps) => {
    const count = 11;
    const widthBlock = 87;
    const heightBlock = 25;

    return (
        <g transform={`translate(${widthBlock / 4} 0)`}>
            <g transform={`translate(${second ? widthBlock - widthBlock / 2 : 0} 0)`}>
                {
                    Array.from({ length: count }).map((_, idx) => {
                        return (
                            <rect
                                key={idx}
                                x={widthBlock * (idx - 1)} y={-row * heightBlock}
                                fill="rgb(216, 216, 216)"
                                stroke="black"
                                width={widthBlock} height={heightBlock}
                                rx="2" ry="2" />
                        )
                    })
                }
            </g>
        </g>
    );
};