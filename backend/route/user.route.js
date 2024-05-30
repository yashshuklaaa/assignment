import connectToDb from "../connectToDb.js"
import express from 'express'
import { User } from "../model/user.model.js"

const Router = express.Router()

Router.post('/user', async (req, res) => {
    connectToDb()
    try {
        const { fullName,
            sonOfName,
            email,
            number,
            gender,
            currentAddress,
            address,
            country,
            state,
            district,
            nativeDistrict,
            occupation,
            yourName } = await req.body
        console.log(fullName,
            sonOfName,
            email,
            number,
            gender,
            currentAddress,
            address,
            country,
            state,
            district,
            nativeDistrict,
            occupation,
            yourName)
        const users = User.create({
            fullName,
            sonOfName,
            email,
            number,
            gender,
            currentAddress,
            address,
            country,
            state,
            district,
            nativeDistrict,
            occupation,
            yourName,

        })
        return res.status(200).json({ status: 'Success', user: users })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

export default Router;