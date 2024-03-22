document.addEventListener("DOMContentLoaded", () => {
  const ball = document.getElementById("ball");
  const objects = document.querySelectorAll(".object");
  const message = document.getElementById("message");

  let collectedObjects = 0;

  function checkCollision() {
    objects.forEach((object) => {
      if (isColliding(ball, object) && !object.classList.contains("hidden")) {
        object.classList.add("hidden");
        collectedObjects++;
        if (collectedObjects === objects.length) {
          message.innerText = "Gefeliciteerd!";
          message.style.display = "block";
        }
      }
    });
  }

  function isColliding(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
      aRect.top + aRect.height < bRect.top ||
      aRect.top > bRect.top + bRect.height ||
      aRect.left + aRect.width < bRect.left ||
      aRect.left > bRect.left + bRect.width
    );
  }

  document.addEventListener("keydown", (e) => {
    const speed = 10;
    switch (e.key) {
      case "ArrowUp":
        ball.style.top = `${parseFloat(ball.style.top) - speed}px`;
        break;
      case "ArrowDown":
        ball.style.top = `${parseFloat(ball.style.top) + speed}px`;
        break;
      case "ArrowLeft":
        ball.style.left = `${parseFloat(ball.style.left) - speed}px`;
        break;
      case "ArrowRight":
        ball.style.left = `${parseFloat(ball.style.left) + speed}px`;
        break;
    }
    checkCollision();
  });
});
