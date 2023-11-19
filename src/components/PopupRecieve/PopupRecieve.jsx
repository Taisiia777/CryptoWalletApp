import styles from './PopupRecieve.module.css';
import RecieveQrCode from '../RecieveQrode/RecieveQrCode.jsx';
import { useContext, useState, useEffect } from 'react';
import UserContext from '../../Contexts/UserContext.js';

export const PopupRecieve = () => {
    const { User } = useContext(UserContext);

    const [walletType, setWalletType] = useState('btc');
    const [walletAddress, setWalletAddress] = useState(''); // Initialize walletAddress

    useEffect(() => {
        switch (walletType) {
            case 'btc':
                setWalletAddress(User.walletAdressBtc);
                break;
            case 'eth':
                setWalletAddress(User.walletAdressEth);
                break;
            default:
                setWalletAddress('');
        }
    }, [walletType]); // Update walletAddress when walletType changes

    return (
        <div className={styles.container}>
            <div className={styles.formContaiter}>
                <h1 className={styles.formTitle}>Your {walletType} address</h1>

                <button onClick={() => setWalletType('btc')}>btc</button>
                <button onClick={() => setWalletType('eth')}>eth</button>

                <RecieveQrCode walletAdress={walletAddress} />
            </div>
        </div>
    );
};

export default PopupRecieve;