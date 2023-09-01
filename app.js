const vm = Vue.createApp({
    data() {
        return {
            number:'0'
        }
    }
}).mount('#app')

// function click_grow() {
//     document.querySelector(".increment").classList.toggle("click_grow")
// }

function reset(){
    alert("Confirm Reset: Your are about to reset the counter to '0'")
    // document.querySelector(".number").innerHTML="0"
    location.reload()
}