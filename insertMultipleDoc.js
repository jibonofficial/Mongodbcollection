const {client}= require("./dbconfig.js")

const insertMultipleDoc=async()=>{
    try {
        const database = client.db("mongoconnect");
        const haiku = database.collection("users");
        const docs = 
        [
            {
                Name:"Abdur Hamid Khan",
                city:"Dhaka"
            },
            {
                Name:"Hamid Hamid Khan",
                city:"Dhaka"
            },
            {
                Name:"Khan Hamid Khan",
                city:"Dhaka"
            },
            {
                Name:"Bhashani Hamid Khan",
                city:"Dhaka"
            }
        ];
            const result = await haiku.insertMany(docs);
            console.log(`${result.insertedCount} documents were inserted`);
    } catch (error){
        console.log(error)
    } finally {
        await client.close();
    }
    }
    
    insertMultipleDoc();