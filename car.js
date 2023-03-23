AFRAME.registerComponent("showcase", {
    schema: { rotation1: { type: "string", default: "Car/tinker.obj" } },
    init: function () {
        this.data.rotate1 = this.data.rotate1 + 0.01;
        var car = this.el.getAttribute("rotation")
        car.x= this.data.rotate1 ;
        this.el.setAttribute("gltf-model",this.data.rotation1)
        this.el.setAttribute("rotation", {x: 0, y: -100, z: 0})
        this.el.setAttribute("position", {x: 0, y: 50, z:80})
    }
})