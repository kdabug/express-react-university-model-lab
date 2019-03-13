# Express and React with One Model 

#### For this assignment, you will be building out the back-end followed by the front-end, using Express and React, respectively.

Review the repositories of similar full stack CRUD apps we did in class for references on creating your routes.

Please read through all sections before beginning.

*******

# Back-end
![](https://media.giphy.com/media/3o6ZtpWvwnhf34Oj0A/giphy.gif)

## Getting started on the back-end

- Clone down this repo and `cd` into it
- Run `createdb school_db`
- `npm install`
- Run `npm run resetdb`
- Run `npm run seed` (after creating the seed data)
- Run `npm run dev`

We have provided you starter code, inside of `models.js`, and a skeleton of `server.js`. You will be providing the data for `seed.js`, so be creative! 

Look through the `seed.js` file, we have given you an example of how to write the data for Student. Write the data to insert into our three models.

### Deliverables
1. Create four students. **You are not required to create seed data for Class or Intructor, we will build this out next week**
1. In `server.js` initiate routes for the index route and the create route, delete is fair game(it will not be counted against your completion mark if it doesn't work).
1.  Student routes should use `GET /students` and `POST /students` endpoints.
1.  Please provide at least four logical commits when setting up the back-end and add comments where appropriate

************

## Getting started on the front-end

- Run `npm install` inside the client folder.
- Run `npm run start` to launch the client side (in a separate terminal window)

### Deliverables
1. Create a students list component that renders students fetched from the server.
1. Write a student services file that makes axios requests which exports functions that makes requests to:
-  GET `/students`
-  POST  `/students`
3. Implement onChange and onSubmit handlers in the form
4. Style your app using CSS, this would be a great time to practice grid or flexbox! Feeling adventurous? Look into [React-Bootstrap](https://react-bootstrap.github.io/) 
5. Please provide at least four logical commits when setting up the front-end and add comments where appropriate.



## Bonus:

1. Implement delete functionality on the front-end.

![](https://media.giphy.com/media/3orieYvLZXsgTkOHza/giphy.gif)

