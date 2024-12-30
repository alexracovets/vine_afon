"use client";

import { cn } from "@/src/utils/cn";

export const SVGTubes = () => {

    const testStyle = cn(
        "fill-blue-500",
        "hover:fill-red-500",
    );

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="256" viewBox="0 0 1920 288">
            <defs>
                <g id="pipe-joint-0">
                    <rect x="16" y="7" width="50" height="76" stroke="#778899"
                        strokeWidth="6" />
                    <rect x="0" y="0" rx="3" width="16" height="90" fill="#778899" />
                    <rect x="58" y="0" rx="3" width="8" height="90" fill="#778899" />
                </g>
                <g id="pipe-joint-1">
                    <rect x="8" y="7" width="200" height="76" stroke="#778899"
                        strokeWidth="6" />
                    <rect x="0" y="0" rx="3" width="8" height="90" fill="#778899" />
                    <rect x="210" y="0" rx="3" width="8" height="90" fill="#778899" />
                </g>
                <g id="pipe-joint-2">
                    <rect x="8" y="7" width="100" height="76" stroke="#778899"
                        strokeWidth="6" />
                    <rect x="0" y="0" rx="3" width="8" height="90" fill="#778899" />
                    <rect x="110" y="0" rx="3" width="8" height="90" fill="#778899" />
                </g>
                <g id="pipe-joint-3">
                    <rect x="5" y="7" width="81" height="76" stroke="#778899"
                        strokeWidth="6" />
                    <rect x="0" y="0" rx="3" width="8" height="90" fill="#778899" />
                    <rect x="83" y="0" rx="3" width="8" height="90" fill="#778899" />
                </g>
            </defs>
            <defs>
                <g id="pipe-bend-1">
                    <g transform="rotate(270, 0, 0) translate(-98, 8)">
                        <path
                            d="M 0.265 14.524 C 9.366 14.524 15.704 11.589 15.704 0 L 90.941 0.34 C 90.941 74.715 50.162 89.733 0 89.733 L 0.265 14.524 Z"
                            stroke="#778899"
                            strokeWidth="6"
                        />
                    </g>
                    <rect x="0" y="0" rx="3" width="8" height="90" fill="#778899" />
                    <rect
                        x="0" y="0" rx="3" width="8" height="90" fill="#778899"
                        transform="rotate(90, 0, 0) translate(94, -104.9)"
                    />
                </g>
                <g id="pipe-bend-2">
                    <g transform="rotate(0, 0, 0) translate(0, 8)">
                        <path
                            d="M 0.265 14.524 C 9.366 14.524 15.704 11.589 15.704 0 L 90.941 0.34 C 90.941 74.715 50.162 89.733 0 89.733 L 0.265 14.524 Z"
                            stroke="#778899"
                            strokeWidth="6"
                        />
                    </g>
                    <rect
                        x="0" y="0" rx="3" width="8" height="90" fill="#778899"
                        transform="rotate(90, 0, 0) translate(4, -98)"
                    />
                </g>
                <g id="pipe-bend-3">
                    <g transform="rotate(180, 0, 0) translate(-98, -112)">
                        <path
                            d="M 0.265 14.524 C 9.366 14.524 15.704 11.589 15.704 0 L 90.941 0.34 C 90.941 74.715 50.162 89.733 0 89.733 L 0.265 14.524 Z"
                            stroke="#778899"
                            strokeWidth="6"
                        />
                    </g>
                    <rect x="-8" y="14" rx="3" width="8" height="90" fill="#778899" transform="translate(102, 0)" />
                </g>
                <g id="pipe-bend-4">
                    <g transform="rotate(90, 0, 0) translate(0, 0)">
                        <path
                            d="M 0.265 14.524 C 9.366 14.524 15.704 11.589 15.704 0 L 90.941 0.34 C 90.941 74.715 50.162 89.733 0 89.733 L 0.265 14.524 Z"
                            stroke="#778899"
                            strokeWidth="6"
                        />
                    </g>
                    <rect x="-8" y="14" rx="3" width="8" height="90" fill="#778899" transform="translate(4, -5.5)" />
                    <rect
                        x="0" y="0" rx="3" width="8" height="90" fill="#778899"
                        transform="rotate(90, 0, 0) translate(-4, 8)"
                    />
                </g>
            </defs>
            <g>
                <use href="#pipe-bend-1" x="402" y="0" className={testStyle} />
                <use href="#pipe-bend-2" x="408" y="90" className={testStyle} />
                <use href="#pipe-bend-3" x="218" y="92" className={testStyle} />
                <use href="#pipe-bend-4" x="315" y="206" className={testStyle} />
                {/* <rect x="86" y="-505" rx="4" width="16" height="86" fill="#778899" transform="rotate(90)" /> */}
                {/* <rect x="194" y="-297" rx="4" width="16" height="86" fill="#778899" transform="rotate(90)" /> */}
                <use href="#pipe-joint-0" x="0" className={testStyle} />
                <use href="#pipe-joint-1" x="66" className={testStyle} />
                <use href="#pipe-joint-2" x="284" className={testStyle} />
                <use href="#pipe-joint-3" x="320" y="106" className={testStyle} />
                {/* <use href="#pipe-joint-2" x="200" y="104" /> */}
                {/* <use href="#pipe-joint-2" x="200" y="212" />  */}
            </g>
        </svg>
    );
};