import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface TubeData {
    row: number;
    col: number;
    id: number;
    tubeStatus: "active" | "inactive" | string;
}

interface Data {
    data: TubeData[];
}

interface ActiveTubesState {
    rows: Data[];
}

const useActiveTubes = create<ActiveTubesState>()(immer(() => ({
    rows: [
        {
            data: [
                { row: 1, col: 1, id: 1, tubeStatus: "active" },
                { row: 1, col: 2, id: 2, tubeStatus: "active" },
                { row: 1, col: 3, id: 3, tubeStatus: "active" },
                { row: 1, col: 4, id: 4, tubeStatus: "active" },
                { row: 1, col: 5, id: 5, tubeStatus: "active" },
                { row: 1, col: 6, id: 6, tubeStatus: "active" },
                { row: 1, col: 7, id: 7, tubeStatus: "active" },
                { row: 1, col: 8, id: 8, tubeStatus: "active" },
                { row: 1, col: 9, id: 9, tubeStatus: "active" },
                { row: 1, col: 10, id: 10, tubeStatus: "active" },
            ]
        },
        {
            data: [
                { row: 2, col: 1, id: 11, tubeStatus: "active" },
                { row: 2, col: 2, id: 12, tubeStatus: "active" },
                { row: 2, col: 3, id: 13, tubeStatus: "active" },
                { row: 2, col: 4, id: 14, tubeStatus: "active" },
                { row: 2, col: 5, id: 15, tubeStatus: "active" },
                { row: 2, col: 6, id: 16, tubeStatus: "active" },
                { row: 2, col: 7, id: 17, tubeStatus: "active" },
                { row: 2, col: 8, id: 18, tubeStatus: "active" },
                { row: 2, col: 9, id: 19, tubeStatus: "active" },
                { row: 2, col: 10, id: 20, tubeStatus: "active" },
            ]
        },
        {
            data: [
                { row: 3, col: 1, id: 21, tubeStatus: "active" },
                { row: 3, col: 2, id: 22, tubeStatus: "active" },
                { row: 3, col: 3, id: 23, tubeStatus: "active" },
                { row: 3, col: 4, id: 24, tubeStatus: "active" },
                { row: 3, col: 5, id: 25, tubeStatus: "active" },
                { row: 3, col: 6, id: 26, tubeStatus: "active" },
                { row: 3, col: 7, id: 27, tubeStatus: "active" },
                { row: 3, col: 8, id: 28, tubeStatus: "active" },
                { row: 3, col: 9, id: 29, tubeStatus: "active" },
                { row: 3, col: 10, id: 30, tubeStatus: "active" },
            ]
        }
    ]

})))

export default useActiveTubes;