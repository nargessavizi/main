$(document).ready(function(){
    var controller=new ScrollMagic.Controller();
    var ourScene=new ScrollMagic.Scene({
        triggerElement:"#project01"

    })
    .addIndicators({
        name:"fade scene",
        colorTrigger:"balck",
        colorStart:"#0f0"
    })
    .setClassToggle("#project01","fade-in")
    .addTo(controller);
});