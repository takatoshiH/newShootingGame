class Bullet {
  constructor() {

  }
}

class Target {
  constructor() {
    this.target = document.createElement("div");
    this.target.classList.add("target");
    this.target.style.top = String(Math.floor(Math.random() * 100)) + "px";
    this.target.style.left = "0px";
    document.getElementById("gameSpace").appendChild(this.target);

    this.intervalId = setInterval(() => {
      this.target.style.left = String(parseInt(this.target.style.left) + 10) + "px";
    }, 1000);
  }
}

new Target();