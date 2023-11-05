const config = {
  port: process.env.PORT || 3000,
  secretKey: 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5ODYxNjQ0OCwiaWF0IjoxNjk4NjE2NDQ4fQ.kV1eVZorE609dRMi1TkZAkRe3U7Duj7QRz0lN__P7Pk', //'test-secret-key',
  db: {
    host: 'o9evix.stackhero-network.com',
    user: 'root',
    password: 'QF5DDGazjx1vOLbjPw7b5XirpaiBefI2',
    database: 'tasklist',
  },
};

module.exports = config;