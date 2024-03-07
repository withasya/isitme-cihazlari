const nextIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">\n' +
    '  <path style="color: #ff6720;" fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>\n' +
    '</svg>';
const prevIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">\n' +
    '  <path style="color: #ff6720;" fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>\n' +
    '</svg>';

$(document).ready(function(){
    $('#owlCarousel1').owlCarousel({
        loop:false,
        items:3,
        margin:10,
        nav:false,
        mouseDrag:true,
        center: false,
        navText: [
            prevIcon,
            nextIcon
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
        }
    });});

$(document).ready(function(){
    $('#owlCarousel2').owlCarousel({
        loop:true,
        items:5,
        margin:10,
        nav:false,
        mouseDrag:true,
        center: true,
        navText: [
            prevIcon,
            nextIcon
        ],
        responsive:{
            0:{
                items:3.5
            },
            1000:{
                items:5
            },
        }
    });});

$(document).ready(function(){
    $('#owlCarousel3').owlCarousel({
        loop:false,
        items:4,
        margin:10,
        nav:false,
        mouseDrag:true,
        center: false,
        navText: [
            prevIcon,
            nextIcon
        ],
        responsive:{
            0:{
                items:2
            },
            1050:{
                items:2.5
            },
            1250:{
                items:3
            },
        }
    });});