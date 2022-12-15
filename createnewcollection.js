const {client}= require("./dbconfig.js")

function CreateMyCollection(MyMongoClient) {
    var MyDataBase= MyMongoClient.db("company");
    MyDataBase.createCollection("teachers",function (error,result){
        console.log(result); 
    })
}

CreateMyCollection();