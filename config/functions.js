const Lookup = require("node-yeelight-wifi").Lookup;
const Yeelight = require("node-yeelight-wifi").Yeelight;

function turnOn() {
    let look = new Lookup();

    look.on("detected", (light) => {
        console.log("new yeelight detected: host=" + light.host + " type=" + light.type);
    });

    setTimeout(() => {
        let lights = look.getLights();

        if (lights.length == 0) {
            console.log("no yeelight found");
            return;
        }

        let light = lights[0];
        
        light.setPower('on', 500);

        light.updateState().then(() => {
            console.log("updateState promise resolved");
        }).catch((error => {
            console.log("promise rejected");
            console.log(error);
        }));

    }, 200);
}

function turnOff() {
    let look = new Lookup();

    look.on("detected", (light) => {
        console.log("new yeelight detected: host=" + light.host + " type=" + light.type);
    });

    setTimeout(() => {
        let lights = look.getLights();

        if (lights.length == 0) {
            console.log("no yeelight found");
            return;
        }

        let light = lights[0];

        light.setPower('off', 500);

        light.updateState().then(() => {
            console.log("updateState promise resolved");
        }).catch((error => {
            console.log("promise rejected");
            console.log(error);
        }));

    }, 200);
}

function setColor(red, green, blue) {
    let look = new Lookup();

    look.on("detected", (light) => {
        console.log("new yeelight detected: host=" + light.host + " type=" + light.type);
    });

    setTimeout(() => {
        let lights = look.getLights();

        if (lights.length == 0) {
            console.log("no yeelight found");
            return;
        }

        let light = lights[0];

        light.setRGB([red, green, blue], 500);

        light.updateState().then(() => {
            console.log("updateState promise resolved");
        }).catch((error => {
            console.log("promise rejected");
            console.log(error);
        }));

    }, 200);
}