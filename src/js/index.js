// import "@babel/polyfill"
import "./frame/frame"
import "./business/home"
import "./business/course"
import "./business/works"
import "./business/about"
import "./business/team"

window.onresize = function () {
  var arrow = document.querySelector('#head-wrap .head .arrow')
  var liNodes = document.querySelectorAll('#head-wrap .head .nav li')
  var contentNode = document.querySelector('#content')
  var contentLiNodes = document.querySelectorAll('#content .list li')
  var home = liNodes[0]
  //重新计算li的高度
  contentLiNodes.forEach((liNode) => {
    liNode.style.height = contentNode.offsetHeight + 'px'
  })
  //切换箭头
  arrow.style.left = (home.offsetLeft + (home.offsetWidth / 2) + (arrow.offsetWidth / 2)) + "px";
}
