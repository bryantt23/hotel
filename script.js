class Hotel {
  constructor(name, rooms) {
    this.name = name;
    this.rooms = this.buildRoomsObject(rooms);
  }

  buildRoomsObject(rooms) {
    let roomsObject = {};
    rooms.forEach(room => {
      const [name, capacity] = room;
      roomsObject[name] = { capacity };
    });
    return roomsObject;
  }

  getName() {
    return this.name
      .split(' ')
      .map(s => s.substring(0, 1).toUpperCase() + s.substring(1).toLowerCase())
      .join(' ');
  }

  roomExists(roomName) {
    return Object.keys(this.rooms).includes(roomName);
  }
}

class Room {
  constructor(capacity) {
    this.capacity = capacity;
    this.occupants = [];
  }

  isFull() {
    return this.occupants.length === this.capacity;
  }

  availableSpace() {
    return this.capacity - this.occupants.length;
  }

  addOccupant(occupant) {
    if (this.isFull()) {
      return false;
    } else {
      this.occupants.push(occupant);
      return true;
    }
  }
}

const rooms = [
  ['Basement', 4],
  ['Attic', 2],
  ['Under the Stairs', 1]
];
const hotel = new Hotel("hilbert's grand hotel", rooms);
console.log(hotel);
console.log(hotel.rooms['Basement'].capacity);
console.log(hotel.getName());
console.log(hotel);
console.log(hotel.roomExists('Basement'));

console.log(hotel.roomExists('Closet'));
