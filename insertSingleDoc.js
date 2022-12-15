const {client}= require("./dbconfig.js")

const insertSingleDoc=async()=>{
try {
    const database = client.db("admin");
    const haiku = database.collection("users");
    const doc = {
        title: "Abdur Rouf Jibon",
      }
      const result = await haiku.insertOne(doc);
      console.log('A document was inserted with the _id: ${result.insertedId}');
} catch (error){
    console.log(error)
} finally {
    await client.close();
}
}

insertSingleDoc();