what is sql and nosql


sql => stucture query language 

aisa database jisme data  ek stucture way me mtlb table like stucture m store hota h
mysql

nosql => not only structure query language

aisa database jisme data collection ke formme store hota h and collection means object format
like   mongodb

{

    name:"tejas",
    age:236
}


database
jaha user ka data store hota h

what is mongodb

mongo db ek software hai jisme data store hota h isliye hum usko database keh skte h aur ae ek nosql category ka database hai

model
 user => ae ek model hai jaha saree user ka data store hoga
 teacher => ae ek model hai jaha saree teacher ka data store hoga
collection

  store perticular data inside each model
collection data
  each key value pair  in perticular collection  is called collection data

schema
 humko data konse stucture me hamare database me store krna h us stucture ko schema bolte h



how to create db server

databse server se client direct connect nhi ho skta 
agr hame db server se connect krna h to hamare pass application server hona chahiye
to  sbse pehle application server create krege 
then db server create krke application server ke through hum use connect krege


what is mongoose?

mongoose is a package provided by npm 
jiske help h hum db server create krte hai
mongoose hame kuch methods provide krta hai
1. mongoose.connect() => ae method se hum db(mongo db) se coonect krege
2. new mongoose.Schema() => ae method se hum schema banaaege
2. mongoose.model => ae method se hum model banayege

steps to create db server

1. create application server first
2. npm i mongoose
3. create one seprate file called db.js or anything you want
4. require mongoose in your above file
5. mongo db se connect karege with help of mongoose.coonect("mongodb url")
6. create schema with help of new mongoose.Schema({})
7. create model with help of mongoose.model("modelName",schemaVariable)
8. hum model ko export karege with module.exports se


