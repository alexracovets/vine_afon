export const Lines = () => {
    const color = "#172b4e";
    const whiteColor = "#96b8d5";
    return (
        <g>
            <g>
                <rect
                    x="10" y="10"
                    width={20}
                    height={3}
                    fill={color}
                    transform="rotate(220 0 60) translate (0 76)"
                />
                <rect
                    x="10" y="10"
                    width={10}
                    height={3}
                    fill={color}
                    transform="rotate(220 0 60) translate (0 80)"
                />
            </g>
            <g>
                <rect
                    x="0" y="0"
                    width={20}
                    height={3}
                    fill={color}
                    transform={`rotate(220 150 0) translate (0 76)`}
                />
            </g>
            <g>
                <rect
                    x="350" y="115"
                    width={30}
                    height={3}
                    fill={color}
                    transform={`rotate(-45 350 115) translate (0 70)`}
                />
                <rect
                    x="340" y="105"
                    width={30}
                    height={3}
                    fill={color}
                    transform={`rotate(-45 350 115) translate (0 70)`}
                />
            </g>
            <g>
                <rect
                    x="150" y="0"
                    width={25}
                    height={3}
                    fill={color}
                    transform={`rotate(40 150 0) translate (0 70)`}
                />
                <rect
                    x="150" y="0"
                    width={20}
                    height={3}
                    fill={color}
                    transform={`rotate(40 150 0) translate (0 76)`}
                />
                <rect
                    x="150" y="-100"
                    width={10}
                    height={3}
                    fill={color}
                    transform={`rotate(140 150 0) translate (60 70)`}
                />
                <rect
                    x="150" y="-100"
                    width={15}
                    height={3}
                    fill={color}
                    transform={`rotate(140 150 0) translate (70 80)`}
                />
                <rect
                    x="150" y="0"
                    width={20}
                    height={3}
                    fill={color}
                    transform={`rotate(10 150 0) translate (50 10)`}
                />
                <rect
                    x="150" y="0"
                    width={10}
                    height={3}
                    fill={color}
                    transform={`rotate(10 150 0) translate (50 20)`}
                />
            </g>
            <g>
                <rect
                    x="350" y="50"
                    width={10}
                    height={4}
                    fill={whiteColor}
                    rx={3} ry={3}
                    transform={`rotate(30 350 50) translate (20 -40)`}
                />
                <rect
                    x="350" y="50"
                    width={4}
                    height={2}
                    fill={whiteColor}
                    rx={2} ry={2} cy={2} cx={2}
                    transform={`rotate(30 350 50) translate (10 -39)`}
                />
            </g>
            <g transform="translate(240 140)">
                <rect
                    x="0" y="0"
                    width={10}
                    height={4}
                    fill={whiteColor}
                    rx={3} ry={3}
                    transform={`rotate(-30 0 0)`}
                />
                <rect
                    x="0" y="5"
                    width={4}
                    height={2}
                    fill={whiteColor}
                    rx={2} ry={2} cy={2} cx={2}
                    transform={`rotate(-30 0 0)`}
                />
            </g>
            <g transform="translate(340 240)">
                <rect
                    x="0" y="0"
                    width={40}
                    height={3}
                    fill={color}
                    rx={3} ry={3}
                    transform={`rotate(0 0 0)`}
                />
                <rect
                    x="2" y="4"
                    width={20}
                    height={3}
                    fill={color}
                    rx={3} ry={3}
                    transform={`rotate(0 0 0)`}
                />
                <rect
                    x="4" y="8"
                    width={10}
                    height={3}
                    fill={color}
                    rx={3} ry={3}
                    transform={`rotate(0 0 0)`}
                />
            </g>
            <g transform="translate(500 270)">
                <rect
                    x="0" y="0"
                    width={70}
                    height={3}
                    fill={color}
                    rx={3} ry={3}
                    transform={`rotate(0 0 0)`}
                />
                <rect
                    x="20" y="4"
                    width={30}
                    height={3}
                    fill={color}
                    rx={3} ry={3}
                    transform={`rotate(0 0 0)`}
                />
                <rect
                    x="-10" y="-45"
                    width={50}
                    height={2}
                    fill={color}
                    rx={3} ry={3}
                    transform={`rotate(0 0 0)`}
                />
                <rect
                    x="50" y="-45"
                    width={10}
                    height={2}
                    fill={color}
                    rx={3} ry={3}
                    transform={`rotate(0 0 0)`}
                />
            </g>
        </g>
    );
};