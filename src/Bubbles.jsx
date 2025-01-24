import React, { useEffect, useState } from "react";
import "./Bubbles.scss";

const Bubbles = () => {
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        // Создаём начальные пузырьки
        createBubbles(2);
    }, []);

    const createBubbles = (count) => {
        for (let i = 0; i < count; i++) {
            createBubble();
        }
    };

    const createBubble = () => {
        const id = Math.random().toString(36).substr(2, 9);
        const size = Math.random() * 200 + 100; // Размер от 100 до 300
        const speed = Math.random() * 5 + 2; // Скорость от 5 до 10 секунд
        setBubbles((prevBubbles) => [
            ...prevBubbles,
            { id, x: Math.random() * 100, size, speed },
        ]);

        setTimeout(() => {
            popBubble(id);
        }, speed * 1000 * (Math.random() / 2 + .5));
    };

    const popBubble = (id) => {
        const bubbleElement = document.getElementById(id);
        if (!bubbleElement) return;

        const textures = [
            "/img/buble1.png",
            "/img/buble2.png",
            "/img/buble3.png",
        ];

        textures.forEach((texture, index) => {
            setTimeout(() => {
                if (bubbleElement) bubbleElement.src = texture;
            }, index * 100);
        });

        setTimeout(() => {
            setBubbles((prev) => prev.filter((bubble) => bubble.id !== id));
            createBubble(); // Создаём новый пузырь
        }, textures.length * 100 + 100);
    };

    const handleBubbleClick = (id) => {
        popBubble(id);
    };

    return (
        <div className="Bubbles">
            {bubbles.map((bubble) => (
                <img
                    key={bubble.id}
                    id={bubble.id}
                    className="bubble"
                    src="/img/buble.png"
                    alt=""
                    style={{
                        left: `${bubble.x}%`,
                        width: `${bubble.size}px`,
                        height: `${bubble.size}px`,
                        animationDuration: `${bubble.speed}s`,
                    }}
                    onClick={() => handleBubbleClick(bubble.id)}
                />
            ))}
        </div>
    );
};

export default Bubbles;
