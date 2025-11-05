export enum Direction {
  UP = "UP",
  DOWN = "DOWN",
  NONE = "NONE"
}

export class Lift {
  public currentFloor: number;
  public direction: Direction;
  public doorsOpen: boolean;
  private requestedFloors: number[];
  private callRequests: { floor: number; direction: Direction }[];

  constructor(startFloor: number = 0) {
    this.currentFloor = startFloor;
    this.direction = Direction.NONE;
    this.doorsOpen = false;
    this.requestedFloors = [];
    this.callRequests = [];
  }

  public requestFloor(floor: number): void {
    if (!this.requestedFloors.includes(floor)) {
      this.requestedFloors.push(floor);
    }
    if (this.doorsOpen) {
      this.doorsOpen = false;
    }
  }

  public callLift(floor: number, direction: Direction): void {
    this.callRequests.push({ floor, direction });
  }

  public move(): void {
    if (this.doorsOpen) {
      this.doorsOpen = false;
    }

    if (!this.hasWork()) {
      return;
    }

    this.determineDirection();

    // Bewege in die richtige Richtung
    if (this.direction === Direction.UP) {
      this.currentFloor++;
    } else if (this.direction === Direction.DOWN) {
      this.currentFloor--;
    }

    this.checkArrival();
  }

  private determineDirection(): void {
    if (this.direction === Direction.NONE) {
      // Entscheide initiale Richtung
      const hasUpRequests = this.requestedFloors.some(f => f > this.currentFloor) ||
                           this.callRequests.some(c => c.floor > this.currentFloor);
      const hasDownRequests = this.requestedFloors.some(f => f < this.currentFloor) ||
                             this.callRequests.some(c => c.floor < this.currentFloor);

      if (hasUpRequests) {
        this.direction = Direction.UP;
      } else if (hasDownRequests) {
        this.direction = Direction.DOWN;
      }
    } else {
      // Wechsle Richtung wenn nötig
      if (this.direction === Direction.UP) {
        const hasMoreUpRequests = this.requestedFloors.some(f => f > this.currentFloor) ||
                                 this.callRequests.some(c => c.floor > this.currentFloor);
        if (!hasMoreUpRequests) {
          this.direction = Direction.DOWN;
        }
      } else if (this.direction === Direction.DOWN) {
        const hasMoreDownRequests = this.requestedFloors.some(f => f < this.currentFloor) ||
                                   this.callRequests.some(c => c.floor < this.currentFloor);
        if (!hasMoreDownRequests) {
          this.direction = Direction.UP;
        }
      }
    }
  }

  private checkArrival(): void {
    const shouldStopForRequest = this.requestedFloors.includes(this.currentFloor);
    const shouldStopForCall = this.callRequests.some(call => 
      call.floor === this.currentFloor && 
      (call.direction === this.direction || this.direction === Direction.NONE)
    );

    if (shouldStopForRequest || shouldStopForCall) {
      this.doorsOpen = true;
      
      if (shouldStopForRequest) {
        this.requestedFloors = this.requestedFloors.filter(f => f !== this.currentFloor);
      }
      
      if (shouldStopForCall) {
        this.callRequests = this.callRequests.filter(call => call.floor !== this.currentFloor);
        console.log("DING");
      }
    }
  }

  public getMonitor(): string {
    if (this.doorsOpen) {
      return `${this.direction} ${this.currentFloor}`;
    } else if (this.direction !== Direction.NONE) {
      return `Moving ${this.currentFloor}`;
    } else {
      return this.currentFloor.toString();
    }
  }

  public hasWork(): boolean {
    return this.requestedFloors.length > 0 || this.callRequests.length > 0;
  }

  public getStatus(): string {
    return `Floor: ${this.currentFloor}, Direction: ${this.direction}, Doors: ${this.doorsOpen ? "OPEN" : "CLOSED"}`;
  }

  public getPendingRequests(): string {
    return `Requests: [${this.requestedFloors.join(', ')}], Calls: [${this.callRequests.map(c => `${c.floor}${c.direction === Direction.UP ? '↑' : '↓'}`).join(', ')}]`;
  }
}

// Vordefinierte Test-Simulation
function runDemo(): void {
  const lift = new Lift(0);
  
  console.log("=== Lift Demo ===");
  console.log("Start: " + lift.getStatus());
  
  // Szenario 1: Lift wird von Stockwerk 3 nach oben gerufen
  console.log("\n1. Call von Floor 3 nach UP");
  lift.callLift(3, Direction.UP);
  console.log(lift.getPendingRequests());
  
  // Bewege bis Floor 3
  console.log("\nBewege zu Floor 3:");
  for (let i = 0; i < 10 && lift.hasWork(); i++) {
    lift.move();
    console.log(lift.getStatus() + " | Monitor: " + lift.getMonitor());
    if (lift.currentFloor === 3 && lift.doorsOpen) break;
  }
  
  // Szenario 2: Person drückt Floor 5 im Lift
  console.log("\n2. Request für Floor 5 im Lift");
  lift.requestFloor(5);
  console.log(lift.getPendingRequests());
  
  // Bewege bis Floor 5
  console.log("\nBewege zu Floor 5:");
  for (let i = 0; i < 10 && lift.hasWork(); i++) {
    lift.move();
    console.log(lift.getStatus() + " | Monitor: " + lift.getMonitor());
    if (lift.currentFloor === 5 && lift.doorsOpen) break;
  }
  
  // Szenario 3: Mehrere Calls - jetzt sollte der Lift zu Floor 2 runter
  console.log("\n3. Mehrere Calls: Floor 2 DOWN und Floor 7 UP");
  lift.callLift(2, Direction.DOWN);
  lift.callLift(7, Direction.UP);
  console.log(lift.getPendingRequests());
  
  // Bewege durch alle Requests
  console.log("\nBewege durch alle Requests:");
  let steps = 0;
  while (lift.hasWork() && steps < 30) {
    lift.move();
    console.log(lift.getStatus() + " | Monitor: " + lift.getMonitor());
    steps++;
    
    // Debug-Ausgabe alle 5 Schritte
    if (steps % 5 === 0) {
      console.log("   " + lift.getPendingRequests());
    }
  }
  
  if (lift.hasWork()) {
    console.log("\n⚠️  Simulation abgebrochen - es gibt noch offene Requests:");
    console.log(lift.getPendingRequests());
  } else {
    console.log("\n✅ Alle Requests erledigt!");
  }
  
  console.log("\n=== Demo beendet ===");
}

// Führe Demo aus
runDemo();