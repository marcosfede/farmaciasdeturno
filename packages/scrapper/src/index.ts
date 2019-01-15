import * as schedule from 'node-schedule'
import { run } from './scrapper'

console.log('scheduling job...')
// time is in UTC here... 9AM => 12
const job = schedule.scheduleJob('0 12 * * *', (fireDate) => {
  console.log('running scrapper, scheduled at: ', fireDate)
  run()
})
