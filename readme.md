NODE EXPRESS SERVER INTRO
===

SERVER SPIN UP
---

- ensure node is installed ( node -v )
- initialize git repo
- npm initialize
    - ```npm init --y```
    - ```npm install express```
- in package.json, update the 'scripts' object.
    - add: `"start": "node server/server.js"`
- create `server` folder
- create a `server.js` in that folder
- in server.js file, add these lines:
        ```
            // requires
            let express = require ( 'experess' );
            let app = experss();
            // uses

            // global variables
            const port = 5000; 

            // spin up server
            app.listen( port, ()=> {
                console.log( 'server is up on', port )
            })
            // routes
        ```
- test server with `npm start`
- stop server with `ctrl+c`

Phase 2: BASIC ROUTES:
===

- in server.js:
    ```
            // routes
        app.get( '/', ( req, res ) => {
            console.log( 'get route hit');
            res.send( 'meow');
        });

        app.get( '/counter', (req, res ) => {
            console.log( '/counter GET hit' );
            res.send( 'woof' );
        })
    ```
- restart server to validate
- `localhost:port#` and `localhost:port#/counter`in broswer to view


SERVE WEB PAGE ( HTML, JS, JQ, CSS )
---

- in server folder, create a `public` folder
- set up usual website files in `public` folder
    - index.html, scripts/scripts.js, vendors/jquery, styles/styles.js
- tell server to look in the `server/public` folder in the `server.js` file
- update `server.js` file 
    ```
        // uses 
        app.use( express.static ( 'server/public' ) );
    ```
- no longer using html to launch application
    spin up server and call localhost in browser
