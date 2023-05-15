(()=>{
    const imgArray = document.querySelectorAll('.gelleryImg');

    imgArray.forEach(img=>img.addEventListener('animationiteration', animationImg));

    let index=0;
    function animationImg(e){
        index = Number(e.target.id);
        imgArray.forEach(item=>{
            item.classList.toggle('active')
        });
    }
})();