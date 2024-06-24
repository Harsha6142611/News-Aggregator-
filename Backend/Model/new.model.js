const mongoose = require("mongoose");

const NewSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter Article name"],
    },
    author: {
      type: String,
      required:false,
    },
    url: {
      type: String,
      required: true,
    },
    imageUrl: {
        type: String,
        required: false,
    },
    publishedAt:{
        type:String,
        required: false,
    },
    description:{
        type:String,
        required: false,
    },
    userId:{
        type:String,
        required:false,
    },
  },
  {
    timestamps: true,
  }
);

const News=mongoose.model('News',NewSchema);

module.exports=News;
