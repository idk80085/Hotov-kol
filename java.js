
var blu = false


document.getElementById("button2").addEventListener("click", ()=>{
    if(blu){
        document.getElementById("barva").style.backgroundColor = "orange"
        blu = false
    }else{
        document.getElementById("barva").style.backgroundColor = "blue"
        blu = true
    }
    document.getElementById("barva").style.width =Math.random()*300 + "px"

})

var text = false

document.getElementById("button3").addEventListener("click", ()=>{
    document.getElementById("nadpis").style.fontSize = Math.random()*50 + "px" //jsem myslel, že se má měnit velikost ne text, ale to je jedno
    document.getElementById("nadpis").innerHTML = "Lorem ipsum"
    if(text){
        document.addEventListener("nadpis").style.color = "black"
        text = false
    }else{
        document.getElementById("nadpis").style.color = "red"
        text = true
    }


})


document.getElementById("button").addEventListener("click", ()=>{
    alert("tlačítko zmáčknuto")
})