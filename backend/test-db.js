const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URI;

if (!uri) {
    console.error('CRITICAL: MONGO_URI is missing from process.env');
    console.log('Current directory:', __dirname);
    process.exit(1);
}

console.log('DB CONNECTION TEST');
console.log('URI Start:', uri.substring(0, 30));
console.log('URI Length:', uri.length);

mongoose.connect(uri)
    .then(() => {
        console.log('SUCCESS: Connection established!');
        process.exit(0);
    })
    .catch((err) => {
        console.error('FAILURE ERROR:', err.code || 'NO_CODE');
        console.error('MESSAGE:', err.message);
        process.exit(1);
    });
