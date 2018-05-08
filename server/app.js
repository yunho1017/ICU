const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
const PORT = process.env.PORT || 8080;
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express');
app.set('port', PORT);

const auth = require('./routes/account/index');
const subejct = require('./routes/subject/index');

// const options = {
//   swaggerDefinition: {
//     info: { 
//       title: 'I check U', 
//       version: '1.0.0', // Version (required)
//       description: 'A sample API', // Description (optional)
//     }
//   },
//   apis: ['./api/swagger.yaml'],
// }

// const swaggerSpec = swaggerJSDoc(options);
// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/static', express.static(__dirname + '/../frontend/build/static'));
app.use('/api', require('./routes'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'frontend', 'build', 'index.html'))
})
app.listen(app.get('port'), function () {
  console.log('Example app listening on' + app.get('port') + 'port');
})