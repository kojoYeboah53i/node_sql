const knex = require('knex')
require('dotenv').config();
const knexfile = require('./knexfile')

const db = knex(knexfile.development)

async function create_users_table() {
    const tableExists = await db.schema.hasTable('users');
    
        if(!tableExists) {
    
           return db.schema.createTable('shopping', (table) => {
           
                }).then(() => {
                console.log('"shopping" table created');
                });
                }
    }

//     async function create_employees_table() {
//         const tableExists = await db.schema.hasTable('employees');
        
//             if(!tableExists) {
        
//                return db.schema.createTable('employees', (table) => {
//                     table.increments('id').primary();
//                     table.string('name');
//                     table.string('email');
//                     table.string('job_title');
//                     }).then(() => {
//                     console.log(' "employees" table created');
//                     });
//                     }
        // }

create_users_table();
// create_employees_table();




module.exports = db;