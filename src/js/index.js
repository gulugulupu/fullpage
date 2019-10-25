/* eslint-disable */
// import "@babel/polyfill"
import openShow from "./openShow/openShow";
import frame from "./frame/frame";
import course from "./business/course"
import works from "./business/works"
import about from "./business/about"
import team from "./business/team"
window.onload=function(){
  openShow();
  frame();
  works();
  course();
  about();
  team();
};


window.onresize=function () {//监听屏幕重置
  var arrow = document.querySelector(".arrow");
  //li元素
  var headLiNodes = document.querySelectorAll(".headerNav .list>li");
  //上层元素
  var coverNodes = document.querySelectorAll(".headerNav .list .cover");
  var content = document.querySelector(".content");
  var mainList = document.querySelector(".mainList");
  var contentLiNodes = document.querySelectorAll(".content .mainList>li");
  var pointLiNodes = document.querySelectorAll(".content .points>li");
  //箭头初始位置
  arrow.style.left = headLiNodes[0].offsetLeft + headLiNodes[0].offsetWidth / 2 - arrow.offsetWidth / 2 + "px";
  //设置content每个li高度
  contentLiNodes.forEach((item) => {
    item.style.height = content.offsetHeight + "px";
  });

};
