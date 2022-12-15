const {client}= require("./dbconfig.js")

const delSingleDoc=async()=>{
    try {
        const database = client.db("mongoconnect");
        const haiku = database.collection("users");
        const query = { city: "Dhaka" };
        const result = await haiku.deleteOne(query);

        if (result.deletedCount === 1) {
    
          console.log("Successfully deleted one document.");
    
        } else {
    
          console.log("No documents matched the query. Deleted 0 documents.");
    
        }

    } catch (error) {
        
    } finally {
        await client.close();
    }
}
delSingleDoc();