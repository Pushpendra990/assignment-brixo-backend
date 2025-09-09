# IFSC Details API Service

This is a backend service that provides IFSC (Indian Financial System Code) details via an API. The service uses Node.js with Express for the backend framework, MongoDB for data storage, and Redis for caching to improve performance. It integrates with the Razorpay IFSC API to fetch up-to-date details.

## 📦 Tech Stack

- **Backend Framework**: Node.js with Express
- **Database**: MongoDB
- **ODM**: Mongoose
- **Cache**: Redis
- **External API**: Razorpay IFSC API

---

## 🚀 Features

✔ API endpoint to fetch IFSC details  
✔ Fetches data from Razorpay IFSC API if not present or outdated  
✔ Stores IFSC details in MongoDB  
✔ Caching implemented using Redis for frequently requested data  
✔ Configurable cache TTL and data freshness duration  
✔ Designed for easy extensibility to integrate more IFSC APIs  

---


## ⚙️ How to Run


run "npm i" in comand prompt

## Start the Server
   
npm start

## Access the API
Open your browser or use curl or Postman to test:
GET http://localhost:3000/api/v1/ifsc/<IFSC_CODE>


