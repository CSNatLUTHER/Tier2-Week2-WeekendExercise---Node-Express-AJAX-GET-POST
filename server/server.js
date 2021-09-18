// requires
let express = require ( 'express' );
let app = express();

// uses

// global variables
const port = 5000;
let counter = 0;

// spin up server
app.listen( port, ()=> {
    console.log( 'server is up on', port )
})

// routes
app.get( '/', ( req, res ) => {
    console.log( 'get route hit');
    res.send( 'meow');
});

app.get( '/counter', (req, res ) => {
    counter++;
    console.log( '/counter GET hit', counter );
    res.send( `visits: ${ counter }` );
})