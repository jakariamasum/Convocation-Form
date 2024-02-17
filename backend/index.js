const express = require('express');
const cors = require('cors');

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;

//middile wire
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Form Backend available now');
})
const uri = "mongodb+srv://formData:UhUMOfOi3GRMtpBw@cluster0.yzkj8ly.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
      // await client.connect();
      const dataCollection = client.db('formData').collection('data');

      app.post('/submitForm',async (req,res)=>{
        const data = req.body;
        //  console.log(data)
            const cars = await dataCollection.insertOne(data);
            res.status(200).json({ message: 'Form data submitted successfully' });
      })

      app.get('/getData',async(req,res)=>{
        const result=await dataCollection.find().toArray();
        console.log(result)
        res.send(result)
      })


      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
    //   await client.close();
    }
  }
  run().catch(console.dir);

  app.listen(port, () => {
    console.log('ok server running here')
}) 