# Notes

1. Create application directory [`00-my-app`](../00-my-app/):
    * `New-Item -ItemType 'directory' -Name 00-my-app`

        ```console
        PS C:\Users\FlynntKnapp\Programming\react-tutorial\paths\hello-world-path> New-Item -ItemType 'directory' -Name 00-my-app        

            Directory: C:\Users\FlynntKnapp\Programming\react-tutorial\paths\hello-world-path

        Mode                 LastWriteTime         Length Name
        ----                 -------------         ------ ----
        d----          12/30/2022  4:23 AM                00-my-app

        PS C:\Users\FlynntKnapp\Programming\react-tutorial\paths\hello-world-path>
        ```

1. Create directory [`00-my-app/public/`](../00-my-app/public/):
    * `New-Item -ItemType 'directory' -Name 00-my-app\public`

        ```console
        PS C:\Users\FlynntKnapp\Programming\react-tutorial\paths\hello-world-path> New-Item -ItemType 'directory' -Name 00-my-app\public        

            Directory: C:\Users\FlynntKnapp\Programming\react-tutorial\paths\hello-world-path\00-my-app

        Mode                 LastWriteTime         Length Name
        ----                 -------------         ------ ----
        d----          12/30/2022  4:28 AM                public

        PS C:\Users\FlynntKnapp\Programming\react-tutorial\paths\hello-world-path>
        ```

1. Create file [`00-my-app/public/index.html`](../00-my-app/public/index.html):
    * `New-Item -ItemType 'file' -Name 00-my-app\public\index.html`

        ```console
        PS C:\Users\FlynntKnapp\Programming\react-tutorial\paths\hello-world-path> New-Item -ItemType 'file' -Name 00-my-app\public\index.html

            Directory: C:\Users\FlynntKnapp\Programming\react-tutorial\paths\hello-world-path\00-my-app\public

        Mode                 LastWriteTime         Length Name
        ----                 -------------         ------ ----
        -a---          12/30/2022  4:33 AM              0 index.html

        PS C:\Users\FlynntKnapp\Programming\react-tutorial\paths\hello-world-path>
        ```

1. Create directory [`00-my-app/src/`](../00-my-app/src/):
    * `New-Item -ItemType 'directory' -Name 00-my-app\src`

        ```console
        PS C:\Users\FlynntKnapp\Programming\react-tutorial\paths\hello-world-path> New-Item -ItemType 'directory' -Name 00-my-app\src

            Directory: C:\Users\FlynntKnapp\Programming\react-tutorial\paths\hello-world-path\00-my-app

        Mode                 LastWriteTime         Length Name
        ----                 -------------         ------ ----
        d----          12/30/2022  4:35 AM                src

        PS C:\Users\FlynntKnapp\Programming\react-tutorial\paths\hello-world-path>
        ```

1. Create file [`00-my-app/src/index.js`](../00-my-app/src/index.js):
    * `New-Item -ItemType 'file' -Name 00-my-app\src\index.js`

        ```console
        PS C:\Users\FlynntKnapp\Programming\react-tutorial\paths\hello-world-path> New-Item -ItemType 'file' -Name 00-my-app\src\index.js

            Directory: C:\Users\FlynntKnapp\Programming\react-tutorial\paths\hello-world-path\00-my-app\src

        Mode                 LastWriteTime         Length Name
        ----                 -------------         ------ ----
        -a---          12/30/2022  4:36 AM              0 index.js

        PS C:\Users\FlynntKnapp\Programming\react-tutorial\paths\hello-world-path>
        ```

1. Add contents to [`00-my-app/public/index.html`](../00-my-app/public/index.html):

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React Application: Hello, World Path</title>
    </head>
    <body>

        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
        
    </body>
    </html>
    ```

1. Add contents to [`00-my-app/src/index.js`](../00-my-app/src/index.js):

    ```javascript
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<h1>Goodbuy, World! Enjoy the Sails!</h1>);
    ```

1. Attempt to start the app:
    * `npm start`

        ```console
        PS C:\Users\FlynntKnapp\Programming\react-tutorial\paths\hello-world-path\00-my-app> npm start   

        > 00-my-app@0.1.0 start
        > react-scripts start

        'react-scripts' is not recognized as an internal or external command,
        operable program or batch file.
        PS C:\Users\FlynntKnapp\Programming\react-tutorial\paths\hello-world-path\00-my-app>
        ```

    * Need to run `npm install`

1. Install dependencies:
    * `npm install`

        ```console
        PS C:\Users\FlynntKnapp\Programming\react-tutorial\paths\hello-world-path\00-my-app> npm install
        npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
        npm WARN deprecated rollup-plugin-terser@7.0.2: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-terser
        npm WARN deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
        npm WARN deprecated w3c-hr-time@1.0.2: Use your platform's native performance.now() and performance.timeOrigin.
        npm WARN deprecated svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.

        added 1400 packages, and audited 1401 packages in 38s

        226 packages are looking for funding
          run `npm fund` for details

        10 high severity vulnerabilities

        To address all issues (including breaking changes), run:
          npm audit fix --force

        Run `npm audit` for details.
        PS C:\Users\FlynntKnapp\Programming\react-tutorial\paths\hello-world-path\00-my-app>
        ```

1. Attempt to start the app:
    * `npm start`

        ```console
        PS C:\Users\FlynntKnapp\Programming\react-tutorial\paths\hello-world-path\00-my-app> npm start

        > 00-my-app@0.1.0 start
        [eslint]
        src\index.js
          Line 1:14:  'ReactDOM' is not defined  no-undef

        Search for the keywords to learn more about each error.
        ERROR in [eslint]src\index.js
          Line 1:14:  'ReactDOM' is not defined  no-undef

        Search for the keywords to learn more about each error.

        webpack compiled with 1 error
        ```

    * Need to add `import ReactDOM from 'react-dom';` to [`00-my-app/src/index.js`](../00-my-app/src/index.js)

1. New contents of [`00-my-app/src/index.js`](../00-my-app/src/index.js):

    ```javascript
    import ReactDOM from 'react-dom';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<h1>Goodbuy, World! Enjoy the Sails!</h1>);
    ```

1. It seems that the following minumum files are required to create a React app:
    * [`00-my-app/public/index.html`](../00-my-app/public/index.html)
    * [`00-my-app/src/index.js`](../00-my-app/src/index.js)
    * [`00-my-app/package.json`](../00-my-app/package.json)

1. [React App Hello, World Summary](./react_app_hello_world_summary.md)
    * Notes:
        * `create-react-app` is a tool that creates a React app with a specific set of files, including a `package.json` file, but there may be more files included than necessary.
        * Need to strategically remove objects from the [`00-my-app/package.json`](../00-my-app/package.json) file to reduce the number of dependencies.
