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
      user: 'root',
      password: '', //
      port: 3306,
      database: 'shopping',
      host: '127.0.0.1'
    },
    seeds: {
      directory: './seed'
      
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      // url : process.env.DATABASE_URL,
      database: process.env.DATABASE,
      host: process.env.DB_HOST,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory : './migrations'
    },
         seeds: {
      directory: './seed'
    }
  }

};

