const express = require('express');
const morgan = require('morgan');
const expressRouter = require('./expressRouter');

const app = express();
app.use(morgan("common"));
app.use('/blog-posts', expressRouter);

app.listen(process.env.PORT||8080, () => {
    console.log("app is up");
});
