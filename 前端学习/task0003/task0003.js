var task1 = {id:"1",subtypeid:"1",name:"to-do1",date:"2019-2-1",content:"task1",state:"未完成"};
var task2 = {id:"2",subtypeid:"1",name:"to-do2",date:"2019-2-2",content:"task2",state:"已完成"};
var task3 = {id:"3",subtypeid:"1",name:"to-do3",date:"2019-2-3",content:"task3",state:"未完成"};
var type1 = {id:"1",name:"百度IFE项目"};
var type2 = {id:"2",name:"毕业设计"};
var type3 = {id:"3",name:"社团活动"};
var subtype1 = {id:"1",parenttypeid:"1",name:"task1"};
var subtype2 = {id:"2",parenttypeid:"1",name:"task2"};
var subtype3 = {id:"3",parenttypeid:"1",name:"task3"};

var tasks = [task1,task2,task3];
var types = [type1,type2,type3];
var subtypes = [subtype1,subtype2,subtype3]
var typelist = document.getElementsByClassName("type-list")[0];
var tasklist = document.getElementsByClassName("task-list")[0];

//加载数据
for(var index in types){
    addType(types[index])
}
for(var index in subtypes){
    addSubTask(subtypes[index]);
}
//将第一种分类选中
var typechoosedElement = typelist.firstElementChild;
typechoosedElement.classList.add("type-choosed");
//将第一分类的第一个子分类选中
var subtypechoosedElement = typechoosedElement.lastElementChild.firstElementChild;
subtypechoosedElement.classList.add("subtype-choosed");
//加载选中的子分类里的任务
for(var index in tasks){
    if(("subtype"+tasks[index].subtypeid)==subtypechoosedElement.getAttribute("id")){
        addTask(tasks[index]);
    }
}
//将第一个任务选中
var taskchoosedElement = tasklist.firstElementChild;
taskchoosedElement = taskchoosedElement.classList.contains("date")?taskchoosedElement.nextElementSibling:taskchoosedElement;
taskchoosedElement.classList.add("task-choosed");

//加载选中的任务
for(var index in tasks){
    if("task"+tasks[index].id==taskchoosedElement.id){
        var taskchoosed = tasks[index];
        break;
    }
}
var taskheader = document.getElementsByClassName("task-header")[0];
taskheader.firstElementChild.innerHTML = taskchoosed.name;
var taskdate = document.getElementsByClassName("task-date")[0];
taskdate.innerHTML = taskchoosed.date
var taskcontent = document.getElementsByClassName("task-content")[0];
taskcontent.innerHTML = taskchoosed.content

//添加分类
function addType(type){
    var typeitem = document.createElement("div");
    typeitem.setAttribute("class","type-item");
    typeitem.setAttribute("id","type"+type.id);
    typeitem.innerHTML = "<div>"+type.name+"</div><ul></ul>";
    typelist.appendChild(typeitem);
}

//添加子分类
function addSubTask(subtype){
    var parenttype = document.getElementById("type"+subtype.parenttypeid);
    var subtypeitem = document.createElement("li");
    subtypeitem.setAttribute("id","subtype"+subtype.id);
    subtypeitem.innerHTML = subtype.name;
    parenttype.lastElementChild.appendChild(subtypeitem);
}

//添加任务到列表
function addTask(task){
    var dates = document.getElementsByClassName("date");
    if(dates.length==0){
        tasklist.innerHTML = "<li class='date'>"+task.date+"</li><li id=task"+task.id+">"+task.name+"</li>"
    }
    else{
        var taskdate = new Date(task.date);
        var taskelement = document.createElement("li");
        taskelement.innerHTML = task.name
        taskelement.setAttribute("id","task"+task.id);
        for(var index in dates){ 
            var currentdate = new Date(dates[index].innerHTML);
            if(taskdate>currentdate){
                var taskdateelement = document.createElement("li");
                var currentdateelement = dates[index];
                taskdateelement.classList.add("date");
                taskdateelement.innerHTML = task.date;
                tasklist.insertBefore(taskdateelement,currentdateelement);
                tasklist.insertBefore(taskelement,currentdateelement);
                break;
            }
            else if(taskdate.getTime()==currentdate.getTime()){
                tasklist.insertBefore(dates[index].nextElementSibling,taskelement);
            }
            else{
                if(index==(dates.length-1)){
                    var taskdateelement = document.createElement("li");
                    taskdateelement.classList.add("date");
                    taskdateelement.innerHTML = task.date;
                    tasklist.appendChild(taskdateelement);
                    tasklist.appendChild(taskdateelement);
                    break;
                }
                else{
                    continue;
                }
            }
        }
    }
}

//点击事件
function typeClickHandler(){

}
function  subTypeClickHandler(){

}