import styles from './UserCardButton.module.css'
import {useState, useEffect} from "react";
export const UserCardButton = ({title, image, renderPopup}) => {
    const [clicked, setClick] = useState(false)
        useEffect(() => {
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    setClick(false);
                }
            });
        }, []);
    return (
        <div className={styles.container}>
            <img onClick={e => setClick(!clicked)} className={styles.image} src={image} alt={title}/>
            <p className={styles.text}>
                {title}
            </p>
            {clicked && renderPopup && renderPopup()}
        </div>
    )
}

export default UserCardButton;