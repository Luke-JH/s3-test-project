const { S3Client, ListObjectsV2Command } = require('@aws-sdk/client-s3');
const dotenv = require('dotenv'); // Import the dotenv package

// Load environment variables from the .env file
dotenv.config();

(async function () {
    try {
        // Initialize the S3 client using environment variables
        const s3Client = new S3Client({
            region: 'us-east-1'
            // The SDK will automatically use the credentials from environment variables
        });

        const listObjectsCommand = new ListObjectsV2Command({
            Bucket: '<your-bucket-here>'
        });

        const response = await s3Client.send(listObjectsCommand);

        console.log('this is the response', response);

    } catch (e) {
        console.log('our error', e);
    }
    debugger;
})();
