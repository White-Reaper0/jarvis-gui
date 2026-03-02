import React from 'react';
import FluidBlob from './FluidBlob';
import AudioVisualizer from './AudioVisualizer';
import HUDWidgets from './HUDWidgets';
import VoiceInput from './VoiceInput';

const VoiceInterface = () => {
    return (
        <div className="voice-interface">
            <FluidBlob />
            <AudioVisualizer />
            <HUDWidgets />
            <VoiceInput />
        </div>
    );
};

export default VoiceInterface;