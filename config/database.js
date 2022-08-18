module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'smart-health_db'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'smart-health'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'root'),
    },
    debug: false,
  },
});