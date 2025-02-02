function main(arg) {
    let html = `
    <div class="part">
        <h2>${arg}...</h2>
        <div class="bar">
            <div class="probar"></div>
        </div>
    </div>`
    return html;
}

document.getElementById("hack").addEventListener("click", ()=>{
    document.querySelector(".output").innerHTML = "";
    setTimeout(() => {
        document.querySelector(".output").insertAdjacentHTML("beforeend", main("Initializing"));
    }, 1000);
    setTimeout(() => {
        document.querySelector(".output").insertAdjacentHTML("beforeend", main("Injecting Miner"));
    }, 4000);
    setTimeout(() => {
        document.querySelector(".output").insertAdjacentHTML("beforeend", main("Stealing Data"));
    }, 7000);
    setTimeout(() => {
        document.querySelector(".output").insertAdjacentHTML("beforeend", main("Cleaning Up"));
    }, 10000);
    setTimeout(() => {
        document.querySelector(".output").insertAdjacentHTML("beforeend", "<h2>Now you may die...</h2>");
    }, 13500);
})


