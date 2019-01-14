import * as schedule from 'node-schedule'
import { run } from './scrapper'

console.log('scheduling job...')
const job = schedule.scheduleJob('0 9 * * *', (fireDate) => {
  console.log('running scrapper, scheduled at: ', fireDate)
  run()
})
