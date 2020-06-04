var url = "https://youtu.be/VNSVJRhUvig";
var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
if(videoid != null) {
   console.log("video id = ",videoid[1]);
} else { 
    console.log("The youtube url is not valid.");
}
var YoutubeMp3Downloader = require("youtube-mp3-downloader");

//Configure YoutubeMp3Downloader with your settings
var YD = new YoutubeMp3Downloader({
    "ffmpegPath": "/usr/bin/ffmpeg",        // Where is the FFmpeg binary located?
    "outputPath": "mp3",    // Where should the downloaded and encoded files be stored?
    "youtubeVideoQuality": "highest",       // What video quality should be used?
    "queueParallelism": 2,                  // How many parallel downloads/encodes should be started?
    "progressTimeout": 2000                 // How long should be the interval of the progress reports
});

//Download video and save as MP3 file
YD.download(videoid[1]);

YD.on("finished", function(err, data) {
    console.log(data.file);
});

YD.on("error", function(error) {
    console.log(error);
});

YD.on("progress", function(progress) {
    console.log(progress);
});

