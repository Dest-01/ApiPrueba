const {connection, connect} = require('mongoose');

const init = async ()=>{
    try{
        await connectMongo();
    }catch(err){
        connection.close();
        throw new Error(`Fail to connect db ${err}`)
    }
}

const connectMongo = async () => {
    await connect(process.env.DB_CONNECT_PROD, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
}
init()
