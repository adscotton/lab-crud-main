- This project is about CRUD operations and demonstrating the basics of it -

Applications needed to install before proceeding into steps:
1. Node JS - https://nodejs.org/en/download
2. Postman - https://www.postman.com/downloads/
3. VS Code - https://code.visualstudio.com/download
4. Git Bash - https://git-scm.com/downloads
5. XAMPP Control Panel - https://www.apachefriends.org/download.html

Steps for set up:
1. Open XAMPP and turn on Apache and MySQL
2. go to phpadmin
3. Make a user account
4. Make a database and two tables (courses and students table)
     the variables for students: id, name, email, course, year_level
     the variables for courses: id, code, title, units


Reminder: change the DB_USER and DB_PASS to your user and pass created in phpadmin panel a while ago

go to your directory file using CMD and do "npm run dev"

try to run --> http://localhost:3000/api/health  in your browser (if it says "ok" or "connected" you are good to go)

API Endpoints using Postman
- for students
  1. POST {{baseUrl}}/students - add a new student
     > go to BODY TAB and select RAW
     >input this sample script (if you want to change it)
     > {
            "name" : "Juan Dela Cruz",
            "email" : "juan@example.com",
            "course" : "BSIT",
            "year_level": 2
       }
  3. GET {{baseUrl}}/students - get all student/s that were posted
  4. GET {{baseUrl}}/students/:id - get student by its id (Change the ID you want to get in ":id" example: "{{baseUrl}}/students/:1")
  5. PUT {{baseUrl}}/students/:id - update student information by its id
     > go to BODY TAB and select RAW
     >input this sample script (if you want to update the information referred to the selected id)
     > {
            "name" : "Juan Dela Cruz",
            "email" : "juan@gmail.com",
            "course" : "BSIT",
            "year_level": 2
       }
  7. DELETE {{baseUrl}}/students/:id - delete student by its id
- for courses
  1. POST {{baseUrl}}/courses – add a new course
      > go to BODY TAB and select RAW
     >input this sample script (if you want to change it)
     > {
             "code" : "ICS2604",
             "title" : "Data Structures",
             "units" : 10
       }
  3. GET {{baseUrl}}/courses – get all course/s that were posted
  4. GET {{baseUrl}}/courses/:id – get course by its id
  5. PUT {{baseUrl}}/courses/:id – update course information by its id
     > go to BODY TAB and select RAW
     >input this sample script (if you want to update the information referred to the selected id)
     > {
               "code": "ICS2603",
               "title": "Data Structures",
               "units": 10
       }
  7. DELETE {{baseUrl}}/courses/:id – delete course by its id
 
- Short Notes - 

This project is about practicing CRUD operations using Node.js, MySQL, and Postman. At first, I had issues
with the port configuration and internet connection since Postman needs internet to work properly. I also
faced problems in setting up the controller and routes for courses, but I was able to fix them by checking
and following the structure of the student’s controller and routes. After resolving these, the API endpoints
worked successfully for both students and courses.





