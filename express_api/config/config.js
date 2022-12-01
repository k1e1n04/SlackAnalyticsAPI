module.exports = {
    "development": {
        "username": process.env.MYSQL_USER,
        "password": process.env.MYSQL_PASSWORD,
        "database": process.env.DB_NAME,
        "host": "db",
        "dialect": "mysql"
      },
      "test": {
        "username": process.env.MYSQL_USER,
        "password": process.env.MYSQL_PASSWORD,
        "database": process.env.DB_NAME,
        "host": "db",
        "dialect": "mysql"
      },
      "production": {
        "username": process.env.MYSQL_USER,
        "password": process.env.MYSQL_PASSWORD,
        "database": process.env.DB_NAME,
        "host": "db",
        "dialect": "mysql"
      }
};