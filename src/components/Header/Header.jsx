import styles from './Header.module.css'
import UserContext from "../../Contexts/UserContext.js";
import {useContext} from "react";
export const Header = () => {
    const {User} = useContext(UserContext)
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