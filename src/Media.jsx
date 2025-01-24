import { useRef } from 'react';
import './Media.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
export default () => {

    const app = useRef(null)

    useGSAP(
        () => {
            gsap.fromTo('.Media_element_1', {
                x: -300,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.Media',
                    scrub: 1,
                    // markers: true,
                    start: `40% 80%`,
                    end: `60% 80%`,
                }
            })
            gsap.fromTo('.Media_element_2', {
                x: 300,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.Media',
                    scrub: 1,
                    // markers: true,
                    start: `60% 80%`,
                    end: `80% 80%`,
                }
            })
            gsap.fromTo('.Media_element_3', {
                x: -300,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.Media',
                    scrub: 1,
                    // markers: true,
                    start: `80% 80%`,
                    end: `100% 80%`,
                }
            })
        },
        { scope: app }
    )

    return (
        <div ref={app}>

            <div className='Media' >
                <a href='https://dexscreener.com/solana/hx9bkd3xeyxtwwudbr3ragjqjisvd2abqm5imqen7wix' target='_blank' className='Media_element Media_element_1'>
                    <div className='Media_element_decor'>
                        <img src="/img/dex.svg" alt="" />
                    </div>
                    <div className='Media_element_text textShadowAndBorder'>
                        DEX Screener
                    </div>
                </a>
                <a href='https://t.me/crabyonsol' className='Media_element Media_element_2'>
                    <div className='Media_element_decor'>
                        <img src="/img/tg.svg" alt="" />
                    </div>
                    <div className='Media_element_text textShadowAndBorder'>
                        Telegram
                    </div>
                </a>
                <a href='https://x.com/CrabyCTOx' className='Media_element Media_element_3'>
                    <div className='Media_element_decor'>
                        <img src="/img/x.svg" alt="" />
                    </div>
                    <div className='Media_element_text textShadowAndBorder'>
                        X (Twitter)
                    </div>
                </a>
            </div>
        </div>
    )
}