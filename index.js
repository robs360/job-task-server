const express = require("express")
const app = express()
const cors = require('cors')
app.use(cors())
const port = process.env.PORT || 5000
require('dotenv').config()
app.use(express.json())
console.log("")
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://job-task:GfaVNRaXEWZeOa8G@cluster0.tju8r4h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const dataCollection = client.db('task').collection('data')
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    app.get('/products', async (req,res)=>{
        const result=await dataCollection.find().toArray()
        res.send(result)
    })
  } finally {
    
  }
}
run().catch(console.dir);

app.get('/',(req,res)=>{
    
    res.send("job-task server is running")
})
app.listen(port, () => {
    console.log(`it is running on port ${port}`)
  })