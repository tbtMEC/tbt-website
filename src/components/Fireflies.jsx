import React, { useEffect, useState } from "react";
import "./fireflies.css";
function Fireflies() {
  const [screenWidth, setScreenWidth] = useState();
  class Firefly {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 2 - 1;
      this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > this.canvas.width) {
        this.speedX = -this.speedX;
      }

      if (this.y < 0 || this.y > this.canvas.height) {
        this.speedY = -this.speedY;
      }

      this.opacity = Math.random() * 0.5 + 0.2;
    }

    draw() {
      this.ctx.globalCompositeOperation = "lighter";
      this.ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }

  useEffect(() => {
    const canvas = document.getElementById("fireflies");
    canvas.width = window.innerWidth - 50;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    const fireflies = [];

    for (let i = 0; i < 20; i++) {
      fireflies.push(new Firefly(canvas));
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const firefly of fireflies) {
        firefly.update();
        firefly.draw();
      }

      requestAnimationFrame(animate);
    }

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      animate();
      window.removeEventListener("resize", changeWidth);
    };
  }, [screenWidth]);

  return <canvas id="fireflies"></canvas>;
}

export default Fireflies;
