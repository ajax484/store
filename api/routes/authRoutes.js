const express = require('express')
const router = express.Router()
const { registerUser, updateUser, loginUser, logoutUser, refreshUserSession } = require('../controllers/authControllers')

router.post('/register', registerUser) // route to register user

router.patch('/update', updateUser) // route to update user

router.post(`/login`, loginUser) //route to login user

router.delete(`/logout`, logoutUser) //route to logout user

router.get('/isAuth', refreshUserSession) // route to refresh sessions

module.exports = router