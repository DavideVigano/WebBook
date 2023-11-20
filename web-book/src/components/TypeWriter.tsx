import React, { useEffect, useState } from 'react';

interface FontProps {
    fontFamily: string;
    fontSize: string;
    color: string;
}

interface TypewriterProps {
    text: string;
    speed: number;
    fontProps: FontProps;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed, fontProps }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(timer);
            }
        }, speed);

        return () => {
            clearInterval(timer);
        };
    }, [text, speed, currentIndex]);

    const textStyle: React.CSSProperties = {
        fontFamily: fontProps.fontFamily,
        fontSize: fontProps.fontSize,
    };

    return (
        <div style={textStyle} className="typewriter-container">
            <div className="typewriter-text" style={{ color: fontProps.color }}>
                {displayText}
            </div>
            <div className="cursor-animation">_</div>
        </div>
    );
};

export default Typewriter;
