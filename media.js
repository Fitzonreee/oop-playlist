function Media(title, duration) {
	this.title = title;
	this.duration = duration;
	this.isPlaying = false;
}

Song.prototype.play = function() {
	this.isPlaying = true;
};

Song.prototype.stop = function() {
	this.isPlaying = false;
};