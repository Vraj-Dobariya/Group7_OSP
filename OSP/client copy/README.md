
# Scholarship Portal  

## Table of Contents  
* [Introduction](#introduction)  
* [Updates](#updates)  
* [Requirements](#requirements)  
* [Installation Guide](#installation-guide)  
  * [Front-end](#front-end)  
  * [Back-end](#back-end)  
* [Features](#features)  
* [Tech Stack](#tech-stack)  
* [Functionalities](#functionalities)  
  * [Student Features](#student-features)  
  * [Admin Features](#admin-features)  
* [Future Enhancements](#future-enhancements)  
* [Deployment](#deployment)  
* [Contributors](#contributors)  

---

# Introduction  
The **Scholarship Portal** is a modern web application designed to simplify the scholarship process for students and administrators. It offers a seamless platform for students to register, apply for scholarships, track their application statuses, and upload required documents, while administrators can efficiently manage scholarships and applications.  

---

# Updates  

- **3/11/23 Meet 1:** Brainstormed and shortlisted project ideas.  
- **7/11/23 Meet 2:** Finalized the project idea and defined core functionalities.  
- **12/11/23 Meet 3:** Divided work among team members and created the project repository.  
- **15/11/23 Meet 4:** Designed the UI/UX mockups and finalized the database schema.  
- **20/11/23 Meet 5:** Implemented student registration and login features.  
- **25/11/23 Meet 6:** Developed the scholarship application and profile management modules.  
- **30/11/23 Meet 7:** Integrated the admin dashboard and notification system.  
- **5/12/23 Meet 8:** Conducted end-to-end testing and finalized deployment.  

---

# Requirements  

### Software Requirements  
- Operating System: Windows/Linux/MacOS  
- Node.js: v18.17.1 or later  
- PostgreSQL: v14.0 or later  

### Hardware Requirements  
- Processor: Intel i3 or equivalent  
- RAM: 4GB or higher  
- Storage: Minimum 100MB for application files  

---

# Installation Guide  

## Front-end  
- Clone the repository:  
  ```bash
  git clone https://github.com/your-repo/scholarship-portal.git
  cd scholarship-portal
  ```
- Open the `index.html` file in your browser to test the front-end components.  

## Back-end  

### Node  

- #### Node installation on Windows  
  Download and install Node.js from the [official Node.js website](https://nodejs.org/).  

- #### Node installation on Ubuntu  
  Run the following commands:  
  ```bash
  sudo apt install nodejs  
  sudo apt install npm  
  ```

- #### Verify Installation  
  ```bash
  node --version  
  npm --version  
  ```

- #### Update npm (if required)  
  ```bash
  npm install npm -g  
  ```

### Express.js Installation  
Install Express.js in the project directory:  
```bash
npm install express  
```  
More information: [Express.js Official Website](https://expressjs.com/en/starter/installing.html)  

### PostgreSQL Installation  

#### Windows:  
1. Download the installer from the [official PostgreSQL website](https://www.postgresql.org/download/).  
2. Follow the installation wizard to set up PostgreSQL and pgAdmin.  
3. Create a database for the project.  

#### Ubuntu:  
1. Update your package list and install PostgreSQL:  
   ```bash
   sudo apt update  
   sudo apt install postgresql postgresql-contrib  
   ```
2. Verify the installation:  
   ```bash
   psql --version  
   ```

#### macOS:  
1. Install PostgreSQL using Homebrew:  
   ```bash
   brew install postgresql  
   ```
2. Start the PostgreSQL service:  
   ```bash
   brew services start postgresql  
   ```

#### Setting up the Database:  
1. Access the PostgreSQL interactive terminal:  
   ```bash
   psql -U postgres  
   ```
2. Create a new database for the project:  
   ```sql
   CREATE DATABASE scholarship_portal;  
   ```
3. Grant privileges to the user (if applicable):  
   ```sql
   GRANT ALL PRIVILEGES ON DATABASE scholarship_portal TO your_user;  
   ```

4. Configure your `.env` file with the database connection:  
   ```env
   DB_HOST=localhost  
   DB_PORT=5432  
   DB_USER=your_user  
   DB_PASSWORD=your_password  
   DB_NAME=scholarship_portal  
   ```

---

# Features  

- **Student Registration and Login:**  
  - Secure account registration with OTP verification.  
  - Login with "Forgot Password" functionality for account recovery.  

- **Scholarship Application Management:**  
  - Students can view available scholarships and apply with required details and documents.  
  - Real-time updates on application statuses (e.g., Under Review, Accepted, Rejected).  

- **Profile and Document Management:**  
  - Update personal details and securely upload documents.  
  - Validate file size and format during uploads.  

- **Admin Dashboard and Controls:**  
  - Add, update, and delete scholarships.  
  - Review applications and update statuses.  
  - View analytics on active users and applications.  

- **Notifications:**  
  - Notify students about application updates and deadlines.  

---

# Tech Stack  

- **Frontend:**  
  - HTML, CSS, JavaScript  

- **Backend:**  
  - Node.js, Express.js  

- **Database:**  
  - PostgreSQL  

- **Testing Tools:**  
  - Jest, SeleniumIDE
---

# Functionalities  

## Student Features  

- **Account Management:**  
  - Register with OTP-based verification.  
  - Login and recover accounts using "Forgot Password".  

- **Scholarship Application:**  
  - Browse available scholarships and apply with necessary documents.  
  - Edit applications before submission and track their statuses.  

- **Profile Management:**  
  - Update personal details and securely upload documents.  

## Admin Features  

- **Scholarship Management:**  
  - Add, update, or delete scholarships.  

- **Application Review:**  
  - Review student applications and change statuses.  

- **Analytics:**  
  - View analytics on total users and active scholarships.  

---

# Future Enhancements  

- **Payment Gateway Integration:**  
  - Enable online payment for application fees or premium scholarships.  

- **Enhanced Document Validation:**  
  - Automate document verification for accuracy and completeness.  

- **Mobile App Development:**  
  - Develop a mobile-friendly app for easier access.  

- **Personalized Scholarship Recommendations:**  
  - Suggest scholarships based on student profiles.  

- **Multi-language Support:**  
  - Enable access to the portal in multiple languages.  

---

# Deployment  
The application is hosted on a cloud platform with the following setup:  
- **Backend:** Node.js server deployed on AWS EC2  
- **Database:** PostgreSQL hosted on AWS RDS  

---

# Contributors  
[Vraj Dobariya](https://github.com/anujcontractor)  
[Om Patel](https://github.com/Harsh62004)  
[Dip Baldha](https://github.com/PriyanshuGagiya)  
[Kashvi Bhanderi](https://github.com/Dharmin721)  
[Krisha Brahmbhatt](https://github.com/Aaditya-Makwana)  
[Nishil Patel](https://github.com/IceStone16)  
[Akshat joshi](https://github.com/hetpatel25)  
[Dhruv Suri](https://github.com/MannKataria)  
[Vidhan Chavda](https://github.com/PxbxShah)  
 


