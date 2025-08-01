# ☕ Central Perk API

An Express.js backend project that fetches and serves data about the TV show **Friends** using the [TVMaze API](https://www.tvmaze.com/api).

This project follows the **MVC architecture** and includes endpoints to fetch show details and episode lists, along with a Postman collection for easy testing.

---

## 🚀 Features

* Built with **Node.js** and **Express.js**.
* Fetches show details and episode data from TVMaze API using **fetch**.
* Organized using **MVC (Model-View-Controller)** structure.
* Includes **logging middleware** with Morgan.
* Comes with a **Postman Collection** for easy API testing.

---

## 📂 Project Structure

```
backend-task-1/
├── controllers/
│   ├── episodeController.js
│   └── showController.js
├── routes/
│   ├── episodeRoute.js
│   └── showRoute.js
├── app.js
├── package.json
├── .gitignore
└── Central Perk API.postman_collection.json
```

---

## 🔧 Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone git@github.com:Ritwik-Satghare/central-perk-api.git
   cd central-perk-api
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the server**:

   ```bash
   node app.js
   ```

   Server runs at: **`http://localhost:3000`**

---

## 🌐 API Endpoints

### 1️⃣ GET `/show-details`

Fetches main details of the TV show *Friends*.

**Response Example:**

```json
{
  "name": "Friends",
  "language": "English",
  "genres": ["Comedy", "Romance"],
  "premiered": "1994-09-22",
  "ended": "2004-05-06",
  "rating": 8.9
}
```

---

### 2️⃣ GET `/episode-details`

Fetches a list of all episodes of *Friends*.

**Response Example:**

```json
[
  {
    "id": 431,
    "name": "The One Where Monica Gets a Roommate",
    "season": 1,
    "number": 1,
    "airdate": "1994-09-22"
  },
  ...
]
```

---

## 🧪 Postman Collection

A **Postman Collection** is included:
File: `Central Perk API.postman_collection.json`

* Import it into Postman for easy testing of both endpoints.

---

## 🛠 Tech Stack

* **Node.js**
* **Express.js**
* **Fetch API (node-fetch)**
* **Morgan (HTTP Logger)**

---

## 👨‍💻 Author

**Ritwik Satghare**
[GitHub Profile](https://github.com/Ritwik-Satghare)

---
