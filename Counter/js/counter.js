const counterEl = document.getElementById("counter")
    const buttonInc = document.getElementById("increment")
    const buttonDec = document.getElementById("decrement")
    const buttonRes = document.getElementById("reset")
    
    
    let counter = Number(counterEl.textContent) // 0
    
    function updateCounter(nextCounter) { // 1
        counter // 0
        counter = nextCounter // 1
        counterEl.textContent = nextCounter
    }

    buttonInc.onclick = function () {
        // 0
        updateCounter(counter + 1)
    }
    
    buttonDec.onclick = function () {
        updateCounter(counter - 1)
    }

    buttonRes.onclick = function () {
        updateCounter(0)
    }
    