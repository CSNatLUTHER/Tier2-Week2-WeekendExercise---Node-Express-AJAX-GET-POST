NODE EXPRESS SERVER SPIN UP
===

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
