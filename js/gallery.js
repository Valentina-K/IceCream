(()=>{
    const imgArray = document.querySelectorAll('.gallery-img');
    

    imgArray.forEach(img=>img.addEventListener('animationiteration', animationImg));
    imgArray[0].classList.add('active');
    let index=0;
    function animationImg(e){
        console.log(e)
        imgArray[index].classList.toggle('active')
        if(index!=2){
            index = index+1;
        } else {
            index=0;
        }
        imgArray[index].classList.toggle('active');        
    }
})();