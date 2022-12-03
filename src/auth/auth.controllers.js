const { getUserByEmail } = require('../users/users.controllers')
const { comparePassword } = require('../utils/crypto')


const checkUserCredentials = async(email, password) => {
    try {
        const user = await getUserByEmail(email)
        const verifyPassword = comparePassword(password, user.password)
        if(verifyPassword){
            return user
        }
        return null
    } catch (error) {
        return null
    }
}

module.exports = checkUserCredentials //? export default


