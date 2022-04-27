/*
Key : AIzaSyDHMuI6MNXA_9ecFqq_7CR3fVWz4BB0Wa0

PlatListID :  PL5rc04oi99fece6WMCLuZhjtVitkae3Ml

URL : https://www.googleapis.com/youtube/v3/playlistItems
*/

const vidList = document.querySelector(".vidList");
const key = "AIzaSyDHMuI6MNXA_9ecFqq_7CR3fVWz4BB0Wa0";
const playlistId = "PL5rc04oi99fece6WMCLuZhjtVitkae3Ml";
const num = 10;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

fetch(url)
    .then(data => {
        return data.json();
    })
    .then(json => {
        let items = json.items;
        console.log(items);
        let result = '';

        items.map(item => {

            let title = item.snippet.title;

            if (title.length > 25) {
                title = title.substr(0, 25) + "...";
            }
            let con = item.snippet.description;
            if (con.length > 50) {
                con = con.substr(0, 50) + "...";
            }
            let date = item.snippet.publishedAt;

            date = date.split("T")[0];


            result += `<article>
            <a href="${item.snippet.resourceId.videoId}" class="pic">
                <img src="${item.snippet.thumbnails.medium.url}">
            </a>
            <div class="con">
            <a href="${item.snippet.resourceId.videoId}" class="title">
            ${title}</a>
                <p>${con}</p>
                <span>${date}</span>
            </div>
        </article>`;
        })
        vidList.innerHTML = result;
    })

vidList.addEventListener("click", (e) => {
    e.preventDefault();

    if (!e.target.closest("a")) return;

    const vidId = e.target.closest("a").getAttribute("href");

    let pop = document.createElement("figure");
    pop.classList.add("pop");
    pop.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${vidId}" frameborder="0" width="100%" height="100%"></iframe>
            <span class="btnClose">CLOSE</span>
    
    `;

    vidList.append(pop);
});

vidList.addEventListener("click", (e) => {
    const pop = vidList.querySelector(".pop");
    if (pop) {
        const close = pop.querySelector("span");
        if (e.target == close) pop.remove();
    }
})