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