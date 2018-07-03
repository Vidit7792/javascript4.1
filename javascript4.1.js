function createObject(){
    var myObject = new Object();
    myObject.name="Vidit";
    myObject.age="25";
    myObject.aboutMyself= function(){
        return("I am "+ this.name +".I am "+ this.age+"years old");
    }
        return myObject;
}
var me =createObject();
console.log(me.aboutMyself())