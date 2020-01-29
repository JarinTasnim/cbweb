particlesJS("particles-js", {
    "particles": {
        "number": {
            "value":80, "density": {
                "enable": true, "value_area": 800
            }
        }
        , "color": {
            "value": "#ededed"
        }
        , "shape": {
            "type":"circle", "stroke": {
                "width": 0, "color": "#000000"
            }
            , "polygon": {
                "nb_sides": 3
            }
            
        }
        , "opacity": {
            "value":0.45770563214671817, "random":false, "anim": {
                "enable": false, "speed": 0.8791208791208792, "opacity_min": 0.1, "sync": false
            }
        }
        , "size": {
            "value":0, "random":true, "anim": {
                "enable": false, "speed": 40, "size_min": 0.1, "sync": false
            }
        }
        , "line_linked": {
            "enable": true, "distance": 150, "color": "#cfcdcd", "opacity": 0.4, "width": 1
        }
        , "move": {
            "enable":true, "speed":6, "direction":"none", "random":false, "straight":false, "out_mode":"out", "bounce":false, "attract": {
                "enable": false, "rotateX": 600, "rotateY": 1200
            }
        }
    }
    , "interactivity": {
        "detect_on":"canvas", "events": {
            "onhover": {
                "enable": true, "mode": "repulse"
            }
            , "onclick": {
                "enable": true, "mode": "push"
            }
            , "resize":true
        }
        , "modes": {
            "grab": {
                "distance":400, "line_linked": {
                    "opacity": 1
                }
            }
            , "bubble": {
                "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3
            }
            , "repulse": {
                "distance": 200, "duration": 0.4
            }
            , "push": {
                "particles_nb": 4
            }
            , "remove": {
                "particles_nb": 2
            }
        }
    }
    , "retina_detect":true
}

);
