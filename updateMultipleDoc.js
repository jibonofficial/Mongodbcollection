const {client}= require("./dbconfig.js")

const updateMultipleDoc=async()=>{
    try {
        const database = client.db("mongoconnect");
        const haiku = database.collection("users");
        const filter = { city: "Dhaka" };
        const updateDoc = {
            $set: {
              country: "Bangladesh"
            },
          };
          const result = await haiku.updateMany(filter, updateDoc);
          console.log(
           "Updated"
          );

    } catch (error) {
        
    } finally {
        await client.close();
    }
}
updateMultipleDoc();