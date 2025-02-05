const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ credentials:true, origin: true}));
app.use(express.urlencoded({extended: true}));

app.get("/",(req, res)=> {
    res.status(200).json({
        email:"jesutofunmiafolabi73@gmail.com",
        current_datetime: new Date(),
        github_url:"https://github.com/Tofunmi-Gloria/HNG12-STG0.git"
    });
});
 app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
 })