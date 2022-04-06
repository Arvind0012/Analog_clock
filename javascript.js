setInterval(() => {
    const datedata = new Date;
    const second = datedata.getSeconds() *6;
    const minute = datedata.getMinutes() *6;
    const hour = datedata.getHours() *30;
    const second_hand = document.querySelector(".second");
    const minute_hand = document.querySelector(".minute");
    const hour_hand = document.querySelector(".hour");

    second_hand.style.transform = "rotate("+second+"deg)";
    minute_hand.style.transform = "rotate("+minute+"deg)";
    hour_hand.style.transform = "rotate("+hour+"deg)";
},1000);