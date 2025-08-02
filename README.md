# 📦 RitwikSatghare\_Backend-Node\_UCInterview

This repository contains a backend project built using **Node.js**, **Express.js**, and **MongoDB**. It demonstrates core backend development concepts, including API creation, database integration, and CRUD operations.

This repository is created for DJS Unicode interviewer team.

---

## 🚀 Features

- RESTful API using Express.js
- MongoDB Atlas integration using Mongoose
- CRUD operations on data models
- Error handling and validation
- Environment variable configuration

---

## ⚙️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas (via Mongoose)
- **Tools:** Postman (for API testing)
- **Version Control:** Git & GitHub

---

## 🛠️ Installation and Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Ritwik-Satghare/RitwikSatghare_Backend-Node_UCInterview.git
cd RitwikSatghare_Backend-Node_UCInterview
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```env
MONGO_URI=your-mongodb-connection-uri
PORT=3000
```

Replace `your-mongodb-connection-uri` with your MongoDB Atlas URI.

### 4️⃣ Run the Server

```bash
npm start
```

The server will run on `http://localhost:3000` (or the port defined in `.env`).

---

## 📡 API Endpoints

### Episodes

- **GET** `/episode` → Get all episodes
- **GET** `/episode/:id` → Get episode by ID
- **POST** `/episode` → Add a new episode
- **PUT** `/episode/:id` → Update an episode (replace)
- **PATCH** `/episode/:id` → Update an episode (partial)
- **DELETE** `/episode/:id` → Delete an episode

### Example Request (POST)

```json
{
  "title": "The One with Node.js",
  "season": 1,
  "air_date": "2024-08-01"
}
```

---

## 🧪 Testing the API

Use **Postman** or any API testing tool:

1. Start the server (`npm start`).
2. Send requests to `http://localhost:3000/`.
3. Example: `GET http://localhost:3000/episode`

---

## 📂 Project Structure

```
├── models/
│   └── episodeDB.js     # Mongoose schema and model
├── app.js               # Main Express app
├── package.json         # Project dependencies and scripts
├── .env                 # Environment variables (not committed)
└── README.md            # Documentation
```

---

## 🛡️ Error Handling

- Returns proper HTTP status codes (e.g., `200`, `201`, `400`, `404`, `500`).
- Handles invalid IDs and server errors gracefully.

---

## 🤝 Contributing

Feel free to fork the repository and submit pull requests for improvements.

---

---

## 👤 Author

- **Ritwik Satghare**\
  [GitHub Profile](https://github.com/Ritwik-Satghare)

