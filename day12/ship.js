class Ship {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.direction = "east";
    this.waypoint = {
      x: 10,
      y: 1,
    };
  }

  location() {
    let str = ``;

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
      console.log(this.waypoint.x, this.waypoint.y, distance);
      this.x += this.waypoint.x * distance;
      this.y += this.waypoint.y * distance;
      return;
    }

    switch (direction) {
      case "north":
        this.waypoint.y += distance;
        break;

      case "east":
        this.waypoint.x += distance;
        break;

      case "south":
        this.waypoint.y -= distance;
        break;

      case "west":
        this.waypoint.x -= distance;
        break;

      default:
        break;
    }
  }

  turnLeft() {
    [this.waypoint.x, this.waypoint.y] = [this.waypoint.y, this.waypoint.x];
    if (this.waypoint.x >= 0 && this.waypoint.y >= 0) {
      this.waypoint.x *= -1;
    } else if (this.waypoint.x < 0 && this.waypoint.y >= 0) {
      this.waypoint.y *= -1;
    } else if (this.waypoint.x < 0 && this.waypoint.y < 0) {
      this.waypoint.x *= -1;
    } else if (this.waypoint.x >= 0 && this.waypoint.y < 0) {
      this.waypoint.y *= -1;
    }
  }

  turnRight() {
    [this.waypoint.x, this.waypoint.y] = [this.waypoint.y, this.waypoint.x];
    if (this.waypoint.x >= 0 && this.waypoint.y >= 0) {
      this.waypoint.y *= -1;
    } else if (this.waypoint.x < 0 && this.waypoint.y >= 0) {
      this.waypoint.x *= -1;
    } else if (this.waypoint.x < 0 && this.waypoint.y < 0) {
      this.waypoint.y *= -1;
    } else if (this.waypoint.x >= 0 && this.waypoint.y < 0) {
      this.waypoint.x *= -1;
    }
  }
}

module.exports = Ship;
