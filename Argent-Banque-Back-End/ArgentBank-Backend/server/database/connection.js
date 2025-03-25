const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb+srv://rasolorasolo2011:90aWkHWkNtbksmcw@cluster0.y2ri3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
//90aWkHWkNtbksmcw
module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
