// 获取图片
document.querySelector("button#TakePhoto").onclick = function() {
  var photo = document.querySelector("canvas#photo");
  photo.width = 400;
  photo.height = 300;

  // 巧妙利用drawImage方法获取摄像头中的预览图像
  var video =document.getElementById('video1');
  photo.getContext("2d").drawImage(video, 0, 0, photo.width, photo.height);
};

// 下载图片
function downLoad(url) {
  let a = document.createElement("a");

  a.download = "photo";
  a.href = url;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

document.querySelector("button#SavePhoto").onclick = function() {
  var canvas = document.querySelector("canvas");
  downLoad(canvas.toDataURL("image/jpeg"));
};

let getUserMedia=(navigator.getUserMedia ||navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
getUserMedia.call(navigator,{
    video:true,
    // audio:true
},function(localMediaStream){  
        let video =document.getElementById('video1');
        video.srcObject = localMediaStream;
}, function(e) {
  console.log("## error: ",e);
});

getUserMedia.call(navigator,{
    video:true,
    // audio:true
},function(localMediaStream){  
        var video =document.getElementById('video2');
        video.className = "none";
        video.srcObject = localMediaStream;
}, function(e) {
  console.log("## error: ",e);
});