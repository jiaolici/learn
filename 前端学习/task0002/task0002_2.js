var panel1 = document.getElementsByClassName("panel1")[0];
var panel2 = document.getElementsByClassName("panel2")[0];
document.addEventListener("mousedown",mousedownhandler,true);
document.addEventListener("mouseup",mouseuphandler,true);


function mousedownhandler(){
    var target = event.target;
    var currentTarget = event.currentTarget;
    
    if(target.className == "item1" || target.className == "item2"){
        currentTarget.mousepositionX = event.screenX;
        currentTarget.mousepositionY = event.screenY;
        currentTarget.movingitem = target;
        currentTarget.movingitemoffsetleft = target.offsetLeft;
        currentTarget.movingitemoffsettop = target.offsetTop;
        target.style.position = "absolute";
        target.style.left = target.offsetleft;
        target.style.top = target.offsetleft;
        target.style.zIndex = 100;
        document.addEventListener("mousemove",mousemovehandler,true);
    }
    else{

    }
}
function mousemovehandler(){
    var target = event.target;
    var currentTarget = event.currentTarget;
    target.onclick = function(e){
        e.preventDefault();
    };
    if(currentTarget.movingitem==null){
        return;
    }
    var movingitem = currentTarget.movingitem;
    var offsetX = event.screenX-currentTarget.mousepositionX;
    var offsetY = event.screenY-currentTarget.mousepositionY;
    var left = parseInt(currentTarget.movingitemoffsetleft);
    var top = parseInt(currentTarget.movingitemoffsettop);
    movingitem.style.left = left+offsetX+"px";
    movingitem.style.top = top+offsetY+"px";
}

function mouseuphandler(){
    var target = event.target;
    var currentTarget = event.currentTarget;
    var movingitem = currentTarget.movingitem;
    if(!movingitem){
        return;
    }
    currentTarget.movingitem = null;
    var panelClientRect1 = panel1.getBoundingClientRect();
    var panelClientRect2 = panel2.getBoundingClientRect();
    var movingitemRect = movingitem.getBoundingClientRect();
    if(panelClientRect1.left<=event.clientX && event.clientX<=panelClientRect1.right && panelClientRect1.top<=event.clientY && event.clientY<=panelClientRect1.bottom){
        movingitem.parentNode.removeChild(movingitem);
        if(panel1.childrenElementCount==0){
            panel1.appendChild(movingitem);
        }
        else{
            if(movingitemRect.top>panel1.lastElementChild.getBoundingClientRect().top){
                panel1.appendChild(movingitem);
            }
            else{
                for(var index in panel1.children){
                    var item = panel1.children[index];
                    var itemRect = item.getBoundingClientRect();
                    if(itemRect.top<movingitemRect.bottom&&movingitemRect.bottom<itemRect.bottom){
                        panel1.insertBefore(movingitem,item);
                        break;
                    }
                }
            }
        }
    }
    else if(panelClientRect2.left<=event.clientX && event.clientX<=panelClientRect2.right&&panelClientRect2.top<=event.clientY && event.clientY<=panelClientRect2.bottom){
        movingitem.parentNode.removeChild(movingitem);
        if(panel2.childrenElementCount==0){
            panel2.appendChild(movingitem);
        }
        else{
            if(movingitemRect.top>panel2.lastElementChild.getBoundingClientRect().top){
                panel2.appendChild(movingitem);
            }
            else{
                for(var index in panel2.children){
                    var item = panel2.children[index];
                    var itemRect = item.getBoundingClientRect();
                    if(itemRect.top<movingitemRect.bottom&&movingitemRect.bottom<itemRect.bottom){
                        panel2.insertBefore(movingitem,item);
                        break;
                    }
                }
            }
        }
    }
    movingitem.style.position = "static";
    movingitem.style.left = null;
    movingitem.style.top = null;
    target.style.zIndex = null;
    document.removeEventListener("mousemove",mousemovehandler);
}