# React App Hello, World Summary

* [`00-my-app/public/index.html`](../00-my-app/public/index.html):

    ```html
    <div id="root"></div>
    ```

* [`00-my-app/src/index.js`](../00-my-app/src/index.js):

    ```js
    import ReactDOM from 'react-dom';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <h1>React Application: Hello, World Path</h1>
    );

    ```

* [`00-my-app/package.json`](../00-my-app/package.json):

    ```json
    {
      "name": "00-my-app",
      "version": "0.1.0",
      "private": true,
      "dependencies": {
        "@testing-library/jest-dom": "^5.16.5",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^13.5.0",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-scripts": "5.0.1",
        "web-vitals": "^2.1.4"
      },
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
      },
      "eslintConfig": {
        "extends": [
          "react-app",
          "react-app/jest"
        ]
      },
      "browserslist": {
        "production": [
          ">0.2%",
          "not dead",
          "not op_mini all"
        ],
        "development": [
          "last 1 chrome version",
          "last 1 firefox version",
          "last 1 safari version"
        ]
      }
    }
    ```