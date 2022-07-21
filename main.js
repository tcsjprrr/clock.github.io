setInterval(() => {
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();

    let hRotate = 30*htime+mtime*.5;
    let mRotate = 6*mtime+stime*.1;
    let sRotate = 6*stime;

    

    hour.style.transform = `rotate(${hRotate}deg)`;
    minute.style.transform = `rotate(${mRotate}deg)`;
    second.style.transform = `rotate(${sRotate}deg)`;

}, 1000);