class Ship {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.direction = "east";
  }

  location() {
    let str = `Facing ${this.direction} at `;

    if (this.x >= 0) {
      str = str + `east ${this.x}, `;
    } else {
      str = str + `west ${Math.abs(this.x)}, `;
    }

    if (this.y >= 0) {
      str = str + `north ${this.y}.`;
    } else {
      str = str + `south ${Math.abs(this.y)}.`;
    }

    console.log(str);
  }

  move(distance, direction) {
    if (!direction) {
      this.move(distance, this.direction);
      return;
    }

    switch (direction) {
      case "north":
        this.y += distance;
        break;

      case "east":
        this.x += distance;
        break;

      case "south":
        this.y -= distance;
        break;

      case "west":
        this.x -= distance;
        break;

      default:
        break;
    }
  }

  turnLeft() {
    switch (this.direction) {
      case "east":
        this.direction = "north";
        break;

      case "south":
        this.direction = "east";
        break;

      case "west":
        this.direction = "south";
        break;

      case "north":
        this.direction = "west";
        break;

      default:
        break;
    }
  }

  turnRight() {
    switch (this.direction) {
      case "east":
        this.direction = "south";
        break;

      case "south":
        this.direction = "west";
        break;

      case "west":
        this.direction = "north";
        break;

      case "north":
        this.direction = "east";
        break;

      default:
        break;
    }
  }
}

module.exports = Ship;
