let texto = "Hola UwU";
document.getElementById("edit").style.display = "none";
let content = document.getElementById("content");
let cupon = document.getElementById("cupon").value;

function updt() {
  texto = document.getElementById("text").value;
  document.getElementById("content").innerHTML = texto;
  document.getElementById("edit").style.display = "none";
}

function toDataURL(src, callback) {
  var image = new Image();
  image.crossOrigin = "Anonymus";
  image.onload = function () {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    canvas.height = this.naturalHeight;
    canvas.width = this.naturalWidth;
    context.drawImage(this, 0, 0);
    var dataURL = canvas.toDataURL("image/jpeg");
    callback(dataURL);
  };
  image.src = src;
}
toDataURL(cupon, function (dataURL) {
  document.getElementById("result").innerHTML = dataURL;
});

function mostrar() {
  document.getElementById("edit").style.display = "block";
}
