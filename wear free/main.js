// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE
var round = document.getElementById("t1")
var vneck = document.getElementById("t2")
var pop = document.getElementById("popup")
var type = document.getElementById("show")
var half = document.getElementById("half")
var full = document.getElementById("full")
var cl1 = document.getElementById("cl1")
var cl2 = document.getElementById("cl2")
var cl3 = document.getElementById("cl3")
var cl4 = document.getElementById("cl4")
var cl5 = document.getElementById("cl5")
var cl6 = document.getElementById("cl6")
var cl7 = document.getElementById("cl7")
var popup2 = document.getElementById("pop")
var select = document.getElementById("select")
var order = document.getElementById("order")
var next = document.getElementById("next")
var close = document.getElementById("close")
var now = document.getElementById("no")





round.addEventListener("click",function (){
    pop.style.display="block"
    type.style.display="block"
})
vneck.addEventListener("click",function (){
    pop.style.display="block"
    type.style.display="block"
})

half.addEventListener("click",function (){
    popup2.style.display="block"
    select.style.display="block"
     pop.style.display="none"
    type.style.display="none"
})

full.addEventListener("click",function (){
    popup2.style.display="block"
    select.style.display="block"
     pop.style.display="none"
    type.style.display="none"
})
cl1.addEventListener("click",function(){
    popup2.style.display="none"
    select.style.display="none"
    order.style.display="block"

})
cl2.addEventListener("click",function(){
    popup2.style.display="none"
    select.style.display="none"
    order.style.display="block"

})
cl3.addEventListener("click",function(){
    popup2.style.display="none"
    select.style.display="none"
    order.style.display="block"

})
cl4.addEventListener("click",function(){
    popup2.style.display="none"
    select.style.display="none"
    order.style.display="block"

})
cl5.addEventListener("click",function(){
    popup2.style.display="none"
    select.style.display="none"
    order.style.display="block"

})
cl6.addEventListener("click",function(){
    popup2.style.display="none"
    select.style.display="none"
    order.style.display="block"

})
cl7.addEventListener("click",function(){
    popup2.style.display="none"
    select.style.display="none"
    order.style.display="block"

})
next.addEventListener("click", function(){
    order.style.display="none"
    alert('this web work on prosses this only frontent backend comming zoon');
})
cancle.addEventListener("click", function(){
    order.style.display="none"

})
now.addEventListener("click", function(){
    popup2.style.display="block"
    select.style.display="block"
  
  
})