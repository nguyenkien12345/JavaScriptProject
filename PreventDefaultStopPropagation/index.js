// anchors: là lấy ra toàn bộ thẻ a có name
// links: là lấy ra toàn bộ thẻ a

// preventDefault();
var aElements = document.links;
for(var i = 0; i < aElements.length; ++i){
    aElements[i].onclick = function(e){
        e.preventDefault();
        console.log(e.target.href);
    }
}

var ulElement = document.querySelector("ul");
ulElement.onmousedown = function(e){
    e.preventDefault();
}
ulElement.onclick = function(e){
    console.log(e.target);
}

// stopPropagation();
var divElement = document.querySelector('div');
divElement.onclick = function(e){
    console.log('NTK');
}

var buttonElement = document.querySelector('button');
buttonElement.onclick = function(e){
    e.stopPropagation();
    console.log('CLICK ME');
}