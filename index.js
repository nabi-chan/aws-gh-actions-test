const AWS = require('aws-sdk');

const upload = new AWS.S3.ManagedUpload({
  params: {
    // 버킷의 이름
    Bucket: "nabi-ec2-s3-test",
    // 객체의 이름
    Key: "test.txt",
    // 객체의 본문
    Body: "Hello, World!",
  }
});

upload
  .promise()
  .then(() => console.log("success"))
  .catch(console.error)
