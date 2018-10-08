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
    if (keyName == "quantity")
    {
        cart.sort (function (obj1, obj2){
            return obj1.quantity- obj2.quantity;
        });
    }
    else if (keyName == "price")
    {
        cart.sort (function (obj1, obj2){
            return obj1.price- obj2.price;
        });
    }
    else
    {
        cart.sort(function (obj1, obj2){
            var nameA = obj1.name.toUpperCase();
            var nameB = obj2.name.toUpperCase();
           if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
             return 0;
        });
        
    }
    console.log(cart);
}

sortCart("name");
//sortCart("quantity");
//sortCart("price");

//Task 5(c)
function findByName (name){
    var filteredObj= cart.filter (obj =>{
        return obj.name.includes(name);
    });
    console.log (filteredObj);
}

//findByName("Shoes");
//findByName("Socks");
findByName("Regular Tees");
//findByName("Watch");

//Task 5(d)
//total cost= price*quantity of all the item types/objects
function totalCost(){
    
}