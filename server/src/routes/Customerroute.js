const express =require('express')
const {getallCustomer,getProfile} = require('../controller/Customercontroller')
const router =express.Router()
const {auth,adminonly} = require('../middileware/auth')



router.get('/allCustomer',auth,adminonly,getallCustomer)
router.get('/profile',auth,getProfile)


module.exports=router  