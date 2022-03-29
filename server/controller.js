require('dotenv').config()
const{DATABASE_URL} = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres', 
    dialectOptions:{
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    getFromShoulders: (req, res) =>{
        sequelize.query(`
        SELECT * FROM shoulders;
        `)
        
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    getFromChestAndTri: (req, res) =>{
        sequelize.query(`
        SELECT * FROM chest_and_tri
        `)
        
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    }, 

    getFromLegs: (req, res) => {
        sequelize.query(`
        SELECT * FROM leg_day
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    getFromBackAndBi: (req, res) => {
        sequelize.query(`
        SELECT * FROM back_and_bi
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    }
}