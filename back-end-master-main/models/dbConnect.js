const mongoose = require('mongoose');
const mongoAtlasUri =
    "mongodb+srv://minh15:Minlvip123@cluster0.x1k9j.mongodb.net/?retryWrites=true&w=majority";

try {
    // Connect to the MongoDB cluster]


    mongoose.connect(
        mongoAtlasUri,
        { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'shop' },
        () => console.log(" Mongoose is connected"),
    );

} catch (e) {
    console.log("could not connect");
}




module.exports = mongoose;