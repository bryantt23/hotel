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

  hasVacancy() {
    for (let prop in this.rooms) {
      if (this.rooms[prop].isFull()) {
        return false;
      }
    }
    return true;
  }

  listRooms() {
    console.log('room name & available spaces');
    for (let prop in this.rooms) {
      const room = this.rooms[prop];
      console.log(`${prop} ${room.availableSpace()}`);
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
  ['Attic', 2],
  ['Under the Stairs', 1]
];
const hotel = new Hotel("hilbert's grand hotel", rooms);
hotel.listRooms();
console.log(hotel);
console.log(hotel.rooms['Attic'].capacity);
console.log(hotel.getName());
console.log('has vacancy', hotel.hasVacancy());
console.log(hotel);
console.log('roomExists', hotel.roomExists('Attic'));
console.log('roomExists', hotel.roomExists('Closet'));
hotel.checkIn('Rick', 'Attic');
hotel.checkIn('Morty', 'Attic');
hotel.listRooms();
hotel.checkIn('Jerry', 'Attic');
hotel.checkIn('Dick', 'Kitchen');
console.log('has vacancy', hotel.hasVacancy());
hotel.checkIn('Harry', 'Under the Stairs');
console.log(hotel);
console.log('has vacancy', hotel.hasVacancy());
hotel.listRooms();
