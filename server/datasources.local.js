module.exports = {
  fileStorageDS: {
    root: "./upload",
    acl: 'public-read',
    allowedContentTypes: ['image/jpg', 'image/jpeg'],
    maxFileSize: 5 * 1024 * 1024,
    getFilename: function(fileInfo) {
      var fileName = fileInfo.name.replace(/\s+/g, '-').toLowerCase();
      return 'image-' + new Date().getTime() + '-' + fileName;
    }
  }
}
