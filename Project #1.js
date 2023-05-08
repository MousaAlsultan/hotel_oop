
class hotel {
    #minFloor;
    #maxfloor;
    constructor(Address,NumberOgRooms,minFloor,maxfloor,rooms){
        this.Address=Address;
        this.NomberOgRooms=NumberOgRooms;
        this.#minFloor=minFloor;
        this.#maxfloor=maxfloor;
        this.rooms=[];

    }

    addRooms(){
        this.rooms.push(rooms);
    }

    set minFloor(num_min){

        this.#minFloor=num_min;
    }
    get minFloor(){

        return this.#minFloor
    }

    set maxfloor(num_max){
        this.#maxfloor=num_max;
    }
    get maxfloor(){
        return this.#maxfloor;
    }

}

class Room{
    #isBooked
    constructor(flootNum,roomnum,price,isBooked){
        this.flootNum=flootNum;
        this.roomnum=roomnum;
        this.price=price
        this.#isBooked=isBooked;
    }
    get isBooked() {
        return this.isBooked;
      }
    
    set isBooked(value) {
        if (value === true || value === false) {
          this.isBooked = value;
        } else {
          console.log("Invalid value! Only true or false are allowed.");
        }
      }
}


class SleepingRoom extends Room {
    constructor(personCapacity) {
      this.personCapacity=personCapacity;
    }
}

class RoomWithView extends Room {
    constructor(view,numberOfBeds) {
      this.view=view;
      this.numberOfBeds=numberOfBeds;
    }
}

const Hotel =new hotel("ramallah",15);
console.log(Hotel);





















// class Room {
//     constructor(roomNumber, type, price) {
//       this.roomNumber = roomNumber;
//       this.type = type;
//       this.price = price;
//     }
//   }


//   class Bedroom extends Room {
//   constructor(roomNumber, price) {
//     super(roomNumber, 'Bedroom', price);
//   }
// }

// // تعريف الكائن RoomWithView
// class RoomWithView extends Room {
//   constructor(roomNumber, price) {
//     super(roomNumber, 'Room with View', price);
//   }
// }