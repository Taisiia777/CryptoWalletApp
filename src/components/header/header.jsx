import styles from './header.module.css'

export const Header = ({User}) => {
    return (
        <div className={styles.header}>
            <div className={styles.header__logo}/>
            <p className={styles.header__title}>
                {User.name}
            </p>
        </div>
    )
}

export default Header;