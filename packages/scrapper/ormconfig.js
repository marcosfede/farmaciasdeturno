const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, NODE_ENV } = process.env

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: true,
  logging: NODE_ENV !== 'production',
  entities: ['src/**/*.entity.ts'],
}