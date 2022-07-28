const mongoose = require('mongoose')

const connectDatabase = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })


    mongoose.connection.once('open', () => {
        console.log("Connected to MongoDB")
    });
    mongoose.connection.on('error', (error) => {
        console.log(`error:${error}`)
    });

}

module.exports = connectDatabase ;