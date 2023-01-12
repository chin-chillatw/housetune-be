const express = require('express');
const router = express.Router();
const pool = require('../utils/db');

router.get('/api/cart', async (req, res) => {
  //TODO:cart_id = 3 先寫死 之後會從會員的session拿到user_id 可以用cart的product_id JOIN product資料表 撈資料
  
  let results = await pool.query('SELECT product_id FROM  cart WHERE cart_id = 30')
  let data = results[0]
  let product_id = data.map((value, index)=>{
    console.log(value.product_id)
  //  return(value.product_id) 
  })
  res.json(product_id)
  let product_detail = await pool.query('SELECT * FROM product WHERE prod_id =?',[product_id])
  console.Console(product_detail)
  res.json(product_detail)
  
  });
  //SELECT c.product_id, p.prod_id, p.name, p.img, p.price, p.description FROM cart AS c INNER JOIN product AS p ON c.product_id = p.prod_id;



  module.exports = router;  