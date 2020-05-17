var type1 = {id:"1",name:"百度IFE项目"};
var type2 = {id:"2",name:"毕业设计"};
var type3 = {id:"3",name:"社团活动"};

var types = {typeList:[type1,type2,type3]};
types.typeListElement = document.getElementsByClassName("type-list")[0];
types.addType = function(type){
    var typeitem = document.createElement("div");
    typeitem.setAttribute("class","type-item");
    typeitem.setAttribute("id","type"+type.id);
    typeitem.innerHTML = "<div>"+type.name+"</div><ul></ul>";
    this.typeListElement.appendChild(typeitem);
    this.typeList.append(type);
};
types.deleteType = function(id){
    for(var i in this.typeList){
        if("type"+this.typeList[i].id==id){
            var target = this.typeList[i];
            break;
        }
    }
    this.typeListElement.removeChild(target);
    this.typeList.splice(i,1);
}
