const jwt = require("jsonwebtoken");

const generateToken = (email) => {
    return jwt.sign({email},"hello",{expiresIn:"30d"})
}

module.exports=generateToken;