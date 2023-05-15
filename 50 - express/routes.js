import { homePage } from './controllers/homeController.js'
import { contactPage } from './controllers/contactController.js'
import express from 'express'

export const router = express.Router()

router.get('/', homePage)
router.get('/contato', contactPage)

// router.post('/', (req, res) => {
//     console.log(req.body.cep, 'cep aqui')
// })