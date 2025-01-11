import { Building } from "./Building";


export const SVGBuilding = () => {
    const widthBlock = 100;
    const heightBlock = 25;

    return (
        <svg width="100%" viewBox="0 0 960 1080" className="flex-grow h-full max-h-full">
            <Building />
            <g transform="translate(120 815)">
                <rect width={824} height={8} fill="gray" strokeWidth={1} stroke="black" />
            </g>
            <g transform="translate(337 430)">
                <rect
                    fill="rgb(216, 216, 216)"
                    stroke="black"
                    width="380" height="385"
                    rx="175" ry="175"
                />
            </g>
            <g transform="translate(120 790)">
                <rect
                    x={0} y={0}
                    fill="rgb(216, 216, 216)"
                    stroke="black"
                    width={widthBlock} height={heightBlock}
                    rx="2" ry="2"
                />
                <rect
                    x={widthBlock} y={0}
                    fill="rgb(216, 216, 216)"
                    stroke="black"
                    width={widthBlock} height={heightBlock}
                    rx="2" ry="2"
                />
                <rect
                    x={widthBlock * 2} y={0}
                    fill="rgb(216, 216, 216)"
                    stroke="black"
                    width={widthBlock} height={heightBlock}
                    rx="2" ry="2"
                />
                <rect
                    x={widthBlock * 3} y={0}
                    fill="rgb(216, 216, 216)"
                    stroke="black"
                    width={widthBlock} height={heightBlock}
                    rx="2" ry="2"
                />
                <rect
                    x={widthBlock * 4} y={0}
                    fill="rgb(216, 216, 216)"
                    stroke="black"
                    width={widthBlock} height={heightBlock}
                    rx="2" ry="2"
                />
                <rect
                    x={widthBlock * 5} y={0}
                    fill="rgb(216, 216, 216)"
                    stroke="black"
                    width={widthBlock} height={heightBlock}
                    rx="2" ry="2"
                />
                <rect
                    x={widthBlock * 6} y={0}
                    fill="rgb(216, 216, 216)"
                    stroke="black"
                    width={widthBlock} height={heightBlock}
                    rx="2" ry="2"
                />
                <rect
                    x={widthBlock * 7} y={0}
                    fill="rgb(216, 216, 216)"
                    stroke="black"
                    width={widthBlock} height={heightBlock}
                    rx="2" ry="2"
                />
                <rect
                    x={widthBlock * 8} y={0}
                    fill="rgb(216, 216, 216)"
                    stroke="black"
                    width={widthBlock} height={heightBlock}
                    rx="2" ry="2"
                />
                <rect
                    x={-widthBlock / 2} y={-heightBlock}
                    fill="rgb(216, 216, 216)"
                    stroke="black"
                    width={widthBlock} height={heightBlock}
                    rx="2" ry="2"
                />
                <rect
                    x={widthBlock / 2} y={-heightBlock}
                    fill="rgb(216, 216, 216)"
                    stroke="black"
                    width={widthBlock} height={heightBlock}
                    rx="2" ry="2"
                />
                <rect
                    x={widthBlock * 1.5} y={-heightBlock}
                    fill="rgb(216, 216, 216)"
                    stroke="black"
                    width={widthBlock} height={heightBlock}
                    rx="2" ry="2"
                />
                <rect
                    x={widthBlock * 2.5} y={-heightBlock}
                    fill="rgb(216, 216, 216)"
                    stroke="black"
                    width={widthBlock} height={heightBlock}
                    rx="2" ry="2"
                />
                <rect
                    x={widthBlock * 3.5} y={-heightBlock}
                    fill="rgb(216, 216, 216)"
                    stroke="black"
                    width={widthBlock} height={heightBlock}
                    rx="2" ry="2"
                />
                <rect
                    x={widthBlock * 4.5} y={-heightBlock}
                    fill="rgb(216, 216, 216)"
                    stroke="black"
                    width={widthBlock} height={heightBlock}
                    rx="2" ry="2"
                />
                <rect
                    x={widthBlock * 5.5} y={-heightBlock}
                    fill="rgb(216, 216, 216)"
                    stroke="black"
                    width={widthBlock} height={heightBlock}
                    rx="2" ry="2"
                />
                <rect
                    x={widthBlock * 6.5} y={-heightBlock}
                    fill="rgb(216, 216, 216)"
                    stroke="black"
                    width={widthBlock} height={heightBlock}
                    rx="2" ry="2"
                />
                <rect
                    x={widthBlock * 7.5} y={-heightBlock}
                    fill="rgb(216, 216, 216)"
                    stroke="black"
                    width={widthBlock} height={heightBlock}
                    rx="2" ry="2"
                />
            </g>

        </svg>
    );
};