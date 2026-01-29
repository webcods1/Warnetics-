import { useState, useEffect, useRef } from 'react';

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";

const HackerText = ({ text, className = "", speed = 30 }: { text: string, className?: string, speed?: number }) => {
    const [displayText, setDisplayText] = useState(text);
    const iteration = useRef(0);
    const intervalRef = useRef<any>(null);

    useEffect(() => {
        iteration.current = 0;
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(
                text.split("").map((letter, index) => {
                    if (CharacterIsSpace(letter)) return " ";
                    if (index < iteration.current) {
                        return text[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("")
            );

            if (iteration.current >= text.length) {
                clearInterval(intervalRef.current);
            }

            iteration.current += 1 / 3;
        }, speed);

        return () => clearInterval(intervalRef.current);
    }, [text, speed]);

    return <span className={className}>{displayText}</span>;
}

const CharacterIsSpace = (char: string) => {
    return char === " ";
}

export default HackerText;
