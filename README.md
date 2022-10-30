# congressional-app-challenge-2022
Congression App Challenge 2022
Please list the link to your app's video demonstration here:

Please briefly describe what your app does?

Mathware is an app that will start users with simple questions and work its way up in difficulty as the user progresses. Levels are locked until the user completes the previous level to ensure that the user has a fulfilling learning experience. 

In each level, the user must complete 10 questions to prove that they have a quality understanding of the topic. Users are rewarded 10% progress in the level if they get a question right, and are penalized 10% if they get a question wrong. Topics that users will be quizzed on: include Addition, Subtraction, Multiplication, Division, and mod problems; ranging from easy to difficult. The problems are created using randomly generated numbers.

Once the user gets 100% progress on a level, they have the option to go to the next level or go back to the level select screen. You will notice that as the user progresses through their levels, their progress saves with them, so they can come back to the app at any time. 


What inspired you to create this app?

We believe that in order to be successful in math, you must be strong with the basics. Although basic math is a big focus in school, some students don’t learn as well without hands-on activities. We know that in our technological world, success in mathematics is vital for everyone. We wanted to create a tool that allowed struggling students another chance to master their basic skills. We felt a need for an app where students can interact with equations to learn strategies that will apply to their future education. Our hope is that this app will lead to more students experiencing success in their schools.

What technical difficulties did you face programming your app?

One difficulty that we encountered while creating our application is the level-locking feature. This feature was a complex task, because of the logic it required. The levels are stored in local storage, so their values will be retained even if the page is refreshed or opened in a new session.

We had to create a method that would check if the user had ever saved data. If not, then we need to set the initial level number to 1. We also constructed a system where we get each level button, and iterate through them. If their id , or display number, is greater than the number of unlocked levels, then they are assigned a “locked” class. This way if they aren’t clickable, they are not unlocked. This system is infinitely scalable throughout the app.


What improvements would you make if you were to create a 2.0 version of your app? 

If there was a 2.0 version of our app, we would include more features to help the users mathematical capabilities. For example we would add a placement test that would determine the user's previous math skills. This would further enhance the user's learning experience by putting them at the appropriate level. Another thing we would add to our app is an explanation for users who get a problem wrong. This would describe to them the correct process on how to solve the math equation, so they can learn and apply these strategies in the future.

Please include a cover photo from your app
![CoverPhoto2022](https://user-images.githubusercontent.com/104118496/198877573-833804ec-89ac-4ae1-a48b-84257fd85658.png)


