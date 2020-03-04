class Bullet {
  constructor() {
    this.bullet = document.createElement("div");
    this.bullet.classList.add("bullet");
    this.bullet.style.top = "350px";
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
        this.target.style.display = "none";
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

new Battery();

const numbers = [3, 2, 1];
const countdown = document.createElement("div");
countdown.classList.add("countdown");
document.getElementById("gameSpace").appendChild(countdown);

let index = 0;
count(numbers, countdown, index);

function count(numbers, countdown, index) {
  let timeoutId = setTimeout(() => {
    countdown.textContent = numbers[index];
    index++;
    if (index === 3) {
      clearTimeout(timeoutId);
      gameStart();
    }
    count(numbers, countdown, index);
  }, 1000);
}

function gameStart() {
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

  //画面アウトしたら配列から省きたい
  setInterval(() => {
    targets.forEach((target, targetIndex) => {
      bullets.forEach((bullet, bulletIndex) => {
        //ここが変
        if (parseInt(bullet.style.left) >= parseInt(target.style.left) && parseInt(bullet.style.left) <= parseInt(target.style.left) + 40) {
          targets.splice(targetIndex, 1);
          bullets.splice(bulletIndex, 1);
          //ここも変
          target.style.display = "none";
          bullet.style.display = "none";
        }
      })
    })
  });
}