# School Management Mini-Project

This project is a submission for the Web Development Assignment from Reno Platforms. It is a full-stack application built with Next.js and MySQL that allows users to add new school data through a form and view all submitted schools on a separate page.

### **Live Demo**

The project is hosted on Vercel. You can view the live version here:

**(Insert your Vercel deployment link here once you have it)**

## **Project Overview**

[cite_start]The application consists of two main pages as per the assignment requirements:

1. [cite_start]**Add School Page (`/add-school`)**: A responsive form for users to input school details. It includes client-side validation for all fields and handles image uploads.

2. [cite_start]**Show Schools Page (`/show-schools`)**: A responsive, grid-based gallery that fetches and displays all the schools from the database, similar to an e-commerce product listing.

## **Tech Stack**

This project was built using the following technologies:

* [cite_start]**Framework**: Next.js (React) 
* **Styling**: Tailwind CSS
* [cite_start]**Form Management**: `react-hook-form` 
* [cite_start]**Database**: MySQL  (hosted on Railway)
* **Backend API**: Next.js API Routes with `next-connect`
* **File Uploads**: `multer`
* [cite_start]**Deployment**: Vercel 

## **Features**

* **Full-stack CRUD Functionality**: Create and Read operations for school data.
* [cite_start]**Responsive Design**: The user interface is fully responsive and works seamlessly on both mobile and desktop devices. 
* [cite_start]**Form Validation**: Robust client-side validation using `react-hook-form` ensures data integrity before submission. 
* [cite_start]**Image Uploads**: The form supports image file uploads, which are handled by the backend API. 
* **Dynamic Data Fetching**: The `/show-schools` page uses Server-Side Rendering (`getServerSideProps`) to fetch the latest data from the database on every request.

## **Local Setup and Installation**

To run this project on your local machine, please follow these steps:

**Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
   cd your-repo-name
   npm install


Set up environment variables:
Create a file named .env.local in the root of the project and add your MySQL database credentials:

DB_HOST=your_database_host
DB_PORT=your_database_port
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name

Run the development server:
npm run dev

Of course. Here is the direct, raw text for your README.md file.

You can copy everything inside the box below and paste it into a new file named README.md in your project's main folder.

Markdown

# School Management Mini-Project

This project is a submission for the Web Development Assignment from Reno Platforms. It is a full-stack application built with Next.js and MySQL that allows users to add new school data through a form and view all submitted schools on a separate page.

### **Live Demo**

The project is hosted on Vercel. You can view the live version here:

**(Insert your Vercel deployment link here once you have it)**

## **Project Overview**

[cite_start]The application consists of two main pages as per the assignment requirements:

1. [cite_start]**Add School Page (`/add-school`)**: A responsive form for users to input school details. It includes client-side validation for all fields and handles image uploads.

2. [cite_start]**Show Schools Page (`/show-schools`)**: A responsive, grid-based gallery that fetches and displays all the schools from the database, similar to an e-commerce product listing.

## **Tech Stack**

This project was built using the following technologies:

* [cite_start]**Framework**: Next.js (React) 
* **Styling**: Tailwind CSS
* [cite_start]**Form Management**: `react-hook-form` 
* [cite_start]**Database**: MySQL  (hosted on Railway)
* **Backend API**: Next.js API Routes with `next-connect`
* **File Uploads**: `multer`
* [cite_start]**Deployment**: Vercel 

## **Features**

* **Full-stack CRUD Functionality**: Create and Read operations for school data.
* [cite_start]**Responsive Design**: The user interface is fully responsive and works seamlessly on both mobile and desktop devices. 
* [cite_start]**Form Validation**: Robust client-side validation using `react-hook-form` ensures data integrity before submission. 
* [cite_start]**Image Uploads**: The form supports image file uploads, which are handled by the backend API. 
* **Dynamic Data Fetching**: The `/show-schools` page uses Server-Side Rendering (`getServerSideProps`) to fetch the latest data from the database on every request.

## **Local Setup and Installation**

To run this project on your local machine, please follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
   cd your-repo-name
Install dependencies:

Bash

npm install
Set up environment variables:
Create a file named .env.local in the root of the project and add your MySQL database credentials:

DB_HOST=your_database_host
DB_PORT=your_database_port
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
Run the development server:

Database Schema
The project uses a single table named 

schools in a MySQL database with the following schema:

SQL

CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    contact BIGINT,
    image TEXT,
    email_id TEXT
);

npm run dev
Open http://localhost:3000 in your browser to see the application.


Of course. Here is the direct, raw text for your README.md file.

You can copy everything inside the box below and paste it into a new file named README.md in your project's main folder.

Markdown

# School Management Mini-Project

This project is a submission for the Web Development Assignment from Reno Platforms. It is a full-stack application built with Next.js and MySQL that allows users to add new school data through a form and view all submitted schools on a separate page.

### **Live Demo**

The project is hosted on Vercel. You can view the live version here:

**(Insert your Vercel deployment link here once you have it)**

## **Project Overview**

[cite_start]The application consists of two main pages as per the assignment requirements:

1. [cite_start]**Add School Page (`/add-school`)**: A responsive form for users to input school details. It includes client-side validation for all fields and handles image uploads.

2. [cite_start]**Show Schools Page (`/show-schools`)**: A responsive, grid-based gallery that fetches and displays all the schools from the database, similar to an e-commerce product listing.

## **Tech Stack**

This project was built using the following technologies:

* [cite_start]**Framework**: Next.js (React) 
* **Styling**: Tailwind CSS
* [cite_start]**Form Management**: `react-hook-form` 
* [cite_start]**Database**: MySQL  (hosted on Railway)
* **Backend API**: Next.js API Routes with `next-connect`
* **File Uploads**: `multer`
* [cite_start]**Deployment**: Vercel 

## **Features**

* **Full-stack CRUD Functionality**: Create and Read operations for school data.
* [cite_start]**Responsive Design**: The user interface is fully responsive and works seamlessly on both mobile and desktop devices. 
* [cite_start]**Form Validation**: Robust client-side validation using `react-hook-form` ensures data integrity before submission. 
* [cite_start]**Image Uploads**: The form supports image file uploads, which are handled by the backend API. 
* **Dynamic Data Fetching**: The `/show-schools` page uses Server-Side Rendering (`getServerSideProps`) to fetch the latest data from the database on every request.

## **Local Setup and Installation**

To run this project on your local machine, please follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
   cd your-repo-name
Install dependencies:

Bash

npm install
Set up environment variables:
Create a file named .env.local in the root of the project and add your MySQL database credentials:

DB_HOST=your_database_host
DB_PORT=your_database_port
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
Run the development server:

Bash

npm run dev
Open http://localhost:3000 in your browser to see the application.

Database Schema
The project uses a single table named 

schools in a MySQL database with the following schema:

SQL

CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    contact BIGINT,
    image TEXT,
    email_id TEXT
);
Known Limitations
Image Storage on Vercel: The current implementation saves uploaded images to the local filesystem of the server. This works perfectly in a local development environment. However, on serverless platforms like Vercel, the filesystem is ephemeral, and uploaded images will not persist permanently. For a production-ready application that can be hosted as required, the next step would be to integrate a dedicated cloud storage service like Cloudinary or AWS S3.

