let timeInterval
    let timeStop = false

    const clock = document.querySelector(".timer-section");

    // const calcTime = ()=>{
    //     let currentDate = new Date().getTime()
    //     const targetDate = 1665109800
    //     const time = (targetDate* 1000) - currentDate;
    //     return time
    //    }
   


    let time = 180000

    let timer =  function timeLeft(){

        // const time = calcTime()

           if(time < 0){
            return
            }
                time -= 1000
                let seconds = Math.floor((time / 1000) % 60)
                let minutes = Math.floor(((time / 1000) / 60) % 60)
                // let hours = Math.floor((time / (1000*60*60))%24)
                // let days = Math.floor(time  / (1000 *60 * 60 * 24 ))

                let tl = {
                    "total": time,
                    // "day-num": days,
                    // "hour-num": hours,
                    "minute-num": minutes,
                    "second-num": seconds
                };

            for (let pro in tl) {
                let el = clock.querySelector("." + pro);
                if (el) {
                    el.innerHTML = tl[pro] ;        
                }
            }
        }

    setInterval(timer ,1000)

   