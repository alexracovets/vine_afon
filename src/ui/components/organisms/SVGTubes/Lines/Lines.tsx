"use client";

export const Lines = () => {
    const color = "#172b4e";
    const whiteColor = "#96b8d5";

    return (
        <g name="lines">
            <g transform="translate(60 15)">
                <rect
                    x="0" y="0"
                    width={30}
                    height={1}
                    fill={color}
                    rx={1} ry={1}
                />
                <rect
                    x="10" y="3"
                    width={14}
                    height={1}
                    fill={color}
                    rx={1} ry={1}
                />
                <rect
                    x="-10" y="-3"
                    width={30}
                    height={1}
                    fill={color}
                    rx={1} ry={1}
                />
                <rect
                    x="50" y="-8"
                    width={5}
                    height={1}
                    fill={color}
                    rx={1} ry={1}
                />
            </g>
            <g transform="translate(20 -50)" >
                <rect
                    x="5" y="5"
                    width={6}
                    height={2}
                    fill={color}
                    rx={2} ry={2}
                    transform="rotate(220 0 60) translate (0 50)"
                />
                <rect
                    x="6" y="11"
                    width={10}
                    height={2}
                    fill={color}
                    rx={2} ry={2}
                    transform="rotate(220 0 60) translate (0 40)"
                />
            </g>
            <g transform="translate(145 20)">
                <rect
                    x="0" y="0"
                    width={16}
                    height={1}
                    rx={1} ry={1}
                    fill={color}
                />
            </g>
            <g transform="translate(185 53)">
                <rect
                    x="0" y="0"
                    width={15}
                    height={1}
                    fill={color}
                    rx={1} ry={1}
                    transform={`rotate(-45 0 0)`}
                />
                <rect
                    x="2" y="3"
                    width={10}
                    height={1}
                    fill={color}
                    rx={1} ry={1}
                    transform={`rotate(-45 0 0)`}
                />
            </g>
            <g transform="translate(145 50)">
                <rect
                    x="0" y="0"
                    width={14}
                    height={1}
                    fill={color}
                    rx={1} ry={1}
                    transform={`rotate(140 0 0)`}
                />
                <rect
                    x="3" y="3"
                    width={10}
                    height={1}
                    fill={color}
                    rx={1} ry={1}
                    transform={`rotate(140 0 0)`}
                />
                <rect
                    x="0" y="6"
                    width={15}
                    height={1}
                    fill={color}
                    rx={1} ry={1}
                    transform={`rotate(140 0 0)`}
                />
            </g>
            <g transform="translate(125 43)">
                <rect
                    x="-15" y="25"
                    width={14}
                    height={1}
                    fill={color}
                    rx={1} ry={1}
                    transform={`rotate(40 -20 60)`}
                />
                <rect
                    x="-12" y="22"
                    width={10}
                    height={1}
                    fill={color}
                    rx={1} ry={1}
                    transform={`rotate(40 -20 60)`}
                />
            </g>
            <g transform="translate(190 10)">
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
            <g transform="translate(170 83)">
                <rect
                    x="0" y="0"
                    width={40}
                    height={1}
                    fill={color}
                    rx={1} ry={1}
                />
                <rect
                    x="1" y="2"
                    width={30}
                    height={1}
                    fill={color}
                    rx={1} ry={1}
                />
                <rect
                    x="2" y="4"
                    width={14}
                    height={1}
                    fill={color}
                    rx={1} ry={1}
                />
            </g>
            <g transform="translate(235 85)">
                <rect
                    x="0" y="0"
                    width={48}
                    height={1}
                    fill={color}
                    rx={1} ry={1}
                    transform={`rotate(0 0 0)`}
                />
                <rect
                    x="40" y="2"
                    width={15}
                    height={1}
                    fill={color}
                    rx={1} ry={1}
                    transform={`rotate(0 0 0)`}
                />
                <rect
                    x="-6" y="-7"
                    width={25}
                    height={1}
                    fill={color}
                    rx={1} ry={1}
                    transform={`rotate(0 0 0)`}
                />
                <rect
                    x="24" y="-7"
                    width={8}
                    height={1}
                    fill={color}
                    rx={1} ry={1}
                    transform={`rotate(0 0 0)`}
                />
            </g>
        </g>
    );
};