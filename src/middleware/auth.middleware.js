//? Proteger rutas para que solo usuarios con login activo puedan hacer peticiones
//? Desencriptar el token y agregarlo a req.user

const passport = require('passport')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const { findUserById } = require("../users/users.controllers")

const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey : 'asd' //TODO deberia ser una variable de entorno
}

passport.use(
    new JwtStrategy(options, async (tokenDecoded, done) => {
        try {
            const user = await findUserById(tokenDecoded.id)
            if(user){
                return done(null, tokenDecoded)
            } else {
                return done(null, false)
            }
        } catch (error) {
            return done(error, false)
        }   
    })
)


module.exports = passport