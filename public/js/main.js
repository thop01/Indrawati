fetch("/api/get_site_info", 
    {method: "GET"}
)
.then(r=>r.json())
.then(data => {
    showSiteInfo(data);
});

function showSiteInfo(info){
    document.querySelector("h1.title") ? document.querySelector("h1.title").textContent = info.title: false;
    document.querySelector("p.sub-title") ? document.querySelector("p.sub-title").textContent = info.subTitle: false;

}

document.querySelector("button.reserve").addEventListener("click", e =>{
console.log(e);
     const name = document.querySelector("input#name").value;
     const tel = document.querySelector("input#tel").value; 
     const amountPeople = Number(document.querySelector("input#amountPeople").value); 
     const date = document.querySelector("input#date").value; 
     
     if(name && tel && amountPeople && date){
        const obj = {name, amountPeople, date};
        makeReservation(obj);
     }else{
        alert("vull alles in");
     }
});

function makeReservation(data){

     fetch("/api/reservation", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({reservation: data})
     }).then(response => response.json)
     .then(data => console.log(data));
}