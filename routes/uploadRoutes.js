const AWS = require('aws-sdk');
const keys = reqiuire('../config/keys.js');

const s3 = new AWS.S3({
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey,
});

module.exports = app => {
  app.get('/api/upload', (req, res) => {});
};
