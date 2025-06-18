
// insert.js - Вмъкване на данни в MongoDB

use bookstore

// Вмъкване на автори
db.authors.insertMany([
  { _id: ObjectId("666000000000000000000001"), name: "J.K. Rowling", country: "UK", birthYear: 1965 },
  { name: "George Orwell", country: "UK", birthYear: 1903 },
  { name: "J.R.R. Tolkien", country: "UK", birthYear: 1892 },
  { name: "Stephen King", country: "USA", birthYear: 1947 },
  { name: "Agatha Christie", country: "UK", birthYear: 1890 },
  { name: "Dan Brown", country: "USA", birthYear: 1964 },
  { name: "Haruki Murakami", country: "Japan", birthYear: 1949 },
  { name: "Leo Tolstoy", country: "Russia", birthYear: 1828 },
  { name: "Mark Twain", country: "USA", birthYear: 1835 },
  { name: "Fyodor Dostoevsky", country: "Russia", birthYear: 1821 }
]);

// Вмъкване на категории
db.categories.insertMany([
  { _id: ObjectId("666000000000000000000010"), name: "Fantasy", description: "Magical stories" },
  { name: "Sci-Fi", description: "Science fiction" },
  { name: "Thriller", description: "Suspense and excitement" },
  { name: "Romance", description: "Love stories" },
  { name: "Classics", description: "Classic literature" },
  { name: "Mystery", description: "Whodunnit stories" },
  { name: "Biography", description: "Life stories" },
  { name: "History", description: "Historical content" },
  { name: "Children", description: "Kids books" },
  { name: "Philosophy", description: "Deep thoughts" }
]);

// Вмъкване на книги
db.books.insertMany([
  { title: "Harry Potter", author: "J.K. Rowling", authorId: ObjectId("666000000000000000000001"), categoryId: ObjectId("666000000000000000000010"), price: 25, stock: 12, tags: ["magic", "kids"], details: { pages: 350 } },
  { title: "1984", author: "George Orwell", categoryId: ObjectId("666000000000000000000010"), price: 15, stock: 20, tags: ["dystopia"], details: { pages: 300 } },
  { title: "The Hobbit", author: "J.R.R. Tolkien", categoryId: ObjectId("666000000000000000000010"), price: 20, stock: 10, tags: ["fantasy"], details: { pages: 310 } },
  { title: "It", author: "Stephen King", price: 18, stock: 5, tags: ["horror"], details: { pages: 1000 } },
  { title: "Murder on the Orient Express", author: "Agatha Christie", price: 12, stock: 8, tags: ["mystery"], details: { pages: 256 } },
  { title: "Inferno", author: "Dan Brown", price: 17, stock: 9, tags: ["thriller"], details: { pages: 480 } },
  { title: "Norwegian Wood", author: "Haruki Murakami", price: 14, stock: 6, tags: ["romance"], details: { pages: 296 } },
  { title: "War and Peace", author: "Leo Tolstoy", price: 22, stock: 4, tags: ["classic"], details: { pages: 1200 } },
  { title: "Tom Sawyer", author: "Mark Twain", price: 10, stock: 15, tags: ["adventure"], details: { pages: 200 } },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", price: 16, stock: 7, tags: ["philosophy"], details: { pages: 430 } }
]);

// Вмъкване на клиенти
db.customers.insertMany([
  { name: "Ivan Petrov", email: "ivan@abv.bg", address: { city: "Sofia", street: "Vitosha", number: 21 }, favorites: ["Harry Potter"] },
  { name: "Maria Georgieva", email: "maria@gmail.com", address: { city: "Plovdiv", street: "Main", number: 5 }, favorites: ["1984", "The Hobbit"] },
  { name: "Georgi Dimitrov", email: "georgi@abv.bg", address: { city: "Varna", street: "Primorski", number: 12 }, favorites: ["It"] },
  { name: "Anna Stoyanova", email: "anna@yahoo.com", address: { city: "Burgas", street: "Lazur", number: 9 }, favorites: ["Inferno"] },
  { name: "Petar Ivanov", email: "petar@gmail.com", address: { city: "Ruse", street: "Center", number: 17 }, favorites: [] },
  { name: "Elena Petrova", email: "elena@mail.bg", address: { city: "Sofia", street: "Tsarigradsko", number: 88 }, favorites: ["Tom Sawyer"] },
  { name: "Nikolay Kolev", email: "nikolay@mail.bg", address: { city: "Stara Zagora", street: "Beroe", number: 23 }, favorites: ["Norwegian Wood"] },
  { name: "Stefan Vasilev", email: "stefan@gmail.com", address: { city: "Pleven", street: "Panorama", number: 33 }, favorites: [] },
  { name: "Tanya Ilieva", email: "tanya@abv.bg", address: { city: "Vidin", street: "Dunavska", number: 2 }, favorites: ["Murder on the Orient Express"] },
  { name: "Dimitar Borisov", email: "dimitar@yahoo.com", address: { city: "Sofia", street: "Oborishte", number: 100 }, favorites: ["War and Peace"] }
]);

// Вмъкване на поръчки
db.orders.insertMany([
  { customerEmail: "ivan@abv.bg", books: ["Harry Potter", "1984"], total: 40, date: new Date("2024-05-01") },
  { customerEmail: "maria@gmail.com", books: ["The Hobbit"], total: 20, date: new Date("2024-05-02") },
  { customerEmail: "georgi@abv.bg", books: ["It"], total: 18, date: new Date("2024-05-03") },
  { customerEmail: "anna@yahoo.com", books: ["Inferno"], total: 17, date: new Date("2024-05-04") },
  { customerEmail: "petar@gmail.com", books: ["Tom Sawyer"], total: 10, date: new Date("2024-05-05") },
  { customerEmail: "elena@mail.bg", books: ["Norwegian Wood", "War and Peace"], total: 36, date: new Date("2024-05-06") },
  { customerEmail: "nikolay@mail.bg", books: ["1984"], total: 15, date: new Date("2024-05-07") },
  { customerEmail: "stefan@gmail.com", books: ["The Hobbit", "Inferno"], total: 37, date: new Date("2024-05-08") },
  { customerEmail: "tanya@abv.bg", books: ["Murder on the Orient Express"], total: 12, date: new Date("2024-05-09") },
  { customerEmail: "dimitar@yahoo.com", books: ["Crime and Punishment"], total: 16, date: new Date("2024-05-10") }
]);