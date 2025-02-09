## Description
This is a Next.js-based web application that integrates both frontend and backend functionalities in a single project. It uses PostgreSQL with Prisma ORM and features an API that conditionally fetches data based on user roles:
- **Admin:** Can view all records.
- **Regular User:** Can view only their own data.

## Live Demo
The project is deployed on Vercel and can be accessed at:
🔗 [OCS Live](http://ocs-roan.vercel.app/)

---

## Features
✅ Next.js (Full-Stack Application)
✅ PostgreSQL with Prisma ORM
✅ Role-based API responses
✅ Deployed on Vercel

---

## Installation

### **1. Clone the Repository**
```sh
git clone https://github.com/your-username/ocs.git
cd ocs
```

### **2. Install Dependencies**
```sh
npm install  # or yarn install
```

### **3. Set Up Environment Variables**
Create a `.env` file in the root directory and add the necessary configurations:
```env
DATABASE_URL="your_postgresql_database_url"
```

### **4. Run Database Migrations**
```sh
npx prisma migrate dev
```

### **5. Start the Development Server**
```sh
npm run dev  # or yarn dev
```

The app will be available at `http://localhost:3000`

---

## API Endpoint
The project contains an API that conditionally fetches data:

### **GET `/api/data`**
- **Admin Role:** Returns all records.
- **Regular User:** Returns only the user’s own records.

Example Request:
```sh
GET /api/users
```

Example Response (Admin):
```json
[
  { "userId": "user1", "password_hash": "482c811da5d5b4bc6d497ffa98491e38","role": "user" },
  { "userId": "user2", "password_hash": "5dkb611da5d5b4bc6d497ffa98491e38","role": "user" }
]
```

Example Response (Regular User):
```json
[
   { "userId": "admin1", "password_hash": "5fgfgr8efe5d5b4bc6d497ffa98491e38","role": "admin" }
]
```

## Contact
For any inquiries, feel free to reach out:
📧 Email: keshavraj09898@gmail.com
