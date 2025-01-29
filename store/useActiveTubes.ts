import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface ItemsType {
    row: number;
    cols: {
        tubeStatus: "active" | "inactive" | string;
        leafStatus: "active" | "inactive" | string;
        id: number;
    }[];
};

interface ActiveTubesState {
    data: ItemsType[];
}

const useActiveTubes = create<ActiveTubesState>()(immer(() => ({
    data: [
        {
            row: 1,
            cols: [
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 1
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 2
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 3
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 4
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 5
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 6
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 7
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 8
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 9
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 10
                }
            ]
        },
        {
            row: 2,
            cols: [
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 11
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 12
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 13
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 14
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 15
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 16
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 17
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 18
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 19
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 20
                }
            ]
        },
        {
            row: 3,
            cols: [
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 21
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 22
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 23
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 24
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 25
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 26
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 27
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 28
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 29
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 30
                }
            ]
        },
        {
            row: 4,
            cols: [
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 31
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 32
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 33
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 34
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 35
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 36
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 37
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 38
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 39
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 40
                }
            ]
        },
        {
            row: 5,
            cols: [
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 41
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 42
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 43
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 44
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 45
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 46
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 47
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 48
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 49
                },
                {
                    tubeStatus: "active",
                    leafStatus: "active",
                    id: 50
                }
            ]
        },
    ]
})))

export default useActiveTubes;