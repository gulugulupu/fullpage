/*eslint-disable */
import justSelf from "../justSelf/justSelf";

export default function () {

    var content = document.querySelector("#wrap .content");
    var bannerList = document.querySelector(".bannerList");
    var bannerListNodes = bannerList.querySelectorAll("li");
    var bannerPoints = document.querySelector(".bannerPoints");
    var bannerPointsNodes = bannerPoints.querySelectorAll("li");
    var oldIndex = 0;
    var autoIndex = 0;
    var timer = 0;
    //自动播放
    autoPlay();
    //移出自动播放
    content.onmouseleave = () => {
      //自动播放
      autoPlay();
    };
    //移入停止
    content.onmouseenter=()=>{
      clearInterval(timer);
    };

    //点击小圆点
    bannerPointsNodes.forEach((item, index) => {
      item.index = index;
      item.onclick = function () {
        clearInterval(timer);
        //排他
        justSelf(bannerPointsNodes, index);
        //move
        if (oldIndex === this.index) {
          return;
        }
        clearClass(bannerListNodes[this.index]);
        clearClass(bannerListNodes[oldIndex]);
        if (oldIndex < this.index) {//点击右边
          bannerListNodes[oldIndex].classList.add("leftHide");
          bannerListNodes[this.index].classList.add("rightShow");
        }
        if (oldIndex > this.index) {//点击左边
          bannerListNodes[oldIndex].classList.add("rightHide");
          bannerListNodes[this.index].classList.add("leftShow");
        }
        oldIndex = this.index;
        autoIndex = this.index;
      };

    });
    //封装autoplay
    function autoPlay(){
      clearInterval(timer);
      timer = setInterval(() => {
        autoIndex++;
        if (autoIndex > bannerListNodes.length - 1) {
          autoIndex = 0;
        }
        clearClass(bannerListNodes[autoIndex]);
        clearClass(bannerListNodes[oldIndex]);
        bannerListNodes[oldIndex].classList.add("leftHide");
        bannerListNodes[autoIndex].classList.add("rightShow");
        oldIndex = autoIndex;
        //排他
        justSelf(bannerPointsNodes, autoIndex);
      }, 3000);
    }

    //封装清除类
    function clearClass(node) {
      node.classList.remove("leftHide");
      node.classList.remove("rightShow");
      node.classList.remove("rightHide");
      node.classList.remove("leftShow");
    }


}
