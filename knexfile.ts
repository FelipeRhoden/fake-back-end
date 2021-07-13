// Update with your config settings.

export default {

  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/db.sqlite3"
    },
    migrations:{
      directory: "./src/database/migrations"//direório das migrations
    },
    useNullAsDefault: true,//inserções sem valor no banco recebem o valor null
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/database/migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/database/migrations"
    }
  }

};
