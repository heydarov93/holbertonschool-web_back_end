import ClassRoom from "./0-classroom.js";

const initializeRooms = function () {
  const first = new ClassRoom(19);
  const second = new ClassRoom(20);
  const third = new ClassRoom(34);

  return [first, second, third];
};

export default initializeRooms;
