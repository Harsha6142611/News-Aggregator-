const express = require("express");
const mongoose = require("mongoose");
const cors=require('cors');
const app = express();
const News=require('./Model/new.model.js')

const corsOptions={
  origin:"http://localhost:5173",
  methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials:true,
};

app.use(cors(corsOptions));

app.use(express.json());


app.get("/news/articles", async (req, res) => {
  try {
    const products = await News.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update
app.post("/news/articles", async (req, res) => {
  try {
    const { title, author, url, urlToImage, publishedAt, description,userId } = req.body;
    const article = await News.create({
      title,
      author,
      url,
      urlToImage,
      publishedAt,
      description,
      userId, 
    });
    // console.log(article) 
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/news/articles/:id",async(req,res)=>{
  try{
    const {id}=req.params;
    const prod=await News.findByIdAndDelete(id);
    res.status(201).json({message:'Article removed successfully'});
  }catch(error){
    res.status(500).json({message:error.message});
  }
})

mongoose
  .connect(
    // "mongodb+srv://siddu:8Mc6NbwDyqWKCw9I@newsdb.nljuhxi.mongodb.net/?retryWrites=true&w=majority&appName=newsdb"
    // "mongodb+srv://ambatisaiteja123:ambatisaiteja@cluster0.zbh05q5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    "mongodb+srv://ambatisaiteja123:ambatisaiteja@cluster0.zbh05q5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("News Server is running");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });