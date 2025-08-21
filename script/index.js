// const section = document.getElementsByTagName('section')

const sec = document.querySelectorAll('section')
// console.log(sec)
// for(const secs of sec){
//     console.log(secs)
//     secs.style.backgroundColor='blue'
//     secs.style.border='2px solid green'
//     secs.style.marginBottom='8px'
//     secs.style.borderRadius='10px'
//     secs.style.padding='10px'
// }


for(const secs of sec){
    secs.classList.add('section')
}
