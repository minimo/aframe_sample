window.onload = function() {
  httpObj = new XMLHttpRequest();
  httpObj.open("get", "meta/settings.json", true);
  httpObj.onload = function(){
    var myData = JSON.parse(this.responseText);
    vrider.buildScene(myData);
  }
  httpObj.send(null);
}

var vrider = {};

//指定されたJSONを読み込んでシーン構築
vrider.buildScene = function(data) {
  //A-Frameの主要オブジェクト取得
  var scene = document.querySelector('a-scene');
  var camera = scene.camera;
  var renderer = scene.renderer;

  if (camera) {
    camera.position.x = data.cameraPosX;
    camera.position.y = data.cameraPosY;
    camera.position.z = data.cameraPosZ;
  }
}
