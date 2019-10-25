/* eslint-disable */
import home from "../business/home"
import everyPageShow from "../everyPageShow/everyPageShow"
export default function () {
  var coverNode = document.querySelector("#wrap>.cover");
  var topNode = coverNode.querySelector(".top");
  var lineNode = coverNode.querySelector(".line");
  var downNode = coverNode.querySelector(".down");

  setTimeout(() => {
    lineNode.style.width = "100%"
  }, 2000);

  lineNode.addEventListener("transitionend", function () {
    //去掉白线
    this.remove();
    topNode.style.height = 0;
    downNode.style.height = 0;
  });

  topNode.addEventListener("transitionend", function () {
    //去掉遮罩层
    coverNode.remove();
    everyPageShow[0].showinFn();
    home();
  })

}
