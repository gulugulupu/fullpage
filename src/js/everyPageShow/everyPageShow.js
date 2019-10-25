/* eslint-disable */
var bannerList = document.querySelector(".bannerList");
var bannerPoints = document.querySelector(".bannerPoints");
var plane1 =document.querySelector(".plane1");
var plane2 =document.querySelector(".plane2");
var plane3 =document.querySelector(".plane3");
var pencel1 =document.querySelector(".pencel1");
var pencel2 =document.querySelector(".pencel2");
var pencel3 =document.querySelector(".pencel3");
var about3 =document.querySelector(".about3");
var about4 =document.querySelector(".about4");

var team1 =document.querySelector(".team1");
var team2 =document.querySelector(".team2");




export default [
  //1 home
  {showinFn:function () {
      bannerList.style.transform="translateY(0px)";
      bannerList.style.opacity=1;
      bannerPoints.style.transform="translateY(0px)";
      bannerPoints.style.opacity=1;
    },
    showoutFn:function () {
      bannerList.style.opacity=0;
      bannerList.style.transform="translateY(-250px)";
      bannerPoints.style.transform="translateY(250px)";
      bannerPoints.style.opacity=0;
    }
    },
  //2 course
  {showinFn:function () {
      plane1.style.transform = "translate(100px,100px)";
      plane2.style.transform = "translate(100px,-100px)";
      plane3.style.transform = "translate(-80px,40px)";
    },
    showoutFn:function () {
      plane1.style.transform = "translate(0px,0px)";
      plane2.style.transform = "translate(0px,0px)";
      plane3.style.transform = "translate(0px,0px)";
    }
  },
  //3 works
  {showinFn:function () {
      pencel1.style.transform = "translateY(50px)"
      pencel2.style.transform = "translateY(-50px)"
      pencel3.style.transform = "translateY(-50px)"
    },
    showoutFn:function () {
      pencel1.style.transform = "translateY(0px)";
      pencel2.style.transform = "translateY(0px)";
      pencel3.style.transform = "translateY(0px)";
    }
  },
  //4 about
  {showinFn:function () {
      about3.style.transform="rotate(0deg)";
      about4.style.transform="rotate(0deg)";
    },
    showoutFn:function () {
      about3.style.transform="rotate(-45deg)";
      about4.style.transform="rotate(45deg)";
    }
  },
  //5 team
  {showinFn:function () {
      team1.style.transform="translateX(0px)";
      team2.style.transform="translateX(0px)"
    },
    showoutFn:function () {
      team1.style.transform="translateX(-100px)";
      team2.style.transform="translateX(100px)";
    }
  },
]
