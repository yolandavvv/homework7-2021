var video = document.querySelector('#player1')
var vidVolume = document.querySelector('#volume')

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	vidVolume.innerHTML = video.volume * 100;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});



document.querySelector('#slower').addEventListener("click", function(){
	console.log("New video speed is " + video.playbackRate);
	video.playbackRate -= 0.05;
});

document.querySelector('#faster').addEventListener("click", function(){
	console.log("New video speed is " + video.playbackRate);
	video.playbackRate += 0.05;
});

document.querySelector('#skip').addEventListener('click', function(){

	console.log("Original location "+ video.currentTime);

	if (video.currentTime+15 <= video.duration){
		video.currentTime += 15;

	}
	else{

		console.log("Going back to Beginning");
		video.currentTime = 0;

	}
	console.log("New location "+ video.currentTime);

});

document.querySelector('#mute').addEventListener("click", function(){
	if (video.muted === false){
		video.muted = true;
		document.querySelector('#mute').innerHTML = 'Unmute';
	}
	else{
		video.muted = false;
		document.querySelector('#mute').innerHTML = 'mute';
	}
});

var VolumeControl = document.querySelector('#slider')
VolumeControl.addEventListener('change', function(){
	video.volume = (VolumeControl.value)/ 100;
	vidVolume.innerHTML = video.volume * 100;
});

document.querySelector('#vintage').addEventListener('click',function(){
	video.classList.add('oldSchool');
});

document.querySelector('#orig').addEventListener('click',function(){
	video.classList.remove('oldSchool');
})