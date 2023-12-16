const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
});

gsap.from(".animen", {
    duration: 1,
    y: 15,
    opacity: 0,
    ease: Expo,
})

gsap.from(".animation2", {
    duration: 2,
    stagger: .2,
    y: 35,
    opacity: 0,
    ease: Power4,
})

Shery.textAnimate(".sec2head h1", {
    style: 2,
    y: 15,
    delay: 1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

Shery.makeMagnet(".animationwebsite", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.makeMagnet(".ri-arrow-down-line", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.makeMagnet("span", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0,
});

Shery.imageEffect(".img2sec img", {
    style: 3,
    config: { "uFrequencyX": { "value": 25.19, "range": [0, 100] }, "uFrequencyY": { "value": 19.85, "range": [0, 100] }, "uFrequencyZ": { "value": 16.79, "range": [0, 100] }, "geoVertex": { "range": [1, 64], "value": 40.92 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7500071491892819 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 2.07, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
});
Shery.imageEffect(".imgsec1 img", {
    style: 2,
    config: { "resolutionXY": { "value": 100 }, "distortion": { "value": true }, "mode": { "value": -2 }, "mousemove": { "value": 3 }, "modeA": { "value": 1 }, "modeN": { "value": 0 }, "speed": { "value": 1, "range": [-500, 500], "rangep": [-10, 10] }, "frequency": { "value": 50, "range": [-800, 800], "rangep": [-50, 50] }, "angle": { "value": 0.5, "range": [0, 3.141592653589793] }, "waveFactor": { "value": 1.4, "range": [-3, 3] }, "color": { "value": 16777215 }, "pixelStrength": { "value": 3, "range": [-20, 100], "rangep": [-20, 20] }, "quality": { "value": 10, "range": [0, 10] }, "contrast": { "value": 1, "range": [-25, 25] }, "brightness": { "value": 1, "range": [-1, 25] }, "colorExposer": { "value": 0.18, "range": [-5, 5] }, "strength": { "value": 0.2, "range": [-40, 40], "rangep": [-5, 5] }, "exposer": { "value": 44.87, "range": [-100, 100] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.6999923739800198 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.4, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
});


Shery.imageEffect(".slastleft", {
    style: 4,
    gooey: true,
    config: { "uColor": { "value": false }, "uSpeed": { "value": 0.63, "range": [0.1, 1], "rangep": [1, 10] }, "uAmplitude": { "value": 1.5, "range": [0, 5] }, "uFrequency": { "value": 6.64, "range": [0, 10] }, "geoVertex": { "range": [1, 64], "value": 64 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 1.864935698177607 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 2.5, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.3, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 33 } }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.35, "range": [0, 2] }, "noise_scale": { "value": 4.58, "range": [0, 100] } },

})

Shery.imageEffect("#seaimg", {
    style: 6,
    config: { "noiseDetail": { "value": 6.11, "range": [0, 100] }, "distortionAmount": { "value": 9.24, "range": [0, 10] }, "scale": { "value": 38.17, "range": [0, 100] }, "speed": { "value": 0.63, "range": [0, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.5999725475841874 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.95, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
})
Shery.imageEffect("#cloudimg", {
    style: 6,
    config: { "noiseDetail": { "value": 6.11, "range": [0, 100] }, "distortionAmount": { "value": 9.24, "range": [0, 10] }, "scale": { "value": 38.17, "range": [0, 100] }, "speed": { "value": 0.63, "range": [0, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.5999725475841874 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": false }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.95, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0.002, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
})

let fbutton = document.querySelector("#joinmovement")
fbutton.addEventListener("mouseover", function () {
    gsap.to("video", {
        opacity: 1,
        duration: 1.4,
        ease: Power4,
    })
})

fbutton.addEventListener("mouseleave", function () {
    gsap.to("video", {
        opacity: 0,
        duration: 1.4,
        ease: Power4,
    })
})

