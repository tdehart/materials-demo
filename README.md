## How to run the project
Install dependencies:
```bash
npm install
```

Run the test suite:
```bash
npm run test
```

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser

## Description
* Time spent: 3 hours development, 1 hour getting test suite working
* Entry point: `pages/index.js`
* Seed data: `utils/data.js`

### Tools used:
* [Next.js](http://localhost:3000) - Useful for bootstrapping a React project. Gives you the ability to write a simple backend API, deploy static assets, and page-based routing system.
* [Material-UI](https://material-ui.com/) - React component library that allowed me to build the app much more quickly. Third-party plugins also allowed me to include a date picker and color picker without a lot of effort.

### Limitations:
* No type-checking - I usually use TypeScript for all new projects but I prioritized UX over 
* No state management library - Since the app was limited in scope I chose to stick with React component state as opposed to something like Redux.
* Theme - I used Material-UI's theming system since it has sensible defaults and matching the styles from the mocks would take a lot more time without providing a much additional utility.