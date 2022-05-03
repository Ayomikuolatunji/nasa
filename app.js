const  {parse}=require("csv-parse")
const fs=require("fs")

const result=[]

fs.createReadStream("./kepler_data.csv")
  .pipe(parse({
      comment:"#",
      columns: true
  }))
  .on("data",(data)=>{
     result.push(data)
  })
  .on("error",(error)=>{
      console.log(error.message);
  })
  .on("end",()=>{
      console.log(result);
      console.log("done reading our file");
  })

const parser=parse({

})
