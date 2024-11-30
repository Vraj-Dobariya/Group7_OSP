const jwt = require("jsonwebtoken");

const generateToken = (data) => {
    return jwt.sign(data,"hello",{expiresIn:"30d"})
}

module.exports=generateToken;