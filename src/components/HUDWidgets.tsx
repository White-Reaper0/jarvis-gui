import React from 'react';

const HUDWidgets: React.FC = () => {
    const vocalFrequency = 440; // Placeholder value
    const systemEntropy = 0.75; // Placeholder value

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
            <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', backgroundColor: '#f9f9f9' }}>
                <h3>Vocal Frequency</h3>
                <p>{vocalFrequency} Hz</p>
            </div>
            <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', backgroundColor: '#f9f9f9' }}>
                <h3>System Entropy</h3>
                <p>{systemEntropy}</p>
            </div>
        </div>
    );
};

export default HUDWidgets;