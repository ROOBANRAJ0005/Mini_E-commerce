const ProductModel = require('../models/productModel');

exports.getProduct = async(req,res,next) =>{
  const query = req.query.keyword?{ name : { 
    $regex: req.query.keyword,
    $options: 'i'
 }}:{}
  const product = await ProductModel.find(query) ;
  res.json({
    success: true,
    product
})
};

exports.getSingleProduct = async(req,res,next)=>{
  try{
const product = await ProductModel.findById(req.params.id);
res.json({
    success: true,
    product
})
}
catch(error){
      res.json({
        success:false,
        message:'unable to find'
      });
}
};