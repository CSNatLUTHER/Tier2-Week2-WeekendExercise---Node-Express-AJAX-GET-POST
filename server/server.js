// requires
let express = require ( 'express' );
let app = express();

// uses
app.use( express.static ( 'server/public' ) );

// global variables
const port = 5000;
let counter = 0;
let messages = [{
    name: "Chris",
    message: "I posted my first message!"
}];

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

app.get( '/messages', (req, res ) => {
    console.log( '/messages GET');
    res.send( messages )
})