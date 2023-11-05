const express = require('express');
const cookieSession = require('cookie-session');
const config = require('./config.js');
var cors = require('cors');

const app = express();
app.use(express.json());
app.use(cookieSession({
  keys: ['session'],
}));
app.use(
  cors({
    credentials: true,
    origin: true
  })
);
app.options('*', cors);

// routes
require('./routes/authRoutes.js')(app);
require('./routes/taskRoutes.js')(app);

app.get('/', (request, response) => response.send('Working!...'));

app.listen(config.port, () => {
  console.log(`Server Listening on PORT: ${ config.port }`);
});