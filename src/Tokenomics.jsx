import { useRef, useState } from 'react';
import TextFromSpans from './TextFromSpans';
import './Tokenomics.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CA = 'BQhiGezMhTtrwoDkdosWvkjGzL5SJ4D7gqb1fjmc673J'

export default () => {
    const app = useRef(null)
    const [copyText, setcopyText] = useState('Copy to clipboard');
    const handleCopy = async () => {
        navigator.clipboard.writeText(CA).then(() => {
            setcopyText('Copied!')
            setTimeout(() => {
                setcopyText('Copy to clipboard')
            }, 3000);
        }).catch((err) => {
            console.error("Err: ", err);
        });
    }


    useGSAP(
        () => {
            gsap.fromTo(`.Tokenomics_advantage_1`, {
                x: -200,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: `.Tokenomics_advantages`,
                    scrub: 1,
                    // markers: true,
                    start: `top 90%`,
                    end: `bottom 90%`,
                }
            })
            gsap.fromTo(`.Tokenomics_advantage_2`, {
                y: 200,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: `.Tokenomics_advantages`,
                    scrub: 1,
                    // markers: true,
                    start: `top 90%`,
                    end: `bottom 90%`,
                }
            })
            gsap.fromTo(`.Tokenomics_advantage_3`, {
                x: 200,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: `.Tokenomics_advantages`,
                    scrub: 1,
                    // markers: true,
                    start: `top 90%`,
                    end: `bottom 90%`,
                }
            })

            gsap.fromTo(`.MediaSmall_el_1`, {
                x: -200,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: `.MediaSmall`,
                    scrub: 1,
                    // markers: true,
                    start: `top 90%`,
                    end: `bottom 90%`,
                }
            })
            gsap.fromTo(`.MediaSmall_el_2`, {
                y: 200,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: `.MediaSmall`,
                    scrub: 1,
                    // markers: true,
                    start: `top 90%`,
                    end: `bottom 90%`,
                }
            })
            gsap.fromTo(`.MediaSmall_el_3`, {
                x: 200,
                opacity: 0,
            }, {
                x: 0,
                opacity: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: `.MediaSmall`,
                    scrub: 1,
                    // markers: true,
                    start: `top 90%`,
                    end: `bottom 90%`,
                }
            })
        },
        { scope: app }
    )

    return (
        <div className='Tokenomics' ref={app}>
            <div className='Tokenomics_header'>
                <TextFromSpans text={"TOKENOMICS"} />
            </div>
            <div className='Tokenomics_ca'>
                <div className='Tokenomics_ca_header'>
                    <TextFromSpans text={"CA:"} />
                </div>
                <div className='Tokenomics_ca_content'>
                    <div className='Tokenomics_ca_content_text textShadowAndBorder'>
                        {CA}
                    </div>
                    <div className='Tokenomics_ca_content_copy textShadowAndBorder' onClick={handleCopy}>
                        {copyText}
                    </div>
                </div>
            </div>
            <div className='Tokenomics_advantages'>
                <div className='Tokenomics_advantage Tokenomics_advantage_1 textShadowAndBorder'>
                    SUPPLY: 1.000.000.000
                </div>
                <div className='Tokenomics_advantage Tokenomics_advantage_2 textShadowAndBorder'>
                    LP: BURNT
                </div>
                <div className='Tokenomics_advantage Tokenomics_advantage_3 textShadowAndBorder'>
                    BUY/SELL: 0%
                </div>
            </div>
            <div className='Tokenomics_media'>
                <div className='MediaSmall'>
                    <a href='https://dexscreener.com/solana/hx9bkd3xeyxtwwudbr3ragjqjisvd2abqm5imqen7wix' target='_blank' className='MediaSmall_el MediaSmall_el_1'>
                        <img src="/img/dex.svg" alt="" />
                    </a>
                    <a href='https://t.me/crabyonsol' target='_blank' className='MediaSmall_el MediaSmall_el_2'>
                        <img src="/img/tg.svg" alt="" />
                    </a>
                    <a href='https://x.com/CrabyCTOx' target='_blank' className='MediaSmall_el MediaSmall_el_3'>
                        <img src="/img/x.svg" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}