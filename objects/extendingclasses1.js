//========================
//EXTENDING CLASSES
//========================

class Vacation {//CLASS VACTION BEGINS
    constructor(destination, length) {//VACATION CONSTRUCTOR BEGINS
    this.destination = destination
    this.length = length
    }//VACATION CONSTRUCTOR ENDS

    print() { //VACATION PRINT BEGINS
    console.log(`${this.destination} will take ${this.length} days.`)
    }//VACATION PRINT ENDS
}//CLASS VACTION ENDS

//we use vacation as a superclass/abstract class to create different types of vacations
//we create Expedition to extend vacation to include gear 
class Expedition {//CLASS EXPEDITION BEGINS
    constructor(destination, length, gear){//EXPEDITION CONSTRUCTOR BEGINS
        super(destination, length) //use the super constructor method to instantiate the destination and length fields of an expedition object
        this.gear=gear; //differing behavious from super 
    }//EXPEDITION CONSTRUCTOR ENDS

    print(){//EXPEDITITION PRINT BEGINS
        super.print()
        console.log(`Bring your ${this.gear.join("and your ")}`)
    }//EXPEDITION PRINT ENDS

}//CLASS EXPEDITION ENDS