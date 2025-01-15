import { useEffect } from "react";

interface BlockType {
    id: number;
    name?: string;
    row?: number;
    col?: number;
}

interface MyFormData {
    formData: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    blockList: string;
    leafList: string;
    tubesList: string;
}

export function useFormLists(
    activeBlocks: BlockType[],
    activeLeafs: BlockType[],
    activeTubes: BlockType[],
    setFormData: React.Dispatch<React.SetStateAction<MyFormData>>
) {
    useEffect(() => {
        const blocksList = activeBlocks.map(
            (block) => `<li>Комірка №:${block.id} заброньована на ім'я '${block.name}'</li>`
        );
        setFormData((prev) => ({
            ...prev,
            blockList: `<ul>${blocksList.join('')}</ul>`,
        }));
    }, [activeBlocks, setFormData]);

    useEffect(() => {
        const leafList = activeLeafs.map(
            (leaf) => `<li>Листок під №:${leaf.id} з позиціями по x-${leaf.col} по y-${leaf.row}</li>`
        );
        setFormData((prev) => ({
            ...prev,
            leafList: `<ul>${leafList.join('')}</ul>`,
        }));
    }, [activeLeafs, setFormData]);

    useEffect(() => {
        const tubesList = activeTubes.map(
            (tube) => `<li>Труба під №:${tube.id} з позиціями по x-${tube.col} по y-${tube.row}</li>`
        );
        setFormData((prev) => ({
            ...prev,
            tubesList: `<ul>${tubesList.join('')}</ul>`,
        }));
    }, [activeTubes, setFormData]);
}