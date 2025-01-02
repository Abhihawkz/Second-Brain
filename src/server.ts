import express from "express"
import  dotenv  from "dotenv";
import user from "./routes/userRoutes.ts"
import content from "./routes/contentRoutes.ts"

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use("/api/v1/user",user)
app.use("/api/v1/content",content)

app.listen(PORT,()=>{
    console.log(`Server started Running http://localhost:${PORT}`)
})