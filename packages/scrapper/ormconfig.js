const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_HOST, NODE_ENV } = process.env

module.exports = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: true,
  logging: NODE_ENV !== 'production',
  entities: ['src/**/*.entity.ts'],
}