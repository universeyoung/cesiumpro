require('./css/main.css');
require('cesium/Widgets/widgets.css');
var Cesium = require('cesium/Cesium');
var viewer = new Cesium.Viewer('cesiumContainer');
viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(-122.22, 46.12, 5000.0),
    orientation : {
        heading : Cesium.Math.toRadians(20.0),
        pitch : Cesium.Math.toRadians(-35.0),
        roll : 0.0
    }
});