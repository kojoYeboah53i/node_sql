const knex = require('../config/db')

// exports.uploadImage = async (res, req) => {

// }

exports.getProducts = async (res, req) => {
    try {
        const products = await knex('products').select('*');
        if(!products){
            throw new Error('failed to get product from db')
        }
        res.json(products)
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error'); //error
      }
}