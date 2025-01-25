import { useEffect, useState } from 'react';
import './scss/Hero.scss';
import TextFromSpans from './TextFromSpans';
export default ({ play, setplay }) => {
    const [music, setmusic] = useState(false);
    useEffect(() => {
        setmusic(play)
    }, [play])

    useEffect(() => {
        setplay(music)
    }, [music])
    return (
        <div className='Hero'>
            <div className='Hero_top'>
                <div className="Hero_clouds free_img">
                    <div className="Hero_clouds_left1 free_img">
                        <img src="/img/cloudLeft1.png" alt="" />
                    </div>
                    <div className="Hero_clouds_left2 free_img">
                        <img src="/img/cloudLeft2.png" alt="" />
                    </div>
                    <div className="Hero_clouds_left3 free_img">
                        <img src="/img/cloudLeft3.png" alt="" />
                    </div>
                    <div className="Hero_clouds_right1 free_img">
                        <img src="/img/cloudRight1.png" alt="" />
                    </div>
                    <div className="Hero_clouds_right2 free_img">
                        <img src="/img/cloudRight2.png" alt="" />
                    </div>
                    <div className="Hero_clouds_right3 free_img">
                        <img src="/img/cloudRight3.png" alt="" />
                    </div>
                </div>
                <div className='Hero_header'>
                    <TextFromSpans text="$CRABY" noAnim />
                </div>
                <div className='Hero_subheader textShadowAndBorder'>
                    CRABY the Crab in "The Nightriders" by Matt Furie, the artist behind Pepe
                </div>
                <div className='Hero_btn_wrapper Hero_btn_top free_img'>
                    <a href='https://raydium.io/swap/?inputMint=sol&outputMint=BQhiGezMhTtrwoDkdosWvkjGzL5SJ4D7gqb1fjmc673J' target='_blank' className='Hero_btn textShadowAndBorder'>
                        BUY $CRUBY
                    </a>
                </div>
            </div>
            <div className='Hero_bot'>
                <div className="Hero_island free_img">
                    <img src="/img/island.webp" alt="" />
                </div>
                <div className={`Hero_music ${music && 'Hero_music_active'} free_img`} onClick={() => { setmusic(!music) }}>
                    <img src="/img/sound.png" alt="" />
                </div>
                {/* <audio src=""></audio> */}
                <div className='Hero_btn_wrapper Hero_btn_bot free_img'>
                    <a href='https://raydium.io/swap/?inputMint=sol&outputMint=BQhiGezMhTtrwoDkdosWvkjGzL5SJ4D7gqb1fjmc673J' target='_blank' className='Hero_btn textShadowAndBorder'>
                        BUY $CRUBY
                    </a>
                </div>
            </div>
        </div>
    )
}