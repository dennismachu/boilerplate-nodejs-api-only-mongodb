require('dotenv').config();
module.exports = {
    DB_HOST: process.env.DB_PRO_URL,
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.PORT
};