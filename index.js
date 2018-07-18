
let store = {drivers: [], trips: [], passengers: []}

let driverId = 0

class Driver {
  constructor(name){
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  passengers(){
    const pass = []

    for (let trip of this.trips()){
      pass.push(trip.passenger())
    }
    return pass
  }
}

let passId = 0

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passId;
    store.passengers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId = this.id
    })
  }
  drivers(){
    const drivers = [];

    for(let trip of this.trips()){
      drivers.push(trip.driver())
    }
    return drivers
  }
}

let tripId = 0

class Trip {
  constructor(driver, passenger){
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = ++tripId;

    store.trips.push(this)
  }

  driver(){
    return store.drivers.find(function(driver){
      return driver.id === this.driverId
    }.bind(this))
  }

  passenger(){
    return store.passengers.find(function(pass){
      return pass.id === this.passengerId
    }.bind(this))
  }
}
