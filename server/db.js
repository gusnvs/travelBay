import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        mongoose.set('strictQuery', false);
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log(`MongoDB Conectado! - ${connect.connection.host}`);
    } catch (error) {
        console.log(`Erro: ${error.message}`);
    }
}

export default connectToDb;