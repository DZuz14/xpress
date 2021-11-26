import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String
  },
  { timestamps: true }
)

export default mongoose.model('Example', schema)
