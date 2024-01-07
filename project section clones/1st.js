console.log ("Welcome to Spotify")
let songIndex=0;
let audioElement=new Audio('index.mp3')
let masterplay=document.getElementById('#masterplay')
let myprogress=document.getElementById('#myprogress')

let songs=[
    {songsname:"All To Well" , filepath:"index.mp4" ,coverpath:"Cover/1.jpeg"},
    {songsname:"Exile" , filepath:"index.mp4",coverpath:"Cover/1.jpeg"},
    {songsname:"Goergeous" , filepath:"c:index.mp4",coverpath:"Cover/1.jpeg"},
    {songsname:"Blank Space" , filepath:"index.mp4",coverpath:"Cover/1.jpeg"},
    {songsname:"Lover" , filepath:"index.mp4" ,coverpath:"Cover/1.jpeg"},
    {songsname:"Shake It Off" , filepath:"index.mp4",coverpath:"Cover/1.jpeg"},
    {songsname:"Willow" , filepath:"index.mp4",coverpath:"Cover/1.jpeg"},
    {songsname:"Cruel Summer" , filepath:"index.mp4",coverpath:"Cover/1.jpeg"},
]
//audioElemnet.play();

//handel play/pause click

masterplay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0 ){
        audioElement.play();

    masterplay.classList.remove('fa-play-circle')

    masterplay.classList.add('fa-pause-circle')
    
}
    else{
        
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle')
        masterplay.classList.add('fa-play-circle')
    }
})




