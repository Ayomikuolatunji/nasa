const  {parse}=require("csv-parse")
const fs=require("fs")

const habitablePlanet=[]


const isHabitable=(planet)=>{
    return planet[" koi_pdisposition"] === "CONFIRMED"
    && planet["koi_insol"] >0.36 && planet["koi_insol"] <1.11 && planet[" koi_prad"] <1.6
}

fs.createReadStream("./kepler_data.csv")
  .pipe(parse({
      comment:"#",
      columns: true
  }))
  .on("data",(data)=>{
      if(isHabitable(data)){
        habitablePlanet.push(data)
      }
  })
  .on("error",(error)=>{
      console.log(error.message);
  })
  .on("end",()=>{
      console.log(habitablePlanet);
      console.log("done reading our file");
  })

const parser=parse({

})
