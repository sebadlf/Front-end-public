# Front-end Test

### Repository 
https://github.com/sebadlf/Front-end

### Public App 

https://frontend-test-sebadlf.herokuapp.com

## Notable Technical Stack Libraries

- React: UI rendering Library
- Redux: State Management
- React Router: Routing Management. 
- Sass: I prefer working with SCSS files instead of plain css.
- Classnames: Conditional styles.
- Time Ago: Time difference at List items. 
- React Sizes: To identify the screen resolution and choose how the sidebar should behave. 

## Missing parts

- Pagination support: Since I didn't have the opportunity to use a real api, I prefered to continue with other parts of the app.
- Saving pictures in the picture gallery: Not as important as other parts of the app.
- App state-preservation/restoration: While I didn't have the time to implement this. I probably would subscribe to the store changes and serialize the content into local state. When restoring the app I could deserialize the content and use it as initial state.
- Responsive design: I only made an small implementation to hide the bar for screens under 960px. A mobile experience should include at least the ability to navigate between the list and the posts as two separate screens. 
- Animations and Gestures in general

## Application Flaws

- All the missing parts described before
- The list component has the responsability to maintain as state the size of the screen. I would prefer to use the redux store for this. I didn't have the time to refactor this part. 
- Lack of unit testing and prop validations

## Decisions

 - I could use @reach/router which is the recommendation going forward. I decided to go safe in this since I wanted to finish in less than 5 hours
 - In real life, I probably would use the Context API instead of Redux for an app of this size. 
