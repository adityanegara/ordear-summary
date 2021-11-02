import styles from './Card.module.css';
import musicLogo from '../../assets/icons/icon-music.svg';
const Card = () =>{
    return(
        <div className={styles['card']}>
            <div className={styles['card-header']}></div>
            <div className={styles['card-content']}>
                <h1>Order Summary</h1>
                <h2>
                    You can now listen to millions of songs, 
                    audiobook, and podcast on any device 
                    anywhere you like!
                </h2>
            </div>
            <div className={styles['card-plan']}>
                <div className={styles['icon']}>
                    <img src={musicLogo}></img>
                </div>
                <div className={styles['flex-column']}>
                    <p>Annual Plan</p>
                    <p>$59.99/year</p>
                </div>
                <div className={styles['change-button']}>
                    <button>
                        Change
                    </button>
                </div>
            </div>
            <div className={styles['button-groups']}>
                <button className={styles['proceed-button']}>
                    Proceed to Payment
                </button>
                <button className={styles['cancel-button']}>
                    Cancel Order
                </button>
            </div>
        </div>
    )
}

export default Card;