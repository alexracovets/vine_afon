"use client";

export const Lines = () => {
    const color = "#172b4e";
    const whiteColor = "#96b8d5";

    return (
        <g name="lines">
            <g transform="translate(50 30)">
                <rect
                    x="0" y="0"
                    width={35}
                    height={2}
                    fill={color}
                    rx={2} ry={2}
                />
                <rect
                    x="20" y="4"
                    width={15}
                    height={2}
                    fill={color}
                    rx={2} ry={2}
                />
                <rect
                    x="-10" y="-15"
                    width={25}
                    height={2}
                    fill={color}
                    rx={2} ry={2}
                />
                <rect
                    x="50" y="-15"
                    width={5}
                    height={2}
                    fill={color}
                    rx={2} ry={2}
                />
            </g>
            <g transform="translate(20 -50)" >
                <rect
                    x="5" y="5"
                    width={5}
                    height={1.5}
                    fill={color}
                    transform="rotate(220 0 60) translate (0 50)"
                />
                <rect
                    x="10" y="10"
                    width={5}
                    height={3}
                    fill={color}
                    transform="rotate(220 0 60) translate (0 40)"
                />
            </g>
            <g transform="translate(150 30)">
                <rect
                    x="0" y="0"
                    width={10}
                    height={2}
                    fill={color}
                />
            </g>
            <g transform="translate(190 80)">
                <rect
                    x="0" y="0"
                    width={15}
                    height={2}
                    fill={color}
                    transform={`rotate(-45 0 0)`}
                />
                <rect
                    x="0" y="5"
                    width={10}
                    height={2}
                    fill={color}
                    transform={`rotate(-45 0 0)`}
                />
            </g>
            <g transform="translate(140 70)">
                <rect
                    x="0" y="0"
                    width={15}
                    height={2}
                    fill={color}
                    transform={`rotate(140 0 0)`}
                />
                <rect
                    x="5" y="5"
                    width={10}
                    height={2}
                    fill={color}
                    transform={`rotate(140 0 0)`}
                />
                <rect
                    x="5" y="5"
                    width={5}
                    height={2}
                    fill={color}
                    transform={`rotate(140 0 0)`}
                />
                <rect
                    x="0" y="10"
                    width={15}
                    height={2}
                    fill={color}
                    transform={`rotate(140 0 0)`}
                />
                <rect
                    x="-25" y="55"
                    width={20}
                    height={2}
                    fill={color}
                    transform={`rotate(40 -20 60)`}
                />
                <rect
                    x="-20" y="60"
                    width={10}
                    height={2}
                    fill={color}
                    transform={`rotate(40 -20 60)`}
                />
            </g>
            <g transform="translate(195 10)">
                <rect
                    x="0" y="0"
                    width={5}
                    height={4}
                    fill={whiteColor}
                    rx={3} ry={3}
                    transform={`rotate(10 0 0) translate (0 0)`}
                />
                <rect
                    x="5" y="5"
                    width={2}
                    height={2}
                    fill={whiteColor}
                    rx={2} ry={2} cy={2} cx={2}
                    transform={`rotate(10 0 0) translate (0 0)`}
                />
            </g>
            <g transform="translate(170 120)">
                <rect
                    x="0" y="0"
                    width={20}
                    height={2}
                    fill={color}
                    rx={2} ry={2}
                />
                <rect
                    x="1" y="3"
                    width={10}
                    height={2}
                    fill={color}
                    rx={2} ry={2}
                />
                <rect
                    x="2" y="6"
                    width={5}
                    height={2}
                    fill={color}
                    rx={2} ry={2}
                />
            </g>
            <g transform="translate(245 135)">
                <rect
                    x="0" y="0"
                    width={35}
                    height={2}
                    fill={color}
                    rx={2} ry={2}
                    transform={`rotate(0 0 0)`}
                />
                <rect
                    x="20" y="4"
                    width={15}
                    height={2}
                    fill={color}
                    rx={2} ry={2}
                    transform={`rotate(0 0 0)`}
                />
                <rect
                    x="0" y="-18"
                    width={25}
                    height={2}
                    fill={color}
                    rx={2} ry={2}
                    transform={`rotate(0 0 0)`}
                />
                <rect
                    x="30" y="-18"
                    width={5}
                    height={2}
                    fill={color}
                    rx={3} ry={3}
                    transform={`rotate(0 0 0)`}
                />
            </g>
        </g>
    );
};