"use client"
import {ReactNode} from "react";
import Background from "../background/Background";
import Grain from "../background/Grain";

interface SceneProps {
    children: ReactNode;
}

export default function Scene({
    children,
}: SceneProps) {
    return (
        <main 
            className="relative overflow-x-hidden"
            style={{
                perspective: "2200px",
                transformStyle: "preserve-3d",
            }}
        >
            <Background/>
            <Grain/>
            {children}
        </main>
    );
}