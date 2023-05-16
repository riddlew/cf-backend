function destroyTimer({ roomName, timerStore }) {
  console.log(
    `KABOOM: Destroying timer for room ${roomName} due to inactivity`
  );

  // if there's a timer for this room, clear it
  if (timerStore[roomName]) {
    clearInterval(timerStore[roomName].timer);
    delete timerStore[roomName];
  }
}

module.exports = { destroyTimer };
