# VFCrypt application

## Notes

- I went slightly against recommendations of using Redux and Redux Saga as I couldn't resist the change to play with hooks-based state using useReducer and useContext. If you like to see some Redux based examples, see this repo (previous test) https://github.com/frontendjim/movie-listings.

- I've made no provision for tests or error handling (wrist slap) as I felt this is beyond scope for now.

- Due to the API now block client side requests via Cors, I've had to roll a VERY simple and dirty express app to proxy requests through. Don't judge me on that ha!

- I've used very simple type checking and validation via PropTypes

- No thought for responsive design but doesn't break too badly

## Pre-requisites

- Node v10+ https://nodejs.org/en/

## Running the app

### Install project dependencies

```
yarn install
```

or

```
npm install
```

### Start the app

```
yarn start
```

or

```
npm start
```

This will start both the "API" and the App. The API runs on port 5000 and the app runs on port 3000.

## Tools used

- VS Code
- Prettier
- ESlint
- Create React App
- Yarn
