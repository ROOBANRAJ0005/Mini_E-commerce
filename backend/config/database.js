const mongoose = require('mongoose');

const database = ()=>{
    mongoose.connect(process.env.DATABASE).then((con)=>{
        console.log("connected database");
    })
}

module.exports = database;