type time = {
  miliseconds: int,
  seconds: int,
  minutes: int,
  hours: int,
};

let fromMinutes = minutes => {hours: 0, minutes, seconds: 0, miliseconds: 0};