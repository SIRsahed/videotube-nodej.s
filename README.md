# 📺 VIDEOTUBE - Video Uploading Platform (Backend)

VIDEOTUBE is a **YouTube-like video uploading platform backend**, where users can upload videos, stream them, manage accounts, post comments, and more. This backend server is built with Node.js, Express.js, MongoDB, Cloudinary, and Multer.

---

## 🚀 Features
- ✅ User Authentication (JWT Based)
- ✅ Video Upload & Streaming
- ✅ Thumbnail Upload
- ✅ Cloudinary Integration for Video/Image Storage
- ✅ Comment System
- ✅ Like/Dislike System
- ✅ User Profiles & Channels
- ✅ Middleware for Security (Helmet, Rate Limiter)
- ✅ Validation & Error Handling
- ✅ RESTful API Structure

---

## 📂 Project Structure
VIDEOTUBE/ │ ├── node_modules/ ├── public/ │ ├── uploads/ # User uploaded content (ignored in git) │ └── temp/ # Temp storage before cloudinary upload (ignored in git) │ ├── src/ │ ├── controllers/ # Business logic │ ├── db/ # Database config and connection │ ├── middlewares/ # Authentication, Error Handling etc. │ ├── models/ # Mongoose Schemas │ ├── routes/ # API Routes │ └── utils/ # Helper functions (Cloudinary configs etc.) │ ├── .env.sample # Environment variable example ├── app.js # Express app setup ├── index.js # Server start point ├── constants.js # Global constants └── package.json

---

## 🛠️ Tech Stack
- **Backend Framework:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **File Uploads:** Multer
- **Cloud Storage:** Cloudinary
- **Authentication:** JWT
- **Security:** Helmet, Express Rate Limiter
- **Validation:** express-validator
- **Dev Tools:** Nodemon, ESLint, Prettier

---

## 🔧 Installation & Setup

### 1️⃣ Clone the repository

- git clone https://github.com/yourusername/videotube-backend.git
- cd videotube-backend

---
### 2️⃣ Install dependencies

- npm install

---

### 3️⃣ Setup environment variables

Create a .env file inside the src/ folder and add your environment variables as shown below:

- PORT=5000
- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_jwt_secret
- CLOUDINARY_CLOUD_NAME=your_cloudinary_name
- CLOUDINARY_API_KEY=your_cloudinary_api_key
- CLOUDINARY_API_SECRET=your_cloudinary_api_secret
- You can also check the .env.sample file for reference.

---

### 4️⃣ Run the project (development)

- npm run dev
- Server will run at: http://localhost:5000

---

🗂️ API Endpoints Overview
Method	Endpoint	Description
- POST	/api/auth/register	User Registration
- POST	/api/auth/login	User Login
- POST	/api/videos	Upload New Video (Private)
- GET	/api/videos	Get All Videos (Public)
- GET	/api/videos/:id	Get Single Video Details
- POST	/api/comments/:id	Add Comment to Video
- POST	/api/likes/:id	Like a Video
- ➡️ Detailed API Documentation: Coming Soon...

---

🔐 Authentication
- JWT-based Authentication
- Access Token & Refresh Token Strategy (Optional)
- Private route middleware used to protect sensitive APIs
- ☁️ File Upload Workflow
- User uploads video → stored temporarily in public/temp/ via Multer.
- Then the file is uploaded to Cloudinary.
- The video metadata is stored in MongoDB.
- Temporary file is deleted from temp folder after upload.

---

📝 Contributing
Pull requests are welcome!
Steps:

- Fork it
- Create your feature branch (git checkout -b feature/awesome-feature)
- Commit your changes (git commit -am 'Add some awesome feature')
- Push to the branch (git push origin feature/awesome-feature)
- Create a new Pull Request

---

👨‍💻 Author
- Md. Sahed Rahman
- 💻 MERN Stack Developer
- 📧 sahedrahmanshakil@gmail.com
- 🌐 https://mernsahed.netlify.app

---

