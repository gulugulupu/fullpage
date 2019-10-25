/*eslint-disable */
import justSelf from "../justSelf/justSelf";
import everyPageShow from "../everyPageShow/everyPageShow";
export default function () {

  //头部交互
  var arrow = document.querySelector(".arrow");
  //li元素
  var headLiNodes = document.querySelectorAll(".headerNav .list>li");
  //上层元素
  var coverNodes = document.querySelectorAll(".headerNav .list .cover");
  var content = document.querySelector(".content");
  var mainList = document.querySelector(".mainList");
  var contentLiNodes = document.querySelectorAll(".content .mainList>li");
  var pointLiNodes = document.querySelectorAll(".content .points>li");
  var preIndex=0;
  //箭头初始位置
  arrow.style.left = headLiNodes[0].offsetLeft + headLiNodes[0].offsetWidth / 2 - arrow.offsetWidth / 2 + "px";
  //设置content每个li高度
  contentLiNodes.forEach((item) => {
    item.style.height = content.offsetHeight + "px";
  });
  //遍历headLiNodes绑定点击事件
  headLiNodes.forEach((item, index) => {
    item.onclick = () => {
      move(index);

    }
  });
  //遍历pointLiNodes绑定点击事件
  pointLiNodes.forEach((item, index) => {
    item.onclick = () => {
      move(index);

    }
  });
  // content监听滚轮事件
  content.index = 0;
  var timer = null;
  // chrome ie
  content.onmousewheel = (event) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      scrollFn(event, content.index)
    }, 500)
  };
  // firefox
  content.addEventListener('DOMMouseScroll', (event) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      scrollFn(event, content.index)
    }, 500)

  });

//封装滚轮callback
  function scrollFn(event, index) {
    //定义变量记录滚动方向
    var dir = '';
    if (event.wheelDelta) {
      // ie chrome
      if (event.wheelDelta > 0) {
        dir = 'up';
      } else {
        dir = 'down';
      }
    } else if (event.detail) {
      // firefox
      if (event.detail < 0) {
        dir = 'up';
      } else {
        dir = 'down';
      }
    }

    if (dir === 'up') {
      index > 0 ? index-- : 0;
      move(index)
    } else if (dir === 'down') {
      index < (pointLiNodes.length - 1) ? index++ : (pointLiNodes.length - 1);
      move(index)
    }
  }

  //封装move事件
  function move(index) {
    everyPageShow[index].showinFn();
    everyPageShow[preIndex].showoutFn();
    content.index = index;
    //cover层排他
    justSelf(coverNodes,index);

    //小圆点排他
    justSelf(pointLiNodes,index);
    //箭头move
    arrow.style.left = headLiNodes[index].offsetLeft + headLiNodes[index].offsetWidth / 2 - arrow.offsetWidth / 2 + "px";
    //切换每一屏
    mainList.style.top = -index * content.offsetHeight + "px";

    preIndex=index;
  }


}


