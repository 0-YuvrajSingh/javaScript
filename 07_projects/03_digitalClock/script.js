const clock = document.querySelector('.clock');

setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString('en-IN', { hour12: false });
}, 1000);
