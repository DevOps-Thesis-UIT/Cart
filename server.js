const express = require('express');
const cors = require('cors');
const app = express();


require('dotenv').config();
require('./config/db_conn');
const port = process.env.PORT || 3003;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test


app.use("/cart", require("./routes/cartRouter"))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
