import axios from "axios";
export const getInfo = async(link) => {
    const response = await axios.get(link)
    const data = response.data;

    return data;
}

export default getInfo;