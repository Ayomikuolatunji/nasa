const  {parse}=require("csv-parse")
const fs=require("fs")

const result=[]

fs.createReadStream("./kepler_data.csv")
  .on("data",(data)=>{
     result.push(data)
  })
  .on("end",()=>{
      console.log(result);
      console.log("done reading our file");
  })

const parser=parse({

})
