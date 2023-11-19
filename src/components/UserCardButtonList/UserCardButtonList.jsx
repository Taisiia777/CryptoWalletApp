import styles from './UserCardButtonList.module.css'
import UserCardButton from "../UserCardButton/UserCardButton.jsx";
import buyImage from "../../assets/BuyIcon.svg"
import sellImage from "../../assets/SellIcon.svg"
import convertImage from "../../assets/ConvertIcon.svg"
import sendImage from "../../assets/SendIcon.svg"
import recieveImage from "../../assets/RecieveIcon.svg"
import PopupRecieve from "../PopupRecieve/PopupRecieve.jsx";

export const UserCardButtonList = () => {
    return (
        <div className={styles.userCardButtonListContainer}>
            <UserCardButton title={'Buy'} image={buyImage} />
            <UserCardButton title={'Sell'} image={sellImage} />
            <UserCardButton title={'Convert'} image={convertImage} />
            <UserCardButton title={'Send'} image={sendImage} />
            <UserCardButton title={'Recieve'} image={recieveImage}   renderPopup={PopupRecieve}/>

        </div>
    )
}

export default UserCardButtonList;