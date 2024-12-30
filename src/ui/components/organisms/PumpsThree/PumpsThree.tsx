"use client";

import { Plane } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";

const fragmentShader = `
    precision mediump float;
    varying vec2 vUv;

    // Функція для створення прямокутника з закругленими кутами
float roundedRect(vec2 uv, vec2 position, vec2 size, float radius) {
    vec2 halfSize = size * 0.5;               // Половина розмірів прямокутника
    vec2 p = abs(uv - position) - halfSize;  // Зміщення в позитивний простір
    
    // Перевірка на межі прямокутника з урахуванням радіуса
    float outside = length(max(p, 0.0)) - radius; // Зовнішня частина
    float inside = min(max(p.x, p.y), 0.0);       // Внутрішня частина
    
    return outside + inside; // Комбінуємо зовнішню та внутрішню частини
}
void main() { 
  vec4 color = vec4(1.0, 1.0, 1.0, 1.0); // Білий фон
    
    float heightTube = 0.05;
    float widthTube = 0.125;

    vec2 sizeNormal = vec2(widthTube, heightTube); 

    // Основний прямокутник з правильним заокругленням
    float mainRect = roundedRect(vUv, vec2(0.5, 0.5), sizeNormal, 0.02);
    if (mainRect < 0.0) color = vec4(0.69, 0.80, 0.89, 1.0); // Блакитний прямокутник

    gl_FragColor = color;
}

`;

const vertexShader = `
 varying vec2 vUv; // Передаємо UV-координати в фрагментний шейдер

void main() {
    vUv = uv; // Зберігаємо UV-координати
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
}
`;

export const PumpsThree = () => {

    const { size } = useThree();
    const [resolution, setResolution] = useState([size.width, size.height]);

    useEffect(() => {
        const handleResize = () => {
            const { innerWidth, innerHeight } = window;
            setResolution([innerWidth, innerHeight]);
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <Plane args={[resolution[0] / 100, resolution[1] / 100]} position={[0, 0, 0]}>
                <shaderMaterial
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                    uniforms={{
                        u_resolution: { value: resolution },
                    }}
                />
            </Plane>
        </>
    );
};