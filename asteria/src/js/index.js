import "./business/home";
import "./business/course";
import "./business/works";
import "./business/about";
import "./business/team";
import "./frame/frame";

window.onresize=function () {

  var liNodes=document.querySelectorAll('html body #app .head .headMain .nav .item');
  var arrow=document.querySelector("html body #app .head .headMain .arrow ");
  var music=document.querySelector("html body #app .head .headMain .music");
  var audio=document.querySelector("html body #app .head .headMain .music audio");
  var homeNode=liNodes[0];
  var content=document.querySelector("html body #app .content ");
  var list=document.querySelector("html body #app .content .list");
  var listNodes=document.querySelectorAll("html body #app .content > .list > li");
  var points=document.querySelectorAll("html body #app .content .points li");

  arrow.style.left=(homeNode.offsetLeft+homeNode.offsetWidth/2-arrow.offsetWidth/2)+"px";
  listNodes.forEach(function (liNode) {
    liNode.style.height=content.offsetHeight+'px';
  });
}