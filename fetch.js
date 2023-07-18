
// A MORE DETAILED EXPLANATION OF USING FETCH TO MAKE AN AJAX REQUEST...paste into a js file


// Firstly we run the fetch() function with a url containing json as its argument.
// fetch(someurl);

//Then we chain a then() function on to it.
// fetch(someurl).then();

// Next we must supply an anonymous function to then()...
// fetch(someurl).then( function() {} );

// and the Response will be passed as the argument to that anonymous function...
// fetch(someurl).then( function(myResponse) {} );

    // Typically, we will run json() on that Response and return it to the next then().
// fetch(someurl).then( function(myResponse) {
    //    return myResponse.json();        
    // }).then();

    // Once again we supply an anonymous function to then() which will receive the result of myResponse.json() as its argument.
// fetch(someurl).then(function(myResponse) {
    //    return myResponse.json();        
    // }).then(function(myJavascriptData) {
    //    console.log(myJavascriptData);
// });






    // Here the fetch function is run and, upon completion, a Response object gets passed to then().
// It automatically becomes the argument to the anonymous function we provide to then().
// We can log it within that function to see it.
    fetch('https://mdn.github.io/fetch-examples/fetch-json/products.json')
    .then(function(response) {
   console.log(response); // see the Response object in the console
    })


    // to work with the Response object we must get the data out of it that we want.
// We run the json() function on the Response object and return the result of that to the then() function.
// This will grab the javascript data we want and pass it as the argument to the anonymous function we supplied to then().
    fetch('https://mdn.github.io/fetch-examples/fetch-json/products.json')
    .then(function(response) {
        return response.json(); // send the extracted js to the anonymous function inside of then()
    }).then(function(ourJavascriptData) { // ourJavascriptData is the extracted js object or array
   console.log(ourJavascriptData); // see the JS data we initially requested, in the console, or display it to the page in some manner.
})




   /////////////////////
   
   
   
   
   // BONUS SECTION (Only for eager students!)
   
   // Some find the syntax for chained fetch and then functions to be a bit messy, confusing or hard to read.
   
   // So an alternative style is available so that it looks more like regular javascript.
   
   // it involves using the keywords async and await.
   
   // I will explain these in more depth at another time cause Im only just getting familiar with this syntax myself.
   
   // But for now, here is a working example. I put it here because you may prefer it to the other style.


   // same result as above but with async await
  // paste it into console and run it after clearing the console first  

// define the function with the async keyword in front of it  
async function myGetJSON() {

var myPromise = fetch('https://mdn.github.io/fetch-examples/fetch-json/products.json');

let firstResult = await myPromise;

let secondResult = await firstResult.json();

console.log(secondResult);

}

// now call the function
myGetJSON();



// Here is the exact same function but with some comments,
// paste it into console and run it after clearing the console first
async function myGetJSON() {

var myPromise = fetch('https://mdn.github.io/fetch-examples/fetch-json/products.json');

        // when fetch has retrieved something, stick it into the result1 variable.
// it will actually be the Response object like the previous examples, that we passed into the first chained then()
let firstResult = await myPromise;

console.log(firstResult); // see the Response object like before

// once the json function has extracted our data, it will shove it in the result2 variable
// this is equivalent to when we passed the data to our second chained then()
let secondResult = await firstResult.json();

// now see our returned javascript object or array etc
console.log(secondResult);

}

myGetJSON();
