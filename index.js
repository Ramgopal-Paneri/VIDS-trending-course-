const hiddenElements = document.getElementsByClassName('hidden');
// console.log(hiddenElements)
function show(){
const observer = new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
    if(entry.isIntersecting){
        entry.target.classList.add('show');
    }else{
        entry.target.classList.remove('show');
    }
})
});

Array.from(hiddenElements).forEach(element => 
    observer.observe(element)
);
}