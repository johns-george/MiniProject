const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: '',
  },
  // images: [{
  //   type: String,
  //   default: '',
  // }],
  price: {
    type: Number,
    default: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
    min:0,
    max:255
  },
  rating: {
    type: Number,
    default: 0,
  },
  numReviews: {
    type: Number,
    default: 0
  }
  // isFeatured: {
  //   type: Boolean,
  //   default: false,
  // },
  // dateCreated:{
  //   type: Date,
  //   default: Date.now() 
  // }

});


const product = mongoose.model('Product', productSchema);

module.exports = product