import styles from './UserCard.module.css'
import UserCardButtonList from "../UserCardButtonList/UserCardButtonList.jsx";
import UserContext from "../../Contexts/UserContext.js";
import {useContext} from "react";
export const UserCard = () => {
    const {User} = useContext(UserContext)
    return (
        <div className={styles.userCardContainer}>
            <div className={styles.userCardImage}/>
            <p className={styles.userCardMoney}>
                {Intl.NumberFormat('en-US',{
                    style: 'currency',
                    currency: 'USD',
                    currencyDisplay: 'symbol',
                    negativeFormat: '($0.00)',
                }).format(User.money)}
            </p>
            {User.profit > 0 && (
                <div className={styles.profitContainer}>
                    <div className={styles.upIcon} />

                    <p className={styles.profitText}>
                        {User.profit * 100}%
                    </p>
                </div>
            )}
            <UserCardButtonList/>
        </div>
    )
}

export default UserCard;