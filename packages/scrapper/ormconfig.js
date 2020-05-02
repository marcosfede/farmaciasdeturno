module.exports = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: process.env.NODE_ENV !== 'production',
  entities: ['src/**/*.entity.ts'],
}
