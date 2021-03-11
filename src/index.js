require('dotenv').config();
import configFile from './config/configFile'
import {database} from './config/database'
const app = require('./server')

const port = configFile.PORT || 3000
// database()
app.listen(port, async () => {
  await database()
  console.log(`Service listening at http://localhost:${port}`)
})