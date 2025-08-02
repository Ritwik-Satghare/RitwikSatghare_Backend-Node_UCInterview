# Friends API - Task 3: The One with the Permanent Record

This project builds a REST API for Friends TV show episodes using **Node.js**, **Express**, **MongoDB**, and **Mongoose**.  
It allows you to **store, fetch, and manage episode data** in a MongoDB Atlas database.

---

## 📌 Features
- Connects to a **MongoDB Atlas database** using Mongoose.
- Fetches episode data from the **TVMaze API** (via `seed.js`) and stores it permanently.
- REST API endpoints to **create and read episodes**.
- Bonus endpoints to fetch episodes by season or episode number.

---

## 🚀 Tech Stack
- **Node.js + Express** (Backend framework)
- **MongoDB + Mongoose** (Database & ORM)
- **TVMaze API** (Episode data source)
- **Postman** (API testing)

---
## Project Structure
backend-task-3-4-5/
│
├── app.js                  # Main entry point
├── models/
│   ├── episodeDB.js        # Episode schema/model (episodes collection)
│   └── watchedEpisodeDB.js  # Watched episode schema/model (watchedepisodes collection)
├── routes/
│   ├── episodeRoutes.js     # Routes for episode CRUD
│   └── watchedEpisodeRoutes.js # Routes for watched episode logging
└── package.json

