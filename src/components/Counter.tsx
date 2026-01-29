import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

interface CounterProps {
    from?: number;
    to: number;
    duration?: number;
    className?: string;
}

const Counter = ({ from = 0, to, duration = 2, className }: CounterProps) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;

        const node = nodeRef.current;
        if (!node) return;

        const controls = animate(from, to, {
            duration: duration,
            onUpdate(value) {
                node.textContent = Math.floor(value).toString();
            },
            ease: "easeOut"
        });

        return () => controls.stop();
    }, [from, to, duration, isInView]);

    return <span ref={nodeRef} className={className} />;
}

export default Counter;
