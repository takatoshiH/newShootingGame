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
      console.log("ok");
    }, 10);
  }
}

class Target {
  constructor() {
    this.target = document.createElement("div");
    this.target.classList.add("target");
    this.speed = Math.floor(Math.random() * 50) + 10;
    this.target.style.top = String(Math.floor(Math.random() * 250)) + "px";
    this.target.style.left = "0px";
    document.getElementById("gameSpace").appendChild(this.target);

    this.intervalId = setInterval(() => {
      if (parseInt(this.target.style.left) >= window.innerWidth) {
        clearInterval(this.intervalId);
      }
      this.target.style.left = String(parseInt(this.target.style.left) + this.speed) + "px";
    }, 100);
  }
}

const intervalId = setInterval(() => {
  new Target();
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 10000);

new Bullet();