const User = require("../models/model")

const home = (req, res) => {
    res.status(200).send("Hi from server")
}

const addUser = async(req, res) => {
    const { name, email, title, password } = req.body
    const newUser = new User({
        name: name,
        email: email,
        title: title,
        password: password
    })

    try {
        await newUser.save()
        res.status(200).send({ message: "User added Successfully" })
    } catch (error) {
        res.status(500).send({ message: "User doesn't store" })
    }
}

const getuserAll = async(req, res) => {
    try {
        const userData = await User.find({})
        if (!userData) {
            return res.status(404).send({ message: "User not Found" })
        }

        return res.status(200).json(userData)
    } catch (error) {
        res.status(500).send({ message: "User doesn't exist" })
    }


}

const getOne = async(req, res) => {
    const id = req.params.id
    try {
        const userExist = await User.findById(id)
        if (!userExist) {
            return res.status(404).send({ message: "User not Found" })
        }
        return res.status(200).json(userExist)
    } catch (error) {
        return res.status(500).json({ message: error })
    }

}

const update = async(req, res) => {
    const id = req.params.id
    try {
        const userExist = await User.findById(id)
        if (!userExist) {
            return res.status(404).send({ message: "user not found" })
        }
        const updatData = await User.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({ message: "user updated succesfully" })
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

const deleteUser = async(req, res) => {
    const id = req.params.id
    try {
        const userExist = await User.findById(id)
        if (!userExist) {
            return res.status(404).send({ message: "user not found" })
        }

        await User.findByIdAndDelete(id)
        return res.status(200).json({ message: "User deleted succesfully" })
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

module.exports = { home, addUser, getuserAll, getOne, update, deleteUser }