export default {
  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'Brown@55',
      database: 'raven',
    },
    migrations: {
      directory: './db/migration',
    },
    seeds: {
      directory: './db/seeds',
    },
  },

  staging: {
    client: 'mysql2', 
    connection: {
      host: '127.0.0.1', 
      user: 'your_staging_user', 
      password: 'your_staging_password', 
      database: 'staging_db_name', 
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './db/migration',
    },
    seeds: {
      directory: './db/seeds', 
    },
  },

  production: {
    client: 'mysql2', 
    connection: {
      host: 'your_production_host', 
      user: 'your_production_user', 
      password: 'your_production_password', 
      database: 'your_production_db_name', 
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './db/migration', 
    },
    seeds: {
      directory: './db/seeds', 
    },
  },
};
