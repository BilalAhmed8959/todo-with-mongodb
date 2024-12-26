import express from "express"
const app = express()
import dotenv from "dotenv"
import cors from "cors"
import todoModels from "./src/router/todo.router.js"
import connectDB from "./src/db/index.js"


app.use(cors())
app.use(express.json())
dotenv.config()

app.use('/api/v1' , todoModels)
app.get('/', (req, res) => {
  res.send('Hello World!')
})


connectDB()
.then(()=>{
  app.listen(process.env.PORT, () => {
    console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
  })

})
.catch((error)=>{
  console.log(`MONGO DB connection failed: ${process.env.PORT}`);
  
})