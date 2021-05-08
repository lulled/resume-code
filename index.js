const express = require('express');
const app =  express();
const path = require('path');
const enforce = require('express-sslify');
 

const PORT =process.env.PORT || 5000;

//app.use(enforce.HTTPS({trustProtoHeader:true}));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()=> console.log('server is listening on port 5000'));
