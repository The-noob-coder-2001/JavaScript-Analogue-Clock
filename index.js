//this happens every second 
setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();

  h_rotation = 30*htime + mtime/2; //formula to calculate hour-hand rotation
  m_rotation = 6*mtime; //formula to calculate minute-hand rotation
  s_rotation = 6*stime; //formula to calculate second-hand rotation

  hour.style.transform = `rotate(${h_rotation}deg)`;
  minute.style.transform = `rotate(${m_rotation}deg)`;
  second.style.transform = `rotate(${s_rotation}deg)`;
}, 1000);
