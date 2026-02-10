const express=require("express")
const PORT=5001;
const bfhlRoutes = require("./routes/bfhlRoutes");
const healthRoutes = require("./routes/healthRoutes");
const { handlePost } = require("./controllers/controllers");
const app=express();
app.use(express.json())


app.use("/bfhl", handlePost);
app.use("/health", healthRoutes);



app.listen(PORT, () => console.log(`Server running on ${PORT}`));

