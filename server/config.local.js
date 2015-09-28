module.exports = {
  cloudStoreImages: {
    s3: {
      bucket: process.env.AWS_S3_BUCKET || 'YOUR_BUCKET_NAME',
      region: process.env.AWS_S3_REGION || 'YOUR_S3_REGION',
      accessKeyID: process.env.AWS_S3_ACCESS_KEY_ID || 'YOUR_S3_ACCESS_KEY_ID',
      secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY || 'YOUR_S3_SECRET_ACCESS_KEY'
    }
  }
}
