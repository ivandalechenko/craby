import { useGSAP } from '@gsap/react';
import './Paper.scss';
import { useRef } from 'react';
import gsap from 'gsap';
export default () => {
    const app = useRef(null)
    useGSAP(
        () => {
            gsap.fromTo('.Paper_img_img', {
                opacity: 1,
                filter: 'brightness(1)'
            }, {
                opacity: 0,
                filter: 'brightness(.2) ',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.Paper_img',
                    scrub: 1,
                    // markers: true,
                    start: `70% center`,
                    end: `bottom center`,
                }
            })
        },
        { scope: app }
    )
    useGSAP(
        () => {
            gsap.fromTo('.Paper_img_l', {
                x: 0,
                rotate: 0
            }, {
                x: -200,
                rotate: -20,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.Paper_img',
                    scrub: 2,
                    // markers: true,
                    start: `70% center`,
                    end: `bottom center`,
                }
            })
        },
        { scope: app }
    )
    useGSAP(
        () => {
            gsap.fromTo('.Paper_img_r', {
                x: 0,
                rotate: 0
            }, {
                x: 200,
                rotate: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.Paper_img',
                    scrub: 2,
                    // markers: true,
                    start: `70% center`,
                    end: `bottom center`,
                }
            })
        },
        { scope: app }
    )
    return (
        <div className='Paper' ref={app}>
            <div className='Paper_img free_img'>
                <img src="/img/paperLeft.webp" className='Paper_img_img Paper_img_l' alt="" />
            </div>
            <div className='Paper_img free_img'>
                <img src="/img/paperRight.webp" className='Paper_img_img Paper_img_r' alt="" />
            </div>
        </div>
    )
}