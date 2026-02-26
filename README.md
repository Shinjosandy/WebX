# 🛒 Full Stack E-Commerce Web Application  
### Built with Node.js, Express.js, EJS & File System

---

## 📌 Project Overview

This project is a complete E-Commerce Web Application inspired by platforms like Amazon and Flipkart.  
It is developed using **Node.js**, **Express.js**, and **EJS** for the frontend, with data stored using the **File System module (fs)**.

The application demonstrates backend fundamentals including:

- Node.js HTTP module
- Express routing & middleware
- Session handling & cookies
- File handling using fs module
- Buffer module usage
- Stream module usage
- Modular project architecture

---

## 🎯 Objectives

The objective of this project is to:

- Build a working E-Commerce platform
- Understand server-side rendering
- Implement session-based authentication
- Use file handling for data persistence
- Demonstrate Node.js core modules practically
- Follow modular and scalable architecture

---

## 🚀 Features

### 👤 1. User Management
- User Registration
- User Login & Logout
- Session-based authentication
- Separate session data for each user

---

### 📦 2. Product Management
- Display all products dynamically
- View product details
- Products stored in JSON files
- Uses File System module for reading data
- Buffer encoding for product description

---

### 🛒 3. Shopping Cart Module
- Add products to cart
- Remove products from cart
- View cart summary
- Cart stored in session
- Server-side total price calculation

---

### 📑 4. Order Processing
- Place order from cart
- Order stored using file handling
- View order history
- Orders stored in JSON file

---

### 🎨 5. User Interface
- Built using EJS templating engine
- Dynamic rendering of data
- Styled with CSS
- Navbar, product cards, and clean layout

---

## 🛠 Technologies Used

| Technology | Purpose |
|------------|----------|
| Node.js | Server-side runtime |
| Express.js | Web framework |
| EJS | Templating engine |
| express-session | Session management |
| File System (fs) | Data storage |
| UUID | Unique ID generation |
| Buffer | Data encoding |
| Streams | Efficient file streaming |

---

## 📂 Project Structure

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Install Dependencies

Open terminal inside the project folder and run:

```bash
npm install
```

If required:

```bash
npm install express express-session body-parser ejs uuid
```

---

### 2️⃣ Start the Server

```bash
node server.js
```

---

### 3️⃣ Open in Browser

Visit:

```
http://localhost:3000
```

---

## 🔎 Application Workflow

1. User registers an account.
2. User logs in using credentials.
3. Products are loaded from `products.json`.
4. User adds products to cart.
5. Cart is stored inside session.
6. User places an order.
7. Order is stored in `orders.json`.
8. User can view order history.

---

## 🧠 Technical Concepts Demonstrated

### ✅ Node.js HTTP Module
Used in `server.js` to create the server:

```javascript
const http = require("http");
const server = http.createServer(app);
```

Express internally builds upon the HTTP module.

---

### ✅ File System Module (fs)
Used to:
- Read products
- Store users
- Store orders

Methods demonstrated:
- fs.readFileSync()
- fs.readFile()
- fs.writeFile()

---

### ✅ Express.js
- Modular routing
- Middleware handling
- Request and response management
- Error handling middleware

---

### ✅ Session Management
Implemented using express-session:
- Maintains login state
- Stores cart inside session
- Demonstrates session creation and destruction

---

### ✅ Buffer Module
Used to encode product description:

```javascript
const buffer = Buffer.from(product.description);
product.encodedDescription = buffer.toString("base64");
```

---

### ✅ Stream Module
Used to stream product images:

```javascript
fs.createReadStream(imagePath).pipe(res);
```

This prevents loading large files into memory.

---

## 🏗 Non-Functional Requirements

- Modular architecture
- Clean folder structure
- Proper error handling
- Scalable and maintainable design
- Optimized performance using streams

---

## 🔮 Future Enhancements

- Password hashing (bcrypt)
- MongoDB integration
- Admin dashboard
- Search and pagination
- Payment gateway integration
- JWT authentication
- Responsive UI improvements

---

## 👨‍💻 Author

Developed as an academic E-Commerce Web Application using Node.js and Express.js.

---

## 📜 License

This project is developed for educational purposes.
