$(document).ready(function(){
    
    var currentStatusVideo = false;
    var currentPlay;
    var currentVideo;
    var currentPlayOver;
    
    $(".play").click(function(){
        currentPlay = $(this);
        currentPlayOver = $(this).parent();
        currentVideo = currentPlay.siblings("video").get(0);
        
        if(currentVideo === undefined){
            return;
        }
        
        if(currentPlayOver.hasClass("start")){
            currentVideo.pause();
        }
        
        currentPlayOver.addClass("start");
        currentVideo.play();
        currentStatusVideo = true;
        currentPlay.fadeOut(200);
        
        var duration = (+currentVideo.duration * 1000);
        
        window.setInterval(function(){
            currentVideo.currentTime = 0;
            currentStatusVideo = false;
            currentPlay.fadeIn(200);
        }, duration);
        
    });
    
    currentPlay.siblings("video").click(function(){
        alert("h")
    });
    

    
    
    
    
    
  /*  var currentStatusVideo = false;
    var currentVideo;
    
    $(".play").click(function(){
        
        window.currentVideo = $(this).siblings("video").get(0);
        
        var sib = $(this).siblings("video").get(0);
        var curentPlay = $(this);
        
        if(sib != undefined){
            sib.play();
            
            window.currentStatusVideo = true;
            
            var duration = (+sib.duration * 1000);
            var currentTime = sib.currentTime;
    
            curentPlay.fadeOut(200);
            
            window.setInterval(function(){
                sib.currentTime = 0;
                curentPlay.fadeIn(200);
                
            }, duration);
            
        }
        
        $(currentVideo).click(function(){
            if(currentVideo !== undefined){
                if(currentStatusVideo){
                    currentVideo.pause();
                }else if(currentStatusVideo === false){
                    currentVideo.play();
                }
            }
            
           
        }); 
       
    });  */
});