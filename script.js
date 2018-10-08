/* JavaScript code here */
//Task 1

console.log("External JavaScript");

//Task 2
function sumArray (arr){
    var sum=0;
    arr.forEach (function (value, index){
        sum = sum + value;
    });
    return sum;
}

console.log (sumArray([2, 4, 5, 6, 7]));
console.log (sumArray([2, 43, 5, 6, 7]));

//Task 3
function checkEmail (emailString){
    var emailFormat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var match= emailFormat.test(emailString);
    return match;
}

console.log(checkEmail("john@smith.com"));
console.log(checkEmail("john6@sh.com"));
console.log(checkEmail("john@smith"));
console.log(checkEmail("johnsmith.com"));

//Task 4
var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

function getReadingStatus (index){
    var book= library [index];
    return book.readingStatus;
    //return library [index].readingStatus; (same as the above)
}

console.log(getReadingStatus(1));
console.log(getReadingStatus(0));
console.log(getReadingStatus(2));

//Task 5(a)
var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];

function addItem (newItem){
    cart.push (newItem);
    console.log (cart);
}

var newItem = {
    name: 'Watch', 
    price: 64, 
    quantity: 1
};

addItem(newItem);

//Task 5(b)
function sortCart (keyName){
    return cart.sort (keyName);
    console.log(cart);
}

var keyName= quantity;
sortCart (keyName);

//Task 5(c)
function findByName (name){
    
}


//Task 5(d)
//total cost= price*quantity of all the item types/objects
function totalCost(){
    
}