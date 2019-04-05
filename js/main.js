window.onload= function() {
    var logo =
document. getElementById ("logo");
    TweenMax.to(".logo", 2, {left:1050, backgroundColor: "purple"})
    TweenMax.to(".logo", 2, {left:0, top:600, backgroundColor: "blue", delay:2})
    TweenMax.to(".logo", 2, {left:1050, delay:4, backgroundColor: "green"})
};

