(()=>{
    const imgArray = document.querySelectorAll('.gallery-img');
    
    imgArray.forEach(img=>img.addEventListener('animationiteration', animationImg));    
    imgArray[0].classList.add('active'); 
       
    let index=0;
    function animationImg(){
        imgArray[index].classList.toggle('active')
        index = index == 2 ? 0 : index + 1;
        
        imgArray[index].classList.toggle('active');        
    }
})();