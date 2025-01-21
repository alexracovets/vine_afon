import { MyFormData, MainBlockData } from "@/src/types";
import { useEffect } from "react";

interface BlockType {
    id: number;
    name?: string;
    row?: number;
    col?: number;
}

export function useFormLists(
    activeBlocks: BlockType[],
    activeLeafs: BlockType[],
    activeTubes: BlockType[],
    activeBlockMain: MainBlockData[],
    setFormData: React.Dispatch<React.SetStateAction<MyFormData>>
) {
    useEffect(() => {
        if (activeBlocks.length > 0) {
            const blocksList = activeBlocks.map(
                (block) => `<li>Комірка №:${block.id} заброньована на ім'я '${block.name}'</li>`
            );
            setFormData((prev) => ({
                ...prev,
                blockList: `<ul>${blocksList.join('')}</ul>`,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                blockList: null,
            }));
        };

    }, [activeBlocks, setFormData]);

    useEffect(() => {
        if (activeLeafs.length > 0) {
            const leafList = activeLeafs.map(
                (leaf) => `<li>Листок під №:${leaf.id} з позиціями по x-${leaf.col} по y-${leaf.row}</li>`
            );
            setFormData((prev) => ({
                ...prev,
                leafList: `<ul>${leafList.join('')}</ul>`,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                leafList: null,
            }));
        }

    }, [activeLeafs, setFormData]);

    useEffect(() => {
        if (activeBlockMain.length > 0) {
            const mainBlock = `Користувач виявив бажання стати головним меценатом на Ім'я ${activeBlockMain[0].name}`;
            setFormData((prev) => ({
                ...prev,
                mainBlock: mainBlock,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                mainBlock: null,
            }));
        }

    }, [activeBlockMain, setFormData]);

    useEffect(() => {
        if (activeTubes.length > 0) {
            const tubesList = activeTubes.map(
                (tube) => `<li>Труба під №:${tube.id} з позиціями по x-${tube.col} по y-${tube.row}</li>`
            );
            setFormData((prev) => ({
                ...prev,
                tubesList: `<ul>${tubesList.join('')}</ul>`,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                tubesList: null,
            }));
        }

    }, [activeTubes, setFormData]);
}