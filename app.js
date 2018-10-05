function logMessage () {
    console.log( 'hello' );
    return 4;
}

let num = logMessage();

setTimeout( () => {
    console.log( num * 4 )
}, 2000 );

function getWords () {
    console.log( 'word1' );
    setTimeout( () => {
        console.log( 'word2' );
        setTimeout( () => {
            console.log( 'word3' );
            setTimeout( () => {
                console.log( 'word4' );
            }, 1000 );
        }, 2000 );
    }, 3000 );
}
getWords();

function countdown ( num, callback ) {
    let interval = setInterval( () => {
        num--;
        if ( num < 1 ) {
            callback();
            clearInterval( interval );
        }
    }, 1000 );
}

function done () {
    console.log( 'done' );
}

countdown( 5, done );


let bool = true;

const orderingChickenSandwich = new Promise( ( resolve, reject ) => {
    if ( bool ) {
        resolve( {
            sandwich: 'chicken',
            veggies: 'lettuce'
        } );
    }

    reject( new Error( 'order failed' ) );
} );

function orderFood () {
    orderingChickenSandwich
        .then( console.log )
        .catch( console.log );
}

orderFood();


new Promise( ( resolve ) => {
    setTimeout( () => {
        resolve( 1 )
    }, 2000 )
} )
    .then( n => n * 2 )
    .then( n => n * 4 )
    .then( n => n * 6 )
    .then( console.log )

