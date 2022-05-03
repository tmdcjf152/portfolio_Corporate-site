var mapContainer = document.getElementById('map');

const t_on = document.querySelectorAll(".traffic li")[0];
const t_off = document.querySelectorAll(".traffic li")[1];

const branch_btns = document.querySelectorAll(".branch li");

let drag = true;
let zoom = true;

var mapOption = {
    center: new kakao.maps.LatLng(37.507025, 126.7563481),
    level: 3
};

var map = new kakao.maps.Map(mapContainer, mapOption);

var markerOptions = [
    {
        title: "the head shop",
        latlng: new kakao.maps.LatLng(37.523122, 127.035669),
        imgSrc: 'img/marker.png',
        imgSize: new kakao.maps.Size(232, 99),
        imgPos: { offset: new kakao.maps.Point(116, 99) },
        button: branch_btns[0]
    },
    {
        title: "Galleria Department Store",
        latlng: new kakao.maps.LatLng(37.528365, 127.040106),
        imgSrc: 'img/marker.png',
        imgSize: new kakao.maps.Size(232, 99),
        imgPos: { offset: new kakao.maps.Point(116, 99) },
        button: branch_btns[1]
    },
    {
        title: "Lotte World Tower",
        latlng: new kakao.maps.LatLng(37.512534, 127.102394),
        imgSrc: 'img/marker.png',
        imgSize: new kakao.maps.Size(232, 99),
        imgPos: { offset: new kakao.maps.Point(116, 99) },
        button: branch_btns[2]
    }
];
for (let i = 0; i < markerOptions.length; i++) {
    new kakao.maps.Marker({
        map: map,
        position: markerOptions[i].latlng,
        title: markerOptions[i].title,
        image: new kakao.maps.MarkerImage(markerOptions[i].imgSrc, markerOptions[i].imgSize, markerOptions[i].imgPos)
    });

    markerOptions[i].button.onclick = (e) => {
        e.preventDefault();
        for (let k = 0; k < markerOptions.length; k++) {
            markerOptions[k].button.classList.remove("on");
        }
        markerOptions[i].button.classList.add("on");

        moveTo(markerOptions[i].latlng);
    }
}

window.onresize = () => {
    let active_btn = document.querySelector(".branch li.on");
    let active_index = active_btn.getAttribute("data-index");

    map.setCenter(markerOptions[active_index].latlng);
}


t_on.addEventListener("click", (e) => {
    e.preventDefault();

    if (t_on.classList.contains("on")) return;

    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
    t_on.classList.add("on");

    t_off.classList.remove("on");

})

t_off.addEventListener("click", (e) => {
    e.preventDefault();
    if (t_off.classList.contains("on")) return;
    map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
    t_off.classList.add("on");
    t_on.classList.remove("on");
})

var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);



setDraggable(drag);
function setDraggable(draggable) {
    map.setDraggable(draggable);

}

setZoomable(zoom);
function setZoomable(zoomable) {
    map.setZoomable(zoomable);

}


function moveTo(target) {
    var moveLatLon = target;
    map.setCenter(moveLatLon);
}