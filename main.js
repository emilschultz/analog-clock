

const setDate = () => {
    const now = new Date();

    // SECONDS
    const seconds = now.getSeconds();
    // Lav om til "Base 100" (noget som går fra 0-100(eksempelvis %)) ved at dividere med 60(sekunder) og derefter gange med antal grader vi ønsker. 
    // Dvs. at ved 0 sekunder(0%) vil den være 0grader, og ved 60sekunder(100%) vil den være 360 grader.
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    document.querySelector('.second-hand').style.transform = `rotate(${secondsDegrees}deg)`

    // if(secondsDegrees >= 444) {
    //     document.querySelector('.second-hand').style.transition = "all 0s";
    // }

    secondsDegrees >= 444 ? document.querySelector('.second-hand').style.transition = "all 0s" : "";
    
    // MINUTES
    const mins = now.getMinutes();
    const minuteDegrees = ((mins  / 60) * 360) + 90;
    document.querySelector('.min-hand').style.transform = `rotate(${minuteDegrees}deg)`

    //  HOURS
    const hours = now.getHours();
    const hourDegrees = ((hours  / 12) * 360) + 90;
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDegrees}deg)`

    
}

setInterval(setDate, 1000);