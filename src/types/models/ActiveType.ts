import { TubeData } from "./TubeData";

export interface ActiveType {
    x: number;
    y: number;
    idx: number;
    width: number;
    height: number;
    borderHeight: number;
    className: string;
    tube: TubeData;
}