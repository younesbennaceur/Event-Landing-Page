// schudles

function schudlestabco() {
    const table=document.querySelectorAll("js-schudle-tab")
    table.forEach((tab)=>{
        tab.addEventListener("click", ()=>{
            alert("hii")
        })
    })
}

schudlestabco()