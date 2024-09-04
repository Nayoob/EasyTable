

function generateTabel(numbertogiveToFunction){
     let tabelcontex =''

     for(let i = 1 ; i <= 10 ; i++){
        tabelcontex += `${numbertogiveToFunction} * ${i} = ${numbertogiveToFunction*i}<br>`
     }
     return tabelcontex;
}

const buttton = document.getElementById("btn")
buttton.addEventListener("click" , ()=>{
    const inputNumber = document.getElementById("numberInput").value;
    const numbertogiveToFunction = parseInt(inputNumber)

    if (!isNaN(numbertogiveToFunction) && numbertogiveToFunction > 0){
        const tableee =   generateTabel(numbertogiveToFunction)
        const paratag = document.createElement("p")
        paratag.className = "tablestyle"
        paratag.innerHTML = tableee
        const maincont = document.getElementsByClassName("conatiner")[0];
        maincont.insertAdjacentElement("beforeend" , paratag)
    }
    else{
        alert("Add valid input !")
    }

})

