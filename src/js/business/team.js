/*eslint-disable */
import bubble from "../bubble/bubble";

export default function () {

  var teamListNodes = document.querySelectorAll(".team3>ul>li");
  var oc = document.querySelector("canvas");
  var w = teamListNodes[0].offsetWidth;
  var h = teamListNodes[0].offsetHeight;
  oc.width = w ;
  oc.height = h;

//
  teamListNodes.forEach((item, index) => {
    item.style.backgroundPositionX = -w * index + "px";

    item.onmouseenter = function() {
      //排他
      teamListNodes.forEach((item) => {
        item.style.opacity = 0.5;
      });
      this.style.opacity = 1;

      //
      oc.style.display = "block";
      oc.style.left = this.offsetLeft+ "px";
      bubble.bubbleFn(oc);
    };

  });
  //oc 定位在li之上
  oc.onmouseleave=function () {
    this.style.display="none";
    teamListNodes.forEach((item) => {
      item.style.opacity = 1;
    });
  }


}
