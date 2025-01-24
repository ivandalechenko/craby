import './Fishes.scss';
export default () => {
    return (
        <div className='Fishes'>
            <div className="free_img Fishes_sq_wrapper">
                <img src="/img/fish1.png" className='Fishes_sq' alt="" />
            </div>
            <div className="free_img Fishes_hish_wrapper">
                <img src="/img/fish2.png" className='Fishes_hish' alt="" />
            </div>
            <div className="free_img Fishes_tr_wrapper">
                <img src="/img/fish3.png" className='Fishes_tr' alt="" />
            </div>
        </div>
    )
}