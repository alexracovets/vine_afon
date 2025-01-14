"use client";

interface BlockProps {
    row: number;
    col: number;
    second?: boolean;
};

export const Block = ({ row, col, second }: BlockProps) => {
    const widthBlock = 87;
    const heightBlock = 27;

    return (
        <rect
            transform={`translate(${second ? widthBlock + widthBlock / 4 - widthBlock / 2 : widthBlock / 4} 0)`}
            x={widthBlock * (row - 1)} y={-col * heightBlock}
            fill="rgb(216, 216, 216)"
            stroke="rgb(106 40 65 / 50%)"
            width={widthBlock} height={heightBlock}
            rx="2" ry="2"
        />
    );
};