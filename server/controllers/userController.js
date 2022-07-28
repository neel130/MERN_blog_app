const User = require("../models/UserModel");



// UPDATE PROFILE 

exports.updateUser = async (req, res) => {
    const { id, username, email } = req.body
    try {
        const data = await User.findByIdAndUpdate(id, {
            $set: {
                username,
                email
            },
        }, {
            new: true
        })
        return res.status(200).json(data)
    } catch (error) {
        console.log("error" + error)
    }
}