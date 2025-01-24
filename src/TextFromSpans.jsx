import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default ({ text, noAnim = false }) => {
    const app = useRef(null); // Создаем массив ссылок на элементы
    const spansRef = useRef([]); // Создаем массив ссылок на элементы

    useGSAP(
        () => {
            if (!noAnim) {
                gsap.fromTo(
                    spansRef.current,
                    {
                        opacity: 0,
                        scale: 2,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        stagger: 0.1, // Задержка между элементами
                        // duration: 0.3, // Длительность для каждого элемента
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: `.text`,
                            scrub: 3,
                            // markers: true,
                            start: `start 80%`,
                            end: `end 80%`,
                        }
                    }
                );
            }

        },
        { scope: app }
    )


    return (
        <div ref={app}>
            <div className="text">
                {
                    text.split('').map((letter, index) => {
                        return <span style={{ display: 'inline-block' }} key={`text-${text}-letter-${index}`} ref={(el) => (spansRef.current[index] = el)}>{letter}</span>
                    })
                }
            </div>
        </div>
    )
}