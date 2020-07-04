let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll('.btn');

//console.log(btns);

btns.forEach(function(btn){
    btn.addEventListener("click", function(event){
        const styles = event.currentTarget.classList;
        let color = 'black';
        if(styles.contains('decrease')){
            count -= 1;
            color = 'red';
        } else if(styles.contains('increase')){
            count += 1;
            color = 'green';
        } else {
            count = 0;
        }
        value.style.color = color;
        value.textContent = count;
    });
});