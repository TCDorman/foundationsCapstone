require('dotenv').config()
const Sequelize = require('sequelize')

const{CONNECTION_STRING} = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
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

    getFromChestAndTris: (req, res) =>{
        sequelize.query(`
        SELECT * FROM chest_and_tri
        `)
        
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    }, 

    getFromLegs: (req, res) => {
        sequelize.query(`
        SELECT * FROM legs
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    getFromBackAndBis: (req, res) => {
        sequelize.query(`
        SELECT * FROM back_and_bis
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    }
}