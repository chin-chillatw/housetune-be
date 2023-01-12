const express = require('express');
const app = express();
require('dotenv').config();
const pool = require('./utils/db');



app.use(express.json());

const cors = require('cors');
app.use(
  cors({
    // 解決 CORS  改credentails 設定成 true ，需要設定 origin (來源)
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);
// const cartRouter = require('./routers/cartRouter');
// app.use('/api/casrt', cartRouter);

app.get('/api/cart', async (req, res) => {
  //TODO:cart_id = 30 先寫死 之後會從會員的session拿到user_id 可以用cart的product_id JOIN product資料表 撈資料
  
  let results = await pool.query('SELECT * FROM cart LEFT JOIN product ON cart.product_id = product.prod_id WHERE cart.cart_id = 30')
  let data = results[0]; 
  res.json(data)
  })

 

app.use((req, res, next) => {
  console.log('這裡是 404');
  res.send('404 not found');
});

app.listen(3001, () => {
  console.log('Server running at port 3001');
});
