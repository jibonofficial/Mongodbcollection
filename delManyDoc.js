const {client}= require("./dbconfig.js")

const delManyDoc=async()=>{
    try {
        const database = client.db("mongoconnect");
        const haiku = database.collection("users");
        const query = { city: "Dhaka" };
        const result = await haiku.deleteMany(query);

        if (result.deletedCount === 1) {
    
            console.log("Deleted " + result.deletedCount + " documents");
    
        }

    } catch (error) {
        
    } finally {
        await client.close();
    }
}
delManyDoc();