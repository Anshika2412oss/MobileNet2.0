Webcam.set({
    width:310,
    height:400,
    image_format:'png',
    png_quality:90,

    constraints:{
        facingMode: "enviroment"

    }
});
camera = document.getElementById("camera");

Webcam.attach('#camera');