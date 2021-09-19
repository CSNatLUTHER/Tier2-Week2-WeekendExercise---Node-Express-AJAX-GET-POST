$( document ).ready( onReady );

function onReady (){
    // click handler for elements on DOM
    $( "#refreshButton" ).on ('click', getMessages );
    $( "#submitButton" ).on ( 'click', sendMessages );
    // make a GET request for exisiting messages
    getMessages();
} // end on ready

function getMessages(){
    // AJAX GET request
    $.ajax({
        method: 'GET',
        url: '/messages'
    }).then( function( response ) {
        console.log( 'back from server with:', response );
        let el = $("#messages")
        el.empty();
        for(let i=0; i<response.length; i++){
            el.append(`<li> ${response[i].name} : ${response[i].message} </li>`)
        }
    }).catch( function (err ){
        alert( 'There\'s a problem!')
        console.log(`Error: ${ err }`);
    })
} // end getMessages function

function sendMessages(){
    console.log('in sendMessages');
}