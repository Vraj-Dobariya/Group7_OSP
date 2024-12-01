
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
- MongoDB: v5.0 or later  

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

### ExpressJS Installation  
Install Express.js in the project directory:  
```bash
npm install express  
```  
More information: [Express.js Official Website](https://expressjs.com/en/starter/installing.html)  

### MongoDB Installation  
Install MongoDB driver for Node.js:  
```bash
npm install mongodb  
```  
More information: [MongoDB Official Website](https://www.mongodb.com/)  

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
  - MongoDB  

- **Testing Tools:**  
  - Mocha, Chai, Postman  

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
- **Database:** MongoDB hosted on MongoDB Atlas  

---

# Contributors  
[Anuj Contractor](https://github.com/anujcontractor)  
[Harsh Mungara](https://github.com/Harsh62004)  
[Priyanshu Gagiya](https://github.com/PriyanshuGagiya)  
[Dharmin Patel](https://github.com/Dharmin721)  
[Aaditya Makwana](https://github.com/Aaditya-Makwana)  
[Bansri Patel](https://github.com/IceStone16)  
[Het Patel](https://github.com/hetpatel25)  
[Mann Kataria](https://github.com/MannKataria)  
[Poojan Shah](https://github.com/PxbxShah)  
[Shwet Patel](https://github.com/Shwet-Patel)  
[Vishvas Solanki](https://github.com/Visvas-0440)  
```

### Instructions:
1. Replace `https://github.com/your-repo/scholarship-portal.git` with your actual GitHub repository URL.
2. Save this code as `README.md` in your project directory.
3. Push the file to your GitHub repository.

Let me know if you need additional edits!
