# Express and React with One Model 

#### For this assignment, you will be building out the back-end followed by the front-end, using Express and React, respectively.

Review the repositories of similar full stack CRUD apps we did in class for references on creating your routes.

Please read through all sections before beginning.

*******

## Getting started on the back-end

![](https://media.giphy.com/media/3o6ZtpWvwnhf34Oj0A/giphy.gif)

- Clone down this repo and `cd` into it
- Run `createdb school_db`
- `npm install`
- Run `npm run resetdb`
- Run `npm run seed` (after creating the seed data)
- Run `npm run dev`
- Check your package.json file to make sure you have all of the normal dependencies that we've been using for CRUD apps.

We have provided you starter code, inside of `models.js`, and a skeleton of `server.js`. You will be providing the data for `seed.js`, so be creative! 

Look through the `seed.js` file, we have given you an example of how to write the data for Student. Write the data to insert into our three models.

### Deliverables
1. Take a looke at `models.js` and familiarize yourself with the Student and Instructor models and their relationship to each other.
1. In the `seed.js` file, create at least four students and one instructor. After creating them, make sure to `set` the relationship between each student and their instructor. 
1. In `server.js` initiate routes for the STUDENTS index route, show route, create route, and delete route. For a bonus, feel free to take a stab at an update route or try setting up CRUD routes for the Instructor model.
1.  Hint: Student belong to instructors, so your five routes should use `/instructors/:id/students` and `/instructors/:instructor_id/students/:id` as base endpoints
1.  Hint: For the `post` route, you'll need to use `await instructor.addStudents(student)` to establish the new student's instructor_id.
1.  Please provide at least four logical commits when setting up the back-end and add comments where appropriate

************

## Getting started on the front-end

- Run `npm install` inside the client folder.
- Run `npm run start` to launch the client side (in a separate terminal window)
- Check your package.json file to make sure you have all of the normal dependencies that we've been using for CRUD apps. Make sure you have cors set up!

### Deliverables
1. Create a students list component that renders students fetched from the server.
1. Write a student services file that makes axios requests with functions that make requests to:
-  GET `/instructors/{id}/students`
-  POST  `/instructors/{id}/students`
-  GET `/instructors/{instructor_id}/students/{id}`
-  DELETE `/instructors/{instructor_id}/students/{id}`
3. Implement onChange and onSubmit handlers in the form
5. Please provide at least four logical commits when setting up the front-end and add comments where appropriate.



## Bonus:

1. Style your app using CSS. This would be a great time to practice grid or flexbox!

![](https://media.giphy.com/media/yYSSBtDgbbRzq/giphy.gif)

