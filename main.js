class Bullet {
  constructor() {
    this.bullet = document.createElement("div");
    this.bullet.classList.add("bullet");
    this.bullet.style.top = "400px";
    this.bullet.style.left = "50%";
    document.getElementById("gameSpace").appendChild(this.bullet);

    this.intervalId = setInterval(() => {
      if (parseInt(this.bullet.style.top) <= 10) {
        clearInterval(this.intervalId);
        document.getElementById("gameSpace").removeChild(this.bullet);
      }
      this.bullet.style.top = String(parseInt(this.bullet.style.top) - 10) + "px";
    }, 10);
  }
}

class Target {
  constructor() {
    this.target = document.createElement("div");
    this.target.classList.add("target");
    this.speed = Math.floor(Math.random() * 2) + 10;
    this.target.style.top = String(Math.floor(Math.random() * 250)) + "px";
    this.target.style.left = "0px";
    document.getElementById("gameSpace").appendChild(this.target);

    this.intervalId = setInterval(() => {
      if (parseInt(this.target.style.left) >= window.innerWidth) {
        clearInterval(this.intervalId);
      }
      this.target.style.left = String(parseInt(this.target.style.left) + this.speed) + "px";
    }, 10);
  }
}

class Battery {
  constructor() {
    this.battery = document.createElement("div");
    this.battery.classList.add("battery");
    this.battery.style.top = "400px";
    this.battery.style.left = "50%";
    document.getElementById("gameSpace").appendChild(this.battery);

    window.addEventListener("keydown", event => {
      if (event.key === "f" && parseInt(this.battery.style.left) >= 0) {
        this.battery.style.left = String(parseInt(this.battery.style.left) - 10) + "px";
      } else if (event.key === "j" && parseInt(this.battery.style.left) <= window.innerWidth){
        this.battery.style.left = String(parseInt(this.battery.style.left) + 10) + "px";
      }
    })
  }

  
}

const targets = [];
const bullets = [];

const intervalId = setInterval(() => {
  targets.push(new Target());
}, 1000);

window.addEventListener("keydown", event => {
  if (event.key === " " && bullets.length <= 20) {
    bullets.push(new Bullet());
  }
})

setTimeout(() => {
  clearInterval(intervalId);
}, 10000);

new Battery();