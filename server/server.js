// requires
const { response } = require('express');
let express = require ( 'express' );
let app = express();
// NEEDED for POSTS to work
let bodyParser = require( 'body-parser' );

// uses
app.use( express.static ( 'server/public' ) );
app.use( bodyParser.urlencoded({ extended: true } ) );

// global variables
const port = 5000;
let counter = 0;
let messages = [];

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

app.post( '/messages', (req, res ) =>{
    console.log('/messages POST', req.body );
    messages.push( req.body );
    res.sendStatus( 201 );
})