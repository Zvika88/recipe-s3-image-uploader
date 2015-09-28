# IBM StrongLoop Recipe 
# Image Upload and Manipulation using S3

This IBM StrongLoop recipe answers the often asked question of:  **"Using LoopBack, how can I convert or resize an image to a thumbnail before uploading to Amazon S3?"**

## About this Recipe

This recipe demonstrates the following:
- Customization of the LoopBack [loopback-component-storage](https://github.com/strongloop/loopback-component-storage) module;
- Usage of the LoopBack [configuration](https://docs.strongloop.com/display/public/LB/Environment-specific+configuration) files;
- Usage of the [Winston](https://github.com/winstonjs/winston) logging module;
- Customization of the LoopBack [BootScripts](https://docs.strongloop.com/display/public/LB/Defining+boot+scripts)

## Installing the Recipe
Clone this recipe project:

    $ git clone <this project>
 
Inside your LoopBack project, install all the NPM dependencies:

    $ npm install 
    
## Configuring the Recipe

By default, this recipe assumes that the user has an [Amazon S3](https://aws.amazon.com/s3/) account.  To run the example you will need to provide your `s3 bucket name`, `s3 region`, `s3 access key` and `s3 secret access key`.

These values can be set in the projects `server/config.local.js` file or as `environment varables`:
    
    $ export AWS_S3_BUCKET = YourS3BucketName
    $ export AWS_S3_REGION = YourS3RegionName
    $ export AWS_S3_ACCESS_KEY_ID = YourS3AccessKeyID
    $ export AWS_S3_SECRET_ACCESS_KEY = YourS3SecretAccessKey

## Running the Recipe

- **Step 1:** Start the LoopBack API project.

        $ node ./server/server.js

- **Step 2:** Launch the API Explorer at `http://localhost:3000/explorer` to view the available action.

- **Step 3:** Create a container that will receive the uploaded image.

        $ curl -i -X POST -H "Content-Type:  application/json" -d '{"name":"recipe"}' http://localhost:3000/api/CloudStoreImages

- **Step 4:** Upload the image.

        $ curl -i -X POST -H "Content-Type:  multipart/form-data"  -F "fileUpload=@./sample/sample.jpg" http://localhost:3000/api/CloudStoreImages/recipe/upload

- **Step 5:** Observe that the original image, along with three other resized images were uploaded to your S3 bucket.The images were uploaded into a directory matching the name of the Container you created in **Step 2**.  
The number of resized images, and unique suffixes, are defined in the `server/config.json` file.  Check for the `cloudStoreImages` object.

##### Version
1.0.0

##### License
MIT

##### Intial Author
Dennis W. Ashby