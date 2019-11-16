# train-scheduler
Using the train scheduler, users can add a train, destination, the first arrival time, and the frequency of the train. That information will then be added to the table and stored in a Firebase database, so the page keeps a running table of the trains unless the database is cleared. The table will then make the calculations to display the next arrival time and how many minutes away that is. The app makes these calculations using Moment.js.

## Link to the App
https://bhuber23.github.io/train-scheduler/

## Technologies Used
- HTML
- CSS
- Bootstrap 
- jQuery
- Moment.js
- Firebase Database

## Features
- Users will add their desired train, the destination, the first arrival time, and the frequency
- After submitting their train, the table updates with the information for the train and will update in real time, showing the next arrive time and how many minutes away it is. 
- Users can add multiple trains and the table will keep track of all the data. The data will remain even after page refreshes or if they navigate away from the page and come back to it. 

![Example Functionality](assets/images/example-train.gif)

