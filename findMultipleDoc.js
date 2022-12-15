const {client}= require("./dbconfig.js");

const findMultipleDoc=async()=>{
    try {
        const database = client.db("mongoconnect");
        const haiku = database.collection("users");
        const query = { city: "Dhaka" };
        const cursor = haiku.find(query);
        if ((await cursor.EstimatedDocumentCount) === 0) {

            console.log("No documents found!");
      
          } else{
            const users = await cursor.toArray();
            await users.forEach(user=>console.log(user));
          }
    } catch (error) {
        console.log(error);
        
    } finally {
        await client.close();
    }
}
findMultipleDoc();