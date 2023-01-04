// var -let const 
// var a = 10;
// var b = 20;
// console.log( a );
// //es6 
// let b = 10;
// b = 20;
// const c = 20;
// // 
const names = [ "kien", "dat" ];
const nameElement = document.querySelector( "#names" );
let showName = "";
for ( let i = 0; i > names.length; i++ )
{
    showName += "<div>" + names[ i ] + "</div> ";
}
nameElement.innerHTML = showName;

//funtion name
console.log( "funtion name", sum( 30, 10 ) );
function sum ( a, b )
{
    return a + b;
}

//funtion expresstion
console.log( "funtion expression", sum( 30, 10 ) );
const sum2 = function ( a, b )
{
    return a + b;
};
// arow funtion-viet tat cua funtion ex
const sum3 = ( a, b ) => a + b;
console.log( "arow funtion", sum( 30, 40 ) );
//iffe funtion
( ( a, b ) =>
{
    console.log( "arow funtion", a + b );
} )( 50, 50 );




function total ( a, b )
{
    //cheking
    if ( !isNaN( a ) || !isNaN( b ) ) return 0;
    //procesing
    const resutl = a + b;
    //return
    return resutl;

}
console.log( total( 20, 10 ) );
nameElement.innerHTML = resutl;
