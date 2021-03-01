class Hotel {
  constructor(name, rooms) {
    this.name = name;
    this.rooms = this.buildRoomsObject(rooms);
  }

  buildRoomsObject(rooms) {
    let roomsObject = {};
    rooms.forEach(room => {
      const [name, capacity] = room;
      roomsObject[name] = new Room(capacity);
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

  checkIn(person, roomName) {
    if (!this.roomExists(roomName)) {
      console.log('sorry, room does not exist');
    } else {
      const room = this.rooms[roomName];
      console.log(room);
      room.addOccupant(person);
    }
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
      console.log('sorry, room is full');
      return false;
    } else {
      console.log('check in successful');
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
console.log(hotel.checkIn('Rick', 'Attic'));
console.log(hotel.checkIn('Morty', 'Attic'));
console.log(hotel.checkIn('Jerry', 'Attic'));
