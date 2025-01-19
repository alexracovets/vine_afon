import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { DataTubeLeaf } from "@/src/types";

interface ActiveTubesState {
    rows: DataTubeLeaf[];
}

const useActiveTubes = create<ActiveTubesState>()(immer(() => ({
    rows: [
        {
            tubes: [
                { row: 1, col: 1, id: 1, tubeStatus: "active" },
                { row: 1, col: 2, id: 2, tubeStatus: "active" },
                { row: 1, col: 3, id: 3, tubeStatus: "active" },
                { row: 1, col: 4, id: 4, tubeStatus: "active" },
                { row: 1, col: 5, id: 5, tubeStatus: "active" },
                { row: 1, col: 6, id: 6, tubeStatus: "active" },
                { row: 1, col: 7, id: 7, tubeStatus: "active" },
                { row: 1, col: 8, id: 8, tubeStatus: "active" },
                { row: 1, col: 9, id: 9, tubeStatus: "active" },
                { row: 1, col: 10, id: 10, tubeStatus: "active" }
            ],
            leaf: [
                { row: 1, col: 1, id: 1, tubeStatus: "active" },
                { row: 1, col: 2, id: 2, tubeStatus: "active" },
                { row: 1, col: 3, id: 3, tubeStatus: "active" },
                { row: 1, col: 4, id: 4, tubeStatus: "active" },
                { row: 1, col: 5, id: 5, tubeStatus: "active" },
                { row: 1, col: 6, id: 6, tubeStatus: "active" },
                { row: 1, col: 7, id: 7, tubeStatus: "active" },
                { row: 1, col: 8, id: 8, tubeStatus: "active" },
                { row: 1, col: 9, id: 9, tubeStatus: "active" },
                { row: 1, col: 10, id: 10, tubeStatus: "active" }
            ]
        },
        {
            tubes: [
                { row: 2, col: 1, id: 11, tubeStatus: "active" },
                { row: 2, col: 2, id: 12, tubeStatus: "active" },
                { row: 2, col: 3, id: 13, tubeStatus: "active" },
                { row: 2, col: 4, id: 14, tubeStatus: "active" },
                { row: 2, col: 5, id: 15, tubeStatus: "active" },
                { row: 2, col: 6, id: 16, tubeStatus: "active" },
                { row: 2, col: 7, id: 17, tubeStatus: "active" },
                { row: 2, col: 8, id: 18, tubeStatus: "active" },
                { row: 2, col: 9, id: 19, tubeStatus: "active" },
                { row: 2, col: 10, id: 20, tubeStatus: "active" }
            ],
            leaf: [
                { row: 2, col: 1, id: 11, tubeStatus: "active" },
                { row: 2, col: 2, id: 12, tubeStatus: "active" },
                { row: 2, col: 3, id: 13, tubeStatus: "active" },
                { row: 2, col: 4, id: 14, tubeStatus: "active" },
                { row: 2, col: 5, id: 15, tubeStatus: "active" },
                { row: 2, col: 6, id: 16, tubeStatus: "active" },
                { row: 2, col: 7, id: 17, tubeStatus: "active" },
                { row: 2, col: 8, id: 18, tubeStatus: "active" },
                { row: 2, col: 9, id: 19, tubeStatus: "active" },
                { row: 2, col: 10, id: 20, tubeStatus: "active" }
            ]
        },
        {
            tubes: [
                { row: 3, col: 1, id: 21, tubeStatus: "active" },
                { row: 3, col: 2, id: 22, tubeStatus: "active" },
                { row: 3, col: 3, id: 23, tubeStatus: "active" },
                { row: 3, col: 4, id: 24, tubeStatus: "active" },
                { row: 3, col: 5, id: 25, tubeStatus: "active" },
                { row: 3, col: 6, id: 26, tubeStatus: "active" },
                { row: 3, col: 7, id: 27, tubeStatus: "active" },
                { row: 3, col: 8, id: 28, tubeStatus: "active" },
                { row: 3, col: 9, id: 29, tubeStatus: "active" },
                { row: 3, col: 10, id: 30, tubeStatus: "active" }
            ],
            leaf: [
                { row: 3, col: 1, id: 21, tubeStatus: "active" },
                { row: 3, col: 2, id: 22, tubeStatus: "active" },
                { row: 3, col: 3, id: 23, tubeStatus: "active" },
                { row: 3, col: 4, id: 24, tubeStatus: "active" },
                { row: 3, col: 5, id: 25, tubeStatus: "active" },
                { row: 3, col: 6, id: 26, tubeStatus: "active" },
                { row: 3, col: 7, id: 27, tubeStatus: "active" },
                { row: 3, col: 8, id: 28, tubeStatus: "active" },
                { row: 3, col: 9, id: 29, tubeStatus: "active" },
                { row: 3, col: 10, id: 30, tubeStatus: "active" }
            ]
        },
        {
            tubes: [
                { row: 4, col: 1, id: 31, tubeStatus: "active" },
                { row: 4, col: 2, id: 32, tubeStatus: "active" },
                { row: 4, col: 3, id: 33, tubeStatus: "active" },
                { row: 4, col: 4, id: 34, tubeStatus: "active" },
                { row: 4, col: 5, id: 35, tubeStatus: "active" },
                { row: 4, col: 6, id: 36, tubeStatus: "active" },
                { row: 4, col: 7, id: 37, tubeStatus: "active" },
                { row: 4, col: 8, id: 38, tubeStatus: "active" },
                { row: 4, col: 9, id: 39, tubeStatus: "active" },
                { row: 4, col: 10, id: 40, tubeStatus: "active" }
            ],
            leaf: [
                { row: 4, col: 1, id: 31, tubeStatus: "active" },
                { row: 4, col: 2, id: 32, tubeStatus: "active" },
                { row: 4, col: 3, id: 33, tubeStatus: "active" },
                { row: 4, col: 4, id: 34, tubeStatus: "active" },
                { row: 4, col: 5, id: 35, tubeStatus: "active" },
                { row: 4, col: 6, id: 36, tubeStatus: "active" },
                { row: 4, col: 7, id: 37, tubeStatus: "active" },
                { row: 4, col: 8, id: 38, tubeStatus: "active" },
                { row: 4, col: 9, id: 39, tubeStatus: "active" },
                { row: 4, col: 10, id: 40, tubeStatus: "active" }
            ]
        },
        {
            tubes: [
                { row: 5, col: 1, id: 41, tubeStatus: "active" },
                { row: 5, col: 2, id: 42, tubeStatus: "active" },
                { row: 5, col: 3, id: 43, tubeStatus: "active" },
                { row: 5, col: 4, id: 44, tubeStatus: "active" },
                { row: 5, col: 5, id: 45, tubeStatus: "active" },
                { row: 5, col: 6, id: 46, tubeStatus: "active" },
                { row: 5, col: 7, id: 47, tubeStatus: "active" },
                { row: 5, col: 8, id: 48, tubeStatus: "active" },
                { row: 5, col: 9, id: 49, tubeStatus: "active" },
                { row: 5, col: 10, id: 50, tubeStatus: "active" }
            ],
            leaf: [
                { row: 5, col: 1, id: 41, tubeStatus: "active" },
                { row: 5, col: 2, id: 42, tubeStatus: "active" },
                { row: 5, col: 3, id: 43, tubeStatus: "active" },
                { row: 5, col: 4, id: 44, tubeStatus: "active" },
                { row: 5, col: 5, id: 45, tubeStatus: "active" },
                { row: 5, col: 6, id: 46, tubeStatus: "active" },
                { row: 5, col: 7, id: 47, tubeStatus: "active" },
                { row: 5, col: 8, id: 48, tubeStatus: "active" },
                { row: 5, col: 9, id: 49, tubeStatus: "active" },
                { row: 5, col: 10, id: 50, tubeStatus: "active" }
            ]
        }
    ]

})))

export default useActiveTubes;