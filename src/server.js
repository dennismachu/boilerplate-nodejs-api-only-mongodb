import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors';

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(bodyParser.text())
app.use(morgan('dev'))
app.use(cors())

/**
 * Initiate the Routes
 * All Routes to beigin with /api/v1/{the routes}
 */
const router = express.Router();
app.use('/api/v1', router);

/**
 * The Routes
 */

// Default Route
router.get('/',(req, res, next) =>{
    res.status(200).json({
        success: true,
        message:"Welcome to Node.js Rest API Boiler Plate",
        author: 'Dennis Machu',
        github: 'https://github.com/dennismachu',
        linkedin:'https://linkedin.com/in/dennismachu'
    })
})

// Routes
// import {route name} from '{route path}'
// {route name}(router)

module.exports = app
