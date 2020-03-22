import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title :String,
    body : String
})

module.exports = {
  blogSchema : mongoose.model ("Blog", blogSchema)
} 