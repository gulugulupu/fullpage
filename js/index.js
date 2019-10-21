window.onload=function(){
  //获取dom元素
  var arrowEl = document.querySelector("#header .header-main > .pointer");
  var liNodes = document.querySelectorAll("#header .header-main > .nav > .list > li");
  var upNodes = document.querySelectorAll("#header .header-main > .nav > .list > li .up");
  var firstLiNode  = liNodes[0];
  var firstUpNode  = firstLiNode.querySelector(".up");

  firstUpNode.style.width = "100%";
  arrowEl.style.left = firstLiNode.offsetLeft + firstLiNode.offsetWidth/2 - arrowEl.offsetWidth/2+"px";
  for(var i=0;i<liNodes.length;i++){
    //转绑很重要
    liNodes[i].index = i;
    liNodes[i].onclick=function(){
      //i:liNodes.length 5
      for(var i=0;i<upNodes.length;i++){
        //upNodes[i].style.width="0";
        upNodes[i].style.width="";
      }
      upNodes[this.index].style.width="100%";
      arrowEl.style.left = liNodes[this.index].offsetLeft + liNodes[this.index].offsetWidth/2 - arrowEl.offsetWidth/2+"px";
    }
  }
}
