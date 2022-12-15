const {client}= require("./dbconfig.js")

const findSingleDoc=async()=>{
    try {
        const database = client.db("mongoconnect");
        const haiku = database.collection("users");
        const query = { city: "Dhaka" };
        const result = await haiku.findOne(query);
        console.log(result);

    } catch (error) {
        
    } finally {
        await client.close();
    }
}
findSingleDoc();