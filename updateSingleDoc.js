const {client}= require("./dbconfig.js")

const updateSingleDoc=async()=>{
    try {
        const database = client.db("mongoconnect");
        const haiku = database.collection("users");
        const filter = { Name: "Bhashani Hamid Khan" };
        const options = { upsert: true };
        const updateDoc = {
            $set: {
              country: "Bangladesh"
            },
          };
          const result = await haiku.updateOne(filter, updateDoc, options);
          console.log(
           "Updated"
          );

    } catch (error) {
        
    } finally {
        await client.close();
    }
}
updateSingleDoc();