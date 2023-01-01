# Process

1. Start in project root directory.

1. Use `create-react-app` to create a new React app:
    * `npx create-react-app the-react-app`
        * Sample console output:

            ```console
            PS C:\Users\FlynntKnapp\Programming\react-tutorial> npx create-react-app the-react-app
            Need to install the following packages:
              create-react-app@5.0.1
            Ok to proceed? (y) y
            npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.
            
            Creating a new React app in C:\Users\FlynntKnapp\Programming\react-tutorial\the-react-app.
            
            Installing packages. This might take a couple of minutes.
            Installing react, react-dom, and react-scripts with cra-template...
            
            
            added 1397 packages in 45s
            
            214 packages are looking for funding
              run `npm fund` for details
            
            Installing template dependencies using npm...
            
            added 71 packages in 8s
            
            226 packages are looking for funding
              run `npm fund` for details
            Removing template package using npm...
            
            
            removed 1 package, and audited 1468 packages in 4s
            
            226 packages are looking for funding
              run `npm fund` for details
            
            10 high severity vulnerabilities
            
            To address all issues (including breaking changes), run:
              npm audit fix --force
            
            Run `npm audit` for details.
            
            Success! Created the-react-app at C:\Users\FlynntKnapp\Programming\react-tutorial\the-react-app
            Inside that directory, you can run several commands:
            
              npm start
                Starts the development server.
            
              npm run build
                Bundles the app into static files for production.
            
              npm test
                Starts the test runner.
            
              npm run eject
                Removes this tool and copies build dependencies, configuration files
                and scripts into the app directory. If you do this, you can’t go back!
            
            We suggest that you begin by typing:
            
              cd the-react-app
              npm start
            
            Happy hacking!
            PS C:\Users\FlynntKnapp\Programming\react-tutorial>
            ```

1. Test current Default React App starter code in browser:

    1. Change directory into the React app directory:
        * `Set-Location the-react-app`

    1. Inspect directory contents:
        * `Get-ChildItem`
            * Sample console output:

                ```console
                PS C:\Users\FlynntKnapp\Programming\react-tutorial\the-react-app> Get-ChildItem     
                
                    Directory: C:\Users\FlynntKnapp\Programming\react-tutorial\the-react-app
                
                Mode                 LastWriteTime         Length Name
                ----                 -------------         ------ ----
                d----            1/1/2023 10:15 AM                node_modules
                d----            1/1/2023 10:15 AM                public
                d----            1/1/2023 10:15 AM                src
                -a---            1/1/2023 10:14 AM            310 .gitignore
                -a---            1/1/2023 10:15 AM         665868 package-lock.json
                -a---            1/1/2023 10:15 AM            816 package.json
                -a---            1/1/2023 10:14 AM           3359 README.md
                
                PS C:\Users\FlynntKnapp\Programming\react-tutorial\the-react-app>
                ```

    1. Start the server:
        * `npm start`
            * Sample console output:

                ```console
                PS C:\Users\FlynntKnapp\Programming\react-tutorial\the-react-app> npm start

                > the-react-app@0.1.0 start
                > react-scripts start

                (node:13748) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
                (Use `node --trace-deprecation ...` to show where the warning was created)
                (node:13748) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
                Starting the development server...
                Compiled successfully!

                You can now view the-react-app in the browser.

                  Local:            http://localhost:3000
                  On Your Network:  http://192.168.0.8:3000

                Note that the development build is not optimized.
                To create a production build, use npm run build.

                webpack compiled successfully
                ```

    1. The app opens the browser to the URL displayed in the console output:
        * <http://localhost:3000/>
        * Sample browser image:

            ![React App Default Browser Image](../images/react-app-default-browser-output.png)

