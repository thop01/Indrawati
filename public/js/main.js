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
