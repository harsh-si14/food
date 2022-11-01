import {fetchUser} from "../utils/fetchLocalStoregData"
const userInfo = fetchUser()



export const initalState = {
    user : userInfo ,

};