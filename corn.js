const cron = require('node-cron');

cron.schedule('59 * * * * *', () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  console.log(`Time is ${hour}:${minute} "running a task every minute"`);
  console.log('Welcome To LeewayHertz');
});

