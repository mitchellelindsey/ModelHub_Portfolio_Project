const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const createUser = async function(req, res) {
    try {
        let {firstName, lastName, username, email, password} = req.body

        if (!firstName || !lastName || !username || !email || !password)
            return res.status(400).json({message: 'One of the values you provided is incorrect'})

        if (typeof firstName !== 'string' || typeof lastName !== 'string' || typeof username !== 'string' || typeof email !== 'string' || typeof password !== 'string')
            return res.status(400).json({message: 'One of the values you provided is invalid, it should be a string'})

        const findExistingUser = await User.findOne({email, username})
        if (findExistingUser) return res.status(400).json({message: 'The user already exists'})

        password = await bcrypt.hash(password, 10)
        
        const user = await User.create({firstName, lastName, username, email, password})
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'})

        res.status(201).json({token})

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getUser = async function(req, res) {
    try {
        let {email, password} = req.body

        if (!email || !password)
            return res.status(400).json({message: 'One of the values you provided is incorrect'})

        if (typeof email !== 'string' || typeof password !== 'string')
            return res.status(400).json({message: 'One of the values you provided is invalid, it should be a string'})

        const currentUser = await User.findOne({email})
    
        password = bcrypt.compare(password, currentUser.password)
        
        // const token = jwt.sign({userId: currentUser._id}, process.env.JWT_SECRET)

        res.status(200).json({token})

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const userProfile = async function(req, res) {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const userId = decoded.userId

        const userProfile = await User.findById(userId).select('-password') // Exclude password from the response

        if (!userProfile) return res.status(404).json({ message: 'User not found' })

        res.status(200).json({ user: userProfile })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
    
module.exports = {createUser, getUser, userProfile}
