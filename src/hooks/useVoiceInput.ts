import { useEffect, useState } from 'react';

const useVoiceInput = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.onstart = () => setIsListening(true);
        recognition.onresult = (event) => {
            const { transcript } = event.results[0][0];
            setTranscript(transcript);
        };
        recognition.onend = () => setIsListening(false);

        if (isListening) {
            recognition.start();
        } else {
            recognition.stop();
        }

        return () => {
            recognition.onend = null;
        };
    }, [isListening]);

    return { isListening, transcript, setIsListening };
};

export default useVoiceInput;
