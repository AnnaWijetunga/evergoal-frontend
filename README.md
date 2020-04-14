# EVERGOAL README

You're reading the front end of Evergoal! Visit here for the back end: 

https://github.com/AnnaWijetunga/evergoal-backend

# Evergoal (front end)

Evergoal was built using a Rails API back end, which the front end, built with Javascript (React/Redux), communicates with. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

## Overview

Evergoal is perfect for professionals who want to organize their personal and professional goals in one tidy place. This goal organizer can help keep you organized while also tracking goal progress over time.

You can add a new goal, and within that goal, add new objectives to help keep your goal actionable. Once an objective is complete, you can check the box - complete! You can delete the entire goal, or any of the objectives, at any time.

## Installation

Fork and clone repo

    $ git clone https://github.com/AnnaWijetunga/evergoal-backend
    $ git clone https://github.com/AnnaWijetunga/evergoal-frontend

Using two termainals, switch to each respective directory

    $ cd evergoal-backend
    $ cd evergoal-frontend

Startup the server (within the back end terminal)

    $ rails s

Enter in browser to launch the rails server

    $  localhost:3000

Startup the server (within the front end terminal)

    $ npm start

You may be prompted to use an alternate port - type Y or YES. Then a new browser window will open with Evergoal.

## Usage

Welcome! Click My Goals, and there you will see the a form for setting a new goal. You will add the Aim (short title) and your Strategy (a sentence or two encapsulating how you'll attack this goal).

Click Add Goal to add the goal!

Once added, it will display above the form - and there you can click on that goal to edit it and add objectives OR you can delete the goal.

If choosing to edit, click on that goal and then you can add objectives to your goal. Make them actionable and bite-sized, usually a sentence or fragment will do. Click submit or hit enter and your objective will be posted. 

From there, you can check the box, to show you've completed an objective, or you can click to X to delete it entirely.

Click Home at any time to go back to your Homepage, and click My Goals to continue working on existing goals or add a new one. Happy goal setting!

## Contributing

This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Evergoal project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/<AnnaWijetunga>/evergoal-frontend/blob/master/CODE_OF_CONDUCT.md).


## Additional Notes: Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
