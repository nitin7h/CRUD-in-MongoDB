const mongoose = require("mongoose")


async function dbConnection(url) {
    mongoose.connect(url).then(() => {
        console.log("Database Connected Successfully..");
    }).catch((err) => {
        console.log("database Connectetion Failed : ", err);
    })
}

module.exports = { dbConnection }