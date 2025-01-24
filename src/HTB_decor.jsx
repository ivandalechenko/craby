import './HTB_decor.scss';
import { useEffect } from 'react';

const handPositions = [
    { className: 'HTB_decor_hand_l1', left: -90, top: 450 },
    { className: 'HTB_decor_hand_l2', left: -65, top: 750 },
    { className: 'HTB_decor_hand_l3', left: 10, top: 1050 },
    { className: 'HTB_decor_hand_l4', left: -40, top: 1310 },

    { className: 'HTB_decor_hand_r1', right: -90, top: 450 },
    { className: 'HTB_decor_hand_r2', right: -65, top: 750 },
    { className: 'HTB_decor_hand_r3', right: 10, top: 1050 },
    { className: 'HTB_decor_hand_r4', right: -40, top: 1310 },
];

export default () => {
    useEffect(() => {
        const updateHandRotation = (event) => {
            handPositions.forEach(({ className }) => {
                const handImage = document.querySelector(`.${className} img`);
                if (!handImage) return;

                const rect = handImage.getBoundingClientRect();
                const handCenterX = rect.left + rect.width / 2;
                const handCenterY = rect.top + rect.height / 2;
                const angle = Math.atan2(event.clientY - handCenterY, event.clientX - handCenterX) * (180 / Math.PI);
                handImage.style.transform = `rotate(${angle + 40}deg)`;
            });
        };

        window.addEventListener('mousemove', updateHandRotation);

        return () => {
            window.removeEventListener('mousemove', updateHandRotation);
        };
    }, []);

    return (
        <div className='HTB_decor free_img'>
            {handPositions.map(({ className, left, right, top }) => (
                <div
                    key={className}
                    className={`free_img ${className}`}
                    style={{
                        position: 'absolute',
                        left: left !== undefined ? `${left}px` : 'auto',
                        right: right !== undefined ? `${right}px` : 'auto',
                        top: `${top}px`,
                    }}
                >
                    <img src="/img/hand.png" className='HTB_decor_hand' alt="" />
                </div>
            ))}
            <div className='HTB_decor_left free_img'>
                <img src="/img/cave.webp" className='HTB_decor_cave' alt="" />
            </div>
            <div className='HTB_decor_right free_img'>
                <img src="/img/cave.webp" className='HTB_decor_cave' alt="" />
            </div>
        </div>
    );
};
