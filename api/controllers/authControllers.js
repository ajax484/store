const User = require('../models/User')
const bcrypt = require('bcrypt')

const registerUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password)
        return res.status(400).json({ msg: 'Password and email are required' })

    if (password.length < 8) {
        return res.status(400).json({ msg: 'Password should be at least 8 characters long' })
    }

    const user = await User.findOne({ email })
    if (user) return res.status(400).json({ msg: 'User already exists' })

    const newUser = new User({ email, password })
    bcrypt.hash(password, 7, async (err, hash) => {
        if (err)
            return res.status(400).json({ msg: 'error while saving the password' })

        newUser.password = hash
        const savedUserRes = await newUser.save()

        if (savedUserRes)
            return res.status(200).json({ msg: 'user is successfully saved' })
    })
}

const updateUser = async (req, res) => {
    const { _id, fname, lname, address, is_home_address} = req.body;
}

const loginUser = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) return res.status(400).json({ msg: 'Something missing' })


    const user = await User.findOne({ email: email }) // finding user in db
    if (!user) return res.status(400).json({ msg: 'User not found' })

    const matchPassword = await bcrypt.compare(password, user.password)
    if (matchPassword) {
        const userSession = { email: user.email } // creating user session to keep user loggedin also on refresh
        req.session.user = userSession // attach user session to session object from express-session

        return res.status(200).json({ msg: 'You have logged in successfully', userSession }) // attach user session id to the response. It will be transfer in the cookies
    } else {
        return res.status(400).json({ msg: 'Invalid credential' })
    }
}

const logoutUser = async (req, res) => {
    req.session.destroy((error) => {
        if (error) throw error

        res.clearCookie('session-id') // cleaning the cookies from the user session
        res.status(200).send('Logout Success')
    })
}

const refreshUserSession = async (req, res) => {
    if (req.session.user) {
        return res.json(req.session.user)
    } else {
        return res.status(401).json('unauthorize')
    }
}

module.exports = { registerUser, updateUser, loginUser, logoutUser, refreshUserSession }