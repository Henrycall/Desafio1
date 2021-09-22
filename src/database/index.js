const { MongoClient }= require("mongodb");


// Connection URI
const uri = process.env.MONGODB_URL


// Create a new MongoClient
const client = new MongoClient(uri);


let connect = null


/**
 * @function
 * @returns Promise<MongoClient>
 */
exports.connectDatabase = async () => {
    if (connect !== null) return connect
    connect = await client.connect();
    return connect
}


