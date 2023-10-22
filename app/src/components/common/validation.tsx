import { IUser } from "../../interfaces"
import { isValidEmail } from "./SharedHelper"

const validateUserLogin = (user: IUser) => {
    if (!user.email) {
        return `Enter your email address`
    }
    if (!user.password) {
        return `Enter your password`
    }
    return undefined
}

const validateUserRegistration = (user: IUser) => {
    if (!user.name) {
        return 'Enter your name'
    }

    if (!user.email) {
        return 'Enter your email'
    }

    if (user.email) {
        if (!isValidEmail(user.email)) {
            return 'Please enter a valid email'
        }
    }

    if (!user.password) {
        return 'Enter password'
    }
    return undefined
}

export { validateUserLogin, validateUserRegistration }