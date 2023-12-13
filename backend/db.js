const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://nilay2103:Arkham%40123@clusterfoode.er6sszz.mongodb.net/FoodEmern?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');

        // const fetched_data = await mongoose.connection.db.collection("food_items");
        // const data = await fetched_data.find({}).toArray();
        // console.log(data);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

module.exports = mongoDB;
