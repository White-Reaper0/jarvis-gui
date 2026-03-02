import React from 'react';
import { Canvas } from 'react-three-fiber';

const AudioVisualizer = ({ frequencyData }) => {
    // Define the number of bars and their maximum height
    const barCount = 64;
    const maxHeight = 5;

    return (
        <Canvas>
            {frequencyData.map((frequency, index) => {
                // Calculate the height of each bar based on frequency data
                const height = (frequency / 255) * maxHeight;

                return (
                    <mesh key={index} position={[index * 0.2 - barCount * 0.1, height / 2, 0]}>  
                        <boxBufferGeometry args={[0.15, height, 0.1]} />
                        <meshStandardMaterial color={`hsl(${(frequency / 255) * 360}, 100%, 50%)`} />
                    </mesh>
                );
            })}
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
        </Canvas>
    );
};

export default AudioVisualizer;