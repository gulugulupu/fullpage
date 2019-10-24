/*eslint-disable */
export default function () {

  var spiderList = document.querySelectorAll(".spider>ul");
  var w = spiderList[0].offsetWidth/2;
  var h = spiderList[0].offsetHeight/2;

  spiderList.forEach((item) => {
    //循环设置li&img 及初始样式
    for (var i = 0; i < 4; i++) {
      var liNode = document.createElement("li");
      var imgNode = document.createElement("img");
      //设置li宽高
      liNode.style.width = w + "px";
      liNode.style.height = h + "px";
      imgNode.style.left=  -i%2*w +"px";
      imgNode.style.top=     -Math.floor(i/2)*h +"px";
      imgNode.src = item.dataset.src;
      liNode.appendChild(imgNode);
      item.appendChild(liNode);
      //img 初始位置
      /* i     left     top
      * 0         0         0
      * 1         -w        0
      * 2        0          -h
      * 3         -w       -h
      * 规律    -i%2*w       -Math.floor(i/2)*h
      * */
    }
  });

var spiders=document.querySelectorAll(".spider");
  spiders.forEach((item)=>{
    //鼠标移入
    item.onmouseenter=function () {
      var imgNodes=this.querySelectorAll("ul>li>img");
      //img
      /* i     left          top
      * 0         0 => 0          0=>h
      * 1         -w => -2w      0=>0
      * 2          0 => w        -h=>-h
      * 3         -w =>-w              -h=>-2h
      * */
      imgNodes.forEach((item,index)=>{
        switch (index){
          case 0:
            item.style.top = h+"px";
            break;
          case 1:
            item.style.left = -2*w+"px";
            break;
          case 2:
            item.style.left = w+"px";
            break;
          case 3:
            item.style.top = -2*h+"px";
            break;
        }
      })


    };
    //鼠标移出
    item.onmouseleave=function () {
      var imgNodes=this.querySelectorAll("ul>li>img");
      //img
      /* i     left          top
      * 0         0 => 0          0=>h
      * 1         -w => -2w      0=>0
      * 2          0 => w        -h=>-h
      * 3         -w =>-w              -h=>-2h
      * */
      imgNodes.forEach((item,index)=>{
        switch (index){
          case 0:
            item.style.top = 0;
            break;
          case 1:
            item.style.left = -w+"px";
            break;
          case 2:
            item.style.left = 0;
            break;
          case 3:
            item.style.top = -h+"px";
            break;
        }
      })
    };
  })



}
