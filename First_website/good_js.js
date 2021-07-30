//var firstName = "susan";
//var lastName = "Ghimire";
//var dateOfBirth = "10-11-99";
//var age = 20;
//var profileImgUrl = 'https://coolpicks.com/susan.jpg';
//
//var loginWelcomeMessage = "Welcome, " +firstName;
//
//console.log(loginWelcomeMessage);
//
//var sum = 10*(10-33);
//console.log(sum);
// 

//var myAccountBalance = 300;
//var nikeSBShoes = 799.23;
//var coupon = 500;
//
//
//if(nikeSBShoes <= myAccountBalance)
//    {
//        myAccountBalance -= nikeSBShoes;
//        console.log("we just brought dope shoes");
//        console.log("Accout Balance: "+myAccountBalance);
//    }
//else if(nikeSBShoes - coupon <= myAccountBalance)
//    {
//        console.log("we just brought some dope shoes with a coupone!!!");
//        myAccountBalance -= nikeSBShoes - coupon;
//        console.log("Account Balance: " + myAccountBalance);
//    }
//else
//    {
//        console.log("Yout took broke fo shoes bra!");   
//    }

//var a=1;
//var b ="1";
//
//if(a===b)
//    {
//        console.log("Same.");
//    }
//else
//    {
//        console.log("different.");
//    }

//
//if(true || false)
//{
//    console.log("This is true.")
//}

//var names = ["susan","rahul", "nempa","gandhi"];
//for(var x = 0; x < names.length; x++)
//    {
//        console.log(names[x]);//    }
// 

//
//function area(length, width)
//{
//    return length * width;
//}
//
//var rectanglesareas = [];
//rectanglesareas.push(area(10,33.5));
//rectanglesareas.push(area(3,44));
//
//
//var area1 = area(10,20);
//
//console.log(rectanglesareas);

//var bankBalance = 300;
//
//function makeTransaction(priceOfSale)
//{
//    if(priceOfSale <= bankBalance)
//        {
//            bankBalance -= priceOfSale;
//            console.log("purchase Successful!!!");
//        }
//    else
//        {
//            console.log("Insufficent Funds!!!");
//            
//        }
//    console.log(bankBalance);
//}
//
//
//var transaction = function(priceOfSale)
//{
//    if(priceOfSale <= bankBalance)
//        {
//            bankBalance -= priceOfSale;
//            console.log("purchase Successful!!!");
//        }
//    else
//        {
//            console.log("Insufficent Funds!!!");
//            
//        }
//    console.log("going good");
//};
//
//var bankOperations = [];
//bankOperations.push(transaction);
//bankOperations.push(makeTransaction);
//
//bankOperations[0](100);
//
//var student = {
//    firstName : "susan",
//    lastName : "Ghimire",
//    age : 5,
//    greeting: function(){
//    return "Hi, I am " + this.firstName + " and I am " + this.age + " years old.";
//}
//};
//
//console.log(student.greeting());

//function student(first, last, age)
//{
//    this.firstName = first;
//    this.lastName = last;
//    this.age = age;
//    this.greeting = function()
//    {
//        return "this is cool " + this.firstname+ ".";
//    };
//}
//
//std = new student("susan", "ghimire", 20);
//
//for(var key in std)
//    {
//        console.log(std[key]);
//    }
// 

//Susang Garaze
this.car = "tesla";

var uamngagaraze = {
    car: "mercidies",
    getCar: function()
    {
        return this.car;
    }
};

console.log(uamngagaraze.getCar());

var storee = uamngagaraze.getCar;

console.log(storee());

var umangaStore = uamngagaraze.getCar.bind(uamngagaraze);
console.log(umangaStore() );