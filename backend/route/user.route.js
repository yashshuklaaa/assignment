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
            distict,
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
            distict,
            nativeDistrict,
            occupation,
            yourName)
        const user = User.create({
            fullName,
            sonOfName,
            email,
            number,
            gender,
            currentAddress,
            address,
            country,
            state,
            distict,
            nativeDistrict,
            occupation,
            yourName,

        })
        return res.status(200).json({ status: 'Success', user: user })

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

export default Router;