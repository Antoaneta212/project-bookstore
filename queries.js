// queries.js - CRUD и aggregate заявки

use bookstore

// READ - четене
db.authors.find().pretty()
db.authors.find({ country: "UK" }).pretty()
db.authors.find({ country: "UK", birthYear: { $gt: 1900 } }).pretty()

db.books.find().pretty()
db.books.find({ price: { $lt: 20 } }).pretty()
db.books.find({ price: { $lt: 20 }, stock: { $gt: 5 } }).pretty()

db.customers.find().pretty()
db.customers.find({ "address.city": "Sofia" }).pretty()
db.customers.find({ "address.city": "Sofia", favorites: { $ne: [] } }).pretty()

db.orders.find().pretty()
db.orders.find({ total: { $gt: 20 } }).pretty()
db.orders.find({ total: { $gt: 20 }, date: { $gt: new Date("2024-05-05") } }).pretty()

// UPDATE - актуализация
db.authors.updateOne({ name: "J.K. Rowling" }, { $set: { awards: ["Hugo Award"] } })
db.books.updateOne({ title: "Harry Potter" }, { $inc: { stock: 5 } })
db.customers.updateOne({ name: "Ivan Petrov" }, { $set: { email: "ivan.petrov@abv.bg" } })
db.orders.updateOne({ customerEmail: "maria@gmail.com" }, { $inc: { total: 5 } })

// DELETE - изтриване
db.authors.deleteOne({ name: "Mark Twain" })
db.books.deleteOne({ title: "It" })
db.customers.deleteOne({ name: "Petar Ivanov" })
db.orders.deleteOne({ total: 10 })

// AGGREGATE - агрегиране
db.books.aggregate([
  { $group: { _id: "$categoryId", count: { $sum: 1 } } }
])

db.books.aggregate([
  { $group: { _id: "$author", totalStock: { $sum: "$stock" } } }
])

db.books.aggregate([
  { $match: { categoryId: ObjectId("666000000000000000000010") } },
  { $group: { _id: null, avgPrice: { $avg: "$price" } } }
])

db.books.aggregate([
  { $match: { price: { $gt: 15 } } },
  { $sort: { price: -1 } }
])
