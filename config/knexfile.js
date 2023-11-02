// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './dev.sqlite3'
  //   },
  //     seeds: {
  //     directory: './seed'
      
  //   },
  //   useNullAsDefault: true, // Required for SQLite

  // },

    // MongoDB configuration
    mongo: {
      uri: 'mongodb+srv://kojoyeboah53i:saints_salvation2@cluster0.sk4iy96.mongodb.net/shopping?retryWrites=true&w=majority', // Replace with your MongoDB URI
    },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  
  development: {
    client: 'mysql',
    connection: {
      user: 'zgvczavznaakan',
      password: '0e5ca56e187d4cb5bee8f4abd8701b67331e8ece9f6b85d7b48bbd2f5ae6184c', //
      port: 5432,
      database: 'd8npj184tpf03d',
      host: 'ec2-52-205-55-36.compute-1.amazonaws.com'
    },
    migrations: {
      directory : './migrations'
    },
    seeds: {
      directory: './seed'
      
    }
  },


};

