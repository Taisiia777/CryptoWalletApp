import React, {useContext } from 'react';
import RecieveQrCode from "../RecieveQrode/RecieveQrCode.jsx";
import styles from './PopupRecieve.module.css';
import UserContext from "../../Contexts/UserContext.js";

export const PopupRecieve = () => {
    // const { User } = useContext(UserContext);
    // const [selectedWallet, setSelectedWallet] = useState(''); // Initialize selected wallet state
    //
    // const handleButtonClick = (walletOption) => {
    //     setSelectedWallet(walletOption); // Update selected wallet state based on button click
    // };
    //
    // const getWalletAddress = () => {
    //     if (selectedWallet === 'btc') {
    //         return User.walletAdressBtc;
    //     } else if (selectedWallet === 'eth') {
    //         return User.walletAdressEth;
    //     } else if (selectedWallet === 'sol') {
    //         return User.walletAdressSol;
    //     } else if (selectedWallet === 'doge') {
    //         return User.walletAdressDoge;
    //     } else {
    //         return ''; // Default to empty string if no wallet is selected
    //     }
    // };

    return (
        <div className={styles.layout}>
            <div className={styles.container}></div>
            <div className={styles.formContaiter}>
                <h1 className={styles.formTitle}>Your address</h1>
                {/*<div className={styles.btnContainer}>*/}
                {/*    <button*/}
                {/*        className={`${styles.btn} ${selectedWallet === 'btc' ? styles.active : ''}`}*/}
                {/*        onClick={() => handleButtonClick('btc')}*/}
                {/*    >*/}
                {/*        btc*/}
                {/*    </button>*/}
                {/*    <button*/}
                {/*        className={`${styles.btn} ${selectedWallet === 'eth' ? styles.active : ''}`}*/}
                {/*        onClick={() => handleButtonClick('eth')}*/}
                {/*    >*/}
                {/*        eth*/}
                {/*    </button>*/}
                {/*    <button*/}
                {/*        className={`${styles.btn} ${selectedWallet === 'sol' ? styles.active : ''}`}*/}
                {/*        onClick={() => handleButtonClick('sol')}*/}
                {/*    >*/}
                {/*        sol*/}
                {/*    </button>*/}
                {/*    <button*/}
                {/*        className={`${styles.btn} ${selectedWallet === 'doge' ? styles.active : ''}`}*/}
                {/*        onClick={() => handleButtonClick('doge')}*/}
                {/*    >*/}
                {/*        doge*/}
                {/*    </button>*/}
                {/*</div>*/}

                <RecieveQrCode walletAdress={"bc1qu9sl2zyx0z5u23rsxcxug3ylc4pxackvn6p9x0"} />
            </div>
        </div>
    );
};

export default PopupRecieve;