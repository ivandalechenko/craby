import { useRef } from 'react';
import './HTB.scss';
import TextFromSpans from './TextFromSpans'
import HTB_decor from './HTB_decor'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default () => {
    const app = useRef(null)

    useGSAP(
        () => {
            for (let i = 1; i <= 4; i++) {
                gsap.fromTo(`.HTB_step_${i}`, {
                    x: 300 * (i % 2 === 0 ? 1 : -1),
                    opacity: 0,
                }, {
                    x: 0,
                    opacity: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: `.HTB_step_${i}`,
                        scrub: 1,
                        // markers: true,
                        start: `80% 90%`,
                        end: `100% 90%`,
                    }
                })

            }
        },
        { scope: app }
    )


    return (
        <div className='HTB' ref={app}>
            <HTB_decor />
            <div className='HTB_header'>
                <TextFromSpans text="HOW TO BUY" />
            </div>
            <div className="HTB_step HTB_step_1">
                <div className='HTB_step_header'>
                    <div className='HTB_step_header_num'>
                        1
                    </div>
                    <div className='HTB_step_header_name'>
                        Download wallet
                    </div>
                </div>
                <div className='HTB_step_content'>
                    Download phantom wallet or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to phantom.com.
                </div>
            </div>
            <div className="HTB_step HTB_step_2">
                <div className='HTB_step_header'>
                    <div className='HTB_step_header_num'>
                        2
                    </div>
                    <div className='HTB_step_header_name'>
                        Have SOL
                    </div>
                </div>
                <div className='HTB_step_content'>
                    Have SOL in your wallet to switch to $CRABY. If you don't have any SOL, you can buy directly on Phantom wallet, transfer from another wallet, or buy on another exchange and send it to your wallet.
                </div>
            </div>
            <div className="HTB_step HTB_step_3">
                <div className='HTB_step_header'>
                    <div className='HTB_step_header_num'>
                        3
                    </div>
                    <div className='HTB_step_header_name'>
                        Connect to Jupiter
                    </div>
                </div>
                <div className='HTB_step_content'>
                    Go to jup.ag in google chrome or on the browser inside your Phantom app. Connect your wallet. Paste the $CRABY token address into Jupiter, select $CRABY, and confirm. When Phantom prompts you for a wallet signature, sign.
                </div>
            </div>
            <div className="HTB_step HTB_step_4">
                <div className='HTB_step_header'>
                    <div className='HTB_step_header_num'>
                        4
                    </div>
                    <div className='HTB_step_header_name'>
                        Swap SOL for $CRABY
                    </div>
                </div>
                <div className='HTB_step_content'>
                    We have ZERO taxes so you don't need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.
                </div>
            </div>
        </div>
    )
}