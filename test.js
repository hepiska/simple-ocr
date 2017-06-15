const imagepros = require('./index')
const fs  = require('fs');
require('dotenv').config()

let ImageBuff = fs.readFileSync('./data/sampel1.jpg')


imagepros.preproccessing(ImageBuff,process.env.PRODUCT_ID,process.env.KEY_DIR).then(data => {
  console.log('------',data);
})

imagepros.direct(ImageBuff,process.env.PRODUCT_ID,process.env.KEY_DIR).then(data => {
  console.log('direct',data);
})
