
const mongoose = require('mongoose');
const validator = require('validator');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/shubhamdata')
  .then(() => console.log('Connected!')).catch((err)=>{
    console.log(err)
  });


//   define a schema means type of columns
const playListSchema = new mongoose.Schema({
    name : {type:String,
    required : true,
    unique: false,
    uppercase:true,
    trim:true,
    minlength:2,
    maxlength:30,
  },
  
    ctype:String, 
    
    // citytype:{
    //   type:String,
    //   enum:["pune", "mumbai"  ,"dhule"]
    //   , required : true,
    // }, 
    // //suppose we want only pune mumbai and dhule city members 
    videos:Number,
    // videos:{type:Number,
    //   validate(val){
    //     if(val<0){
    //       throw new Error("videos count shoould not be negative")
    //     }
//     //   }
// },
    author:String,
    email:{
type:String,
// uniquie:true,
validate(val){
  if(!validator.isEmail){
    throw new Error("enter valid emailId")
  }
}
    },
    active:Boolean,
    date :{
        type:Date,
        default:Date.now
    }
});


// collection creation 
const Playlist=mongoose.model("Demos",playListSchema);

// create first row or documet  insert 

const createDocument = async ()=>{

    const  realPlaylist = new Playlist({
        name : "kasturi",
            ctype:"pune",
            videos:132,
            author:"mavi",
            active:true,
    });
    const another  = new Playlist({
        name : "sansruti",
            ctype:"pune",
            videos:132,
            author:"mavi",
            active:true,
    });
    const another1  = new Playlist({
        name : "maheshvariiiiii",
            ctype:"pune",
            videos:132,
            author:"mavi",
            active:true,
    });
  const result = await Playlist.insertMany([another,another1])
  // const result = await onedata.save();
  // console.log(result)
    

}

createDocument()

// read operation................................


// const getdocumet = async ()=>{
//   try {
//     const result = await Playlist.find({name:"shubham"},{videos:0}).limit(1);
// console.log(result)
// } catch (error) {
//     console.log(err)
//   }
// }


// const getdocumet = async ()=>{
//   try {
//    // const result = await Playlist.find({videos:{$gt: 100}});
//     const result = await Playlist.find({name:{$nin : ["shubham","mavi"]}});
//    // const result = await Playlist.find({name:{$in : ["shubham","mavi"]}});


//    console.log(result)
// } catch (error) {
//     console.log(err)
//   }
// }
// getdocumet();