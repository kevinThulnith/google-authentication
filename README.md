![Django](https://img.shields.io/badge/Django-%23092E20.svg?logo=django&logoColor=white)
![DRF](https://img.shields.io/badge/Django_REST-FF1709?logo=django&logoColor=white)
![SQLite](https://img.shields.io/badge/Sqlite-003B57?logo=sqlite&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?logo=JSON%20web%20tokens)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)
![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white)
![google](https://img.shields.io/badge/Google_Cloud-4285F4?logo=google-cloud&logoColor=white)

# 🔐 Google Authentication with Django & React

A full-stack web application demonstrating secure authentication using Google OAuth, Django REST Framework, and React.

![Project Demo](./frontend/public/logo.png)

## ✨ Features

- 🔐 Complete authentication system:
  - 👤 Traditional username/password login
  - 🌐 Google OAuth 2.0 integration
  - 🔑 JWT token-based authentication
- 💻 Modern React frontend with Tailwind CSS
- 🚀 RESTful API with Django REST Framework
- 🔄 Seamless user experience with token refresh
- 📱 Responsive design for all devices

## 🛠️ Technology Stack

### 🖥️ Frontend

- ⚛️ React 19
- 🎨 Tailwind CSS 4
- 🧭 React Router v7
- ✨ Framer Motion (animations)
- 📡 Axios (API requests)
- 🛠️ @react-oauth/google (Google OAuth integration)
- ⚡ Vite (build tool)

### 🗄️ Backend

- 🐍 Django 5.2
- 🌐 Django REST Framework
- 🔑 dj-rest-auth & django-allauth (OAuth handling)
- 🔒 Simple JWT (JWT authentication)
- 🗃️ SQLite (database)

## 🚀 Setup Instructions

### 📋 Prerequisites

- 📦 Node.js (v18+)
- 🐍 Python 3.13+
- 🔑 Google OAuth credentials (Client ID and Secret)

### ⚙️ Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Create a virtual environment:

   ```bash
   python -m venv .venv
   ```

3. Activate the virtual environment:

   - Windows: `.venv\Scripts\activate`
   - macOS/Linux: `source .venv/bin/activate`

4. Install dependencies:

   ```bash
   pip install -e .
   ```

5. Create a `.env` file in the backend directory with:

   ```
   SECRET_KEY=your_django_secret_key
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

6. Run migrations:

   ```bash
   python manage.py migrate
   ```

7. Create a superuser:

   ```bash
   python manage.py createsuperuser
   ```

8. Start the Django server:
   ```bash
   python manage.py runserver
   ```

### 💻 Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file with:

   ```
   VITE_API_URL=http://localhost:8000
   VITE_CLIENT_ID=your_google_client_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🔧 Environment Variables

### 🗄️ Backend

- 🔐 `SECRET_KEY`: Django secret key for security
- 🌐 `GOOGLE_CLIENT_ID`: Your Google OAuth client ID
- 🔑 `GOOGLE_CLIENT_SECRET`: Your Google OAuth client secret

### 💻 Frontend

- 🌐 `VITE_API_URL`: URL to your Django backend API
- 🔑 `VITE_CLIENT_ID`: Your Google OAuth client ID (same as backend)

## 🌐 Google OAuth Setup

1. Visit the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Navigate to "APIs & Services" > "Credentials"
4. Create an "OAuth client ID"
5. Set application type to "Web application"
6. Add authorized JavaScript origins: `http://localhost:5173`
7. Add authorized redirect URIs: `http://localhost:5173`
8. Save and note your Client ID and Client Secret

## 📖 Usage

1. 🌐 Access the app at `http://localhost:5173`
2. ✍️ Register a new account or sign in with Google
3. 🏠 Explore the protected home page after authentication
4. 🚪 Logout functionality is available through the navbar

## 📁 Project Structure

```
G Auth/
├── backend/             # Django backend
│   ├── api/             # API app
│   │   ├── views.py     # API endpoints
│   │   ├── urls.py      # URL routing
│   │   └── serializers.py # Data serialization
│   └── backend/         # Project settings
│       └── settings.py  # Django configuration
├── frontend/            # React frontend
│   ├── public/          # Static files
│   └── src/             # Source code
│       ├── components/  # Reusable components
│       ├── pages/       # Page components
│       ├── api.js       # API configuration
│       └── App.jsx      # Main application
└── README.md            # Project documentation
```

## 📄 License

MIT
