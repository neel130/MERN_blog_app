const User = require("../models/UserModel")
const bcrypt = require('bcryptjs')



// SIGNUP

exports.signupUser = async (req, res) => {
    const { username, email, password, profilePic } = req.body

    try {
        if (!username || !email || !password) {
            return res.status(400).json({ error: "please add all fields" })
        }
        const savedUser = await User.findOne({ email })
        if (savedUser) {
            return res.status(400).json({ error: "user already exist" })
        }
        const salt = bcrypt.genSaltSync(10);
        const hashedpassword = bcrypt.hashSync(password, salt)
        const user = await User.create({
            username,
            email,
            password: hashedpassword,
            profilePic
        })
        return res.status(201).json({ success: "signup Successful", user })

    } catch (error) {
        console.log("error:" + error)
    }
}



// LOGIN 

exports.loginUser = async (req, res) => {
    const { email, password } = req.body

    try {

        if (!email || !password) {
            return res.status(400).json({ error: "please add all fields" })
        }
        const savedUser = await User.findOne({ email })
        if (!savedUser) {
            return res.status(401).json({ error: "invalid credential" })
        }
        const pwsdMatch = bcrypt.compareSync(password, savedUser.password);
        if (!pwsdMatch) {
            return res.status(401).json({ error: "invalid credential" })
        } else {
            return res.status(202).json({ success: "Login Successful", user: savedUser })
        }

    } catch (error) {
        console.log("error:" + error)
    }
}


