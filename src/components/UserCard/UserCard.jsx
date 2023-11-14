import styles from './UserCard.module.css'
export const UserCard = ({User}) => {
    return (
        <div className={styles.userCardContainer}>
            <div className={styles.userCardImage}/>
            <p className={styles.userCardMoney}>
                {Intl.NumberFormat('ru-RU',{
                    style: 'currency',
                    currency: 'USD'
                }).format(User.money)}
            </p>

        </div>
    )
}

export default UserCard;