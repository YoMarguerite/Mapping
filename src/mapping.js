const mapping = {
    acid: (hydra) => {
        hydra.osc(105).color(0.5,0.1,0.8).rotate(0.11, 0.1).modulate(osc(10).rotate(0.3).add(o0, 0.1)).add(osc(20,0.01,1).color(0,0.8,1)).out(o0)
        hydra.osc(50,0.05, 0.7).color(1,0.7,0.5).diff(o0).modulate(o1,0.05).out(o1)
        render(o1)
    },
    aquaticblubs: (hydra) => {
        hydra.gradient(0.25)
            .add(noise(), ()=>Math.cos(time))
            .modulateRotate(src(o0).rotate(0, -0.52), 0.2).mult(shape(360), 0.8)
            .repeat(10,5).mult(shape(360).scale(()=>Math.sin(time)), 0.8).rotate(0, 0.2)
            .diff(src(o0).rotate(0, -0.2), 0.2)
            .out()
    },
    blureye: (hydra) => {
        hydra.noise(6,.05)
            .mult( osc(9,0, ()=>Math.sin(time/1.5)+2 ) )
            .mult(
                noise(9,.03).brightness(1.2).contrast(2)
                .mult( osc(9,0, ()=>Math.sin(time/3)+13 ) )
            )
            .diff(
                noise(15,.04).brightness(.2).contrast(1.3)
                .mult( osc(9,0, ()=>Math.sin(time/5)+13 ) )
                .rotate( ()=>time/33 )
            )
            .scale( ()=>Math.sin(time/6.2)*.12+.15 )
            .modulateScale(
                osc(3,0,0).mult( osc(3,0,0).rotate(3.14/2) )
                .rotate( ()=>time/25 ).scale(.39).scale(1,.6,1).invert()
                , ()=>Math.sin(time/5.3)*1.5+3  )
            .rotate( ()=>time/22 )
            .mult( shape(100,.9,.01).scale(1,.6,1) )
            .out()
    },
    brightness: (hydra) => {
        hydra.voronoi(2,0.3,0.2).shift(0.5)
            .modulatePixelate(voronoi(4,0.2),32,2)
            .scale(()=>1+(Math.sin(time*2.5)*0.05))
            .diff(voronoi(3).shift(0.6))
            .diff(osc(2,0.15,1.1).rotate())
            .brightness(0.1).contrast(1.2).saturate(1.2)
            .out()
    },
    cndsd: (hydra) => {
        hydra.osc(15, 0.01, 0.1).mult(osc(1, -0.1).modulate(osc(2).rotate(4,1), 20))
            .color(0,2.4,5)
            .saturate(0.4)
            .luma(1,0.1, (6, ()=> 1 + a.fft[3]))
            .scale(0.7, ()=> 0.7 + a.fft[3])
            .diff(o0)// o0
            .out(o0)// o1
    },
    color: (hydra) => {
        hydra.osc(100, 0.01, 1.4)
            .rotate(0, 0.1)
            .mult(osc(10, 0.1).modulate(osc(10).rotate(0, -0.1), 1))
            .color(2.83,0.91,0.39)
            .out()
    },
    colorama: (hydra) => {
        hydra.noise(3,0.1,7)
            .rotate(1,-1,-2).mask(shape(20))
            .colorama(0.5)
            .modulateScale(o0)
            .modulateScale(o0,1,)
            .blend(o0)
            .blend(o0)
            .blend(o0)
            .blend(o0)
            .out(o0)
    },    
    galaxytrip: (hydra) => {
        hydra.shape(1,1)
            .mult(voronoi(1000,2)
            .blend(o0).luma())
            .add(shape(3,0.125)
                .rotate(1,1).mult(voronoi(1000,1).luma())
                .rotate(1.5)).scrollX([0.1,-0.0625,0.005,0.00001],0)
            .scrollY([0.1,-0.0625,0.005,0.00001],0)
            .out()
    },
    glitchriver: (hydra) => {

        hydra.voronoi(8,1)
            .mult(osc(10,0.1,()=>Math.sin(time)*3).saturate(3).kaleid(200))
            .modulate(o0,0.5)
            .add(o0,0.8)
            .scrollY(-0.01)
            .scale(0.99)
            .modulate(voronoi(8,1),0.008)
            .luma(0.3)
            .out()
        
        speed = 0.1
    },
    grid: (hydra) => {
        function r(min=0,max=1) { return Math.random()*(max-min)+min; }
  
        hydra.solid(1,1,1)
            .diff(shape([4,4,4,24].smooth().fast(.5),r(0.6,0.93),.09).repeat(20,10))
            .modulateScale(osc(8).rotate(r(-.5,.5)),.52)
            .add(
                src(o0).scale(0.965).rotate(.012*(Math.round(r(-2,1))))
                .color(r(),r(),r())
                .modulateRotate(o0,r(0,0.5))
                .brightness(.15)
                ,.7)
            .out()
    },
    happymandala: (hydra) => {
        hydra.voronoi(5,-0.1,5)
            .add(osc(1,0,1)).kaleid(21)
            .scale(1,1,2).colorama().out(o1)
            src(o1).mult(src(s0).modulateRotate(o1,100), -0.5)
            .out(o0)
    },
    kaleidcolor: (hydra) => {
        hydra. osc(20, 0.01, 1.1)
            .kaleid(5)
            .color(2.83,0.91,0.39)
            .rotate(0, 0.1)
            .modulate(o0, () => mouse.x * 0.0003)
            .scale(1.01)
            .out(o0)
    },
    lavaslime: (hydra) => {
        hydra.osc(30,0.01,1)
            .mult(osc(20,-0.1,1).modulate(noise(3,1)).rotate(0.7))
            .posterize([3,10,2].fast(0.5).smooth(1))
            .modulateRotate(o0,()=>mouse.x*0.003)
            .out()
    },
    mirror: (hydra) => {
        hydra.osc(5, 0.9, 0.001)
            .kaleid([3,4,5,7,8,9,10].fast(0.1))
            .color(0.5, 0.3)
            .colorama(0.4)
            .rotate(0.009,()=>Math.sin(time)* -0.001 )
            .modulateRotate(o0,()=>Math.sin(time) * 0.003)
            .modulate(o0, 0.9)
            .scale(0.9)
            .out(o0)
    },
    modulate: (hydra) => {
        hydra.osc(13,0,1)
            .kaleid()
            .mask(shape(4,0.3,1))
            .modulateRotate(shape(4,0.1,1))
            .modulateRotate(shape(4,0.1,0.9))
            .modulateRotate(shape(4,0.1,0.8))
            .scale(0.3)
            .add(shape(4,0.2,1).color(0.3,1,1,0.5))
            .rotate(()=>time)
            .out()
    },
    oscrepeat: (hydra) => {
        hydra.osc(40,0.2,8)
            .modulateScale(osc(80,0,1).kaleid(100))
            .repeat(2,4)
            .modulate(o0,0.05)
            .modulateKaleid(shape(4,0.1,1))
            .out(o0)
    },
    puertas: (hydra) => {
        hydra.osc(13,0,1)
            .modulate(osc(21,0.25,0))
            .modulateScale(osc(34))
            .modulateKaleid(osc(55),0.1,1)
            .out()
    },
    reallylove: (hydra) => {
        hydra.osc(100,-0.01245,1).pixelate(50)
            .kaleid(()=>(Math.sin(time/8)*9+3)).rotate(0,0.125)
            .modulateRotate(shape(3).scale(()=>(Math.cos(time)*2)).rotate(0,-0.25)).diff(src(o0).brightness(0.3))
            .out()
    },
    saturate: (hydra) => {
        hydra.osc(3, 0.01, 0.4)
            .color(1.2,1.2,1.3)
            .saturate(0.4)
            .modulateRepeat(osc(2),1, 2, 4, 3)
            // .modulateRepeat(osc(()=>a.fft[1]),1, 2, 4, 3)
            .modulateKaleid(osc(12,0.05,0),1)
            .luma (0.4)
            .rotate(4, 0.1,0)
            // .modulate(o0, () => mouse.y *0.0002 )
            // .modulate(o0, ()=>a.fft[1]*.5 )
            .scale(1).diff(o1)
            .out()
    },
    scalenoise: (hydra) => {
        hydra.osc(60,-0.015,0.3).diff(osc(60,0.08).rotate(Math.PI/2))
            .modulateScale(noise(3.5,0.25).modulateScale(osc(15).rotate(()=>Math.sin(time/2))),0.6)
            .color(1,0.5,0.4).contrast(1.4)
            .add(src(o0).modulate(o0,.04),.6)
            .invert().brightness(0.1).contrast(1.2)
            .modulateScale(osc(2),-0.2)
            .out()
    },
    shape: (hydra) => {
        hydra.shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7].smooth(1))
            .color(0.2,0.4,0.3)
            .scrollX(()=>Math.sin(time*0.27))
            .add(
            shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7,0.5,0.3].smooth(1))
            .color(0.6,0.2,0.5)
            .scrollY(0.35)
            .scrollX(()=>Math.sin(time*0.33)))
            .add(
            shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7,0.3].smooth(1))
            .color(0.2,0.4,0.6)
            .scrollY(-0.35)
            .scrollX(()=>Math.sin(time*0.41)*-1))
            .add(
                src(o0).shift(0.001,0.01,0.001)
                .scrollX([0.05,-0.05].fast(0.1).smooth(1))
                .scale([1.05,0.9].fast(0.3).smooth(1),[1.05,0.9,1].fast(0.29).smooth(1))
                ,0.85)
            .modulate(voronoi(10,2,2))
            .out()
    },
    spotlight: (hydra) => {
        hydra.shape(200,0.5,1.5)
            .scale(0.5,0.5)
            .color([0.5,2].smooth(1),0.3,0)
            .repeat(2,2)
            .modulateScale(osc(3,0.5),-0.6)
            .add(o0,0.5)
            .scale(0.9)
            .out()
    },
    squarekaleid: (hydra) => {
        hydra.osc(20, 0.03, 1.7).kaleid()
            .mult(osc(20, 0.001, 0).rotate(1.58)).blend(o0, 0.94)
            .modulateScale(osc(10, 0),-0.03)
            .scale(0.8, () => (1.05 + 0.1 * Math.sin(0.05*time)))
            .out()
    },
    thewall: (hydra) => {
        speed=.0222
        hydra.osc(48,-.1,0).thresh([.3,.7].fast(.75),0).color(0,0,1)
        .add(
            osc(28,.1,0).thresh([.3,.7].fast(.75),0).rotate(3.14/4)
            .color(1,0,0)
            .modulateScale( osc(64,-.01,0).thresh([.3,.7].fast(.75),0) )
        )
        .diff(
            osc(28,.1,0).thresh([.3,.7].fast(.5),0).rotate(3.14/2)
            .color(1,0,1)
            .modulateScale( osc(64,-.015,0).thresh([.3,.7].fast(.5),0) )
        )
        .modulateRotate( osc(54,-.005,0).thresh([.3,.7].fast(.25),0) )
        .modulateScale( osc(44,-.020,0).thresh([.3,.7].fast(.25),0) )
        .colorama( ()=>Math.sin(time/27)*.01222+9.89)
        .scale(2.122)
        .out()
    },
    trainwindow: (hydra) => {
        var pat = ()=>
            solid()
              .layer(solid().diff(
                osc((time/16) * 1, (time/1000) * 0.2  )
                  .mult(osc((time/8) * 1, (time/1006) * 0.2  ).rotate(1.57))
                  .modulate((shape(106,1,0.05)))
                  .mult(shape(106,1,0.05))
                ))
                .modulateScale(osc(2,0.125),0.125)
              //
        solid()
        .layer(solid(1,1,1)
        .mult(pat()
        .diff(src(o0).scale(0.2).mult(solid(),[0.7,0.6,0.4,0.6]).kaleid(1.01).saturate(0.3))
        )
        .layer(solid(1,1,1)
            .mask(
            noise(2,0.05)
            .invert().colorama(2).posterize(8,4).luma(0.25).thresh(0.5)
            .modulateRotate(osc(1,0.5))
            )
            .mult(gradient(0.5).kaleid(1).colorama(2).saturate(1.1).contrast(1.6).mult(solid(),0.45))
        ))
        .out()
        speed= 0.5

    },
    trampo: (hydra) => {
        hydra.osc(100,-0.0018,0.17).diff(osc(20,0.00008).rotate(Math.PI/0.00003))
            .modulateScale(noise(1.5,0.18).modulateScale(osc(13).rotate(()=>Math.sin(time/22))),3)
            .color(11,0.5,0.4, 0.9, 0.2, 0.011, 5, 22,  0.5, -1).contrast(1.4)
            .add(src(o0).modulate(o0,.04),.6, .9)
            //.pixelate(0.4, 0.2, 0.1)
            .invert().brightness(0.0003, 2).contrast( 0.5, 2, 0.1, 2).color(4, -2, 0.1)
            .modulateScale(osc(2),-0.2, 2, 1, 0.3)
            .posterize(200) .rotate(1, 0.2, 0.01, 0.001)
            .color(22, -2, 0.5, 0.5, 0.0001,  0.1, 0.2, 8).contrast(0.18, 0.3, 0.1, 0.2, 0.03, 1) . brightness(0.0001, -1, 10)
            .out()

    },
    voronoi: (hydra) => {
        hydra.voronoi(350,0.15)
            .modulateScale(osc(8).rotate(Math.sin(time)),.5)
            .thresh(.8)
            .modulateRotate(osc(7),.4)
            .thresh(.7)
            .diff(src(o0).scale(1.8))
            .modulateScale(osc(2).modulateRotate(o0,.74))
            .diff(src(o0).rotate([-.012,.01,-.002,0]).scrollY(0,[-1/199800,0].fast(0.7)))
            .brightness([-.02,-.17].smooth().fast(.5))
            .out()
    },
    wavy: (hydra) => {
        hydra.osc(20, 0.1, 0).color(0, 1, 2).rotate(1.57/2).out(o1)
        hydra.osc(30, 0.01, 0).color(2, 0.7, 1).modulate(o1, 0).add(o1,1).modulatePixelate(o1,1,10).out()      

    },
    windstream: (hydra) => {
        hydra.osc(18, 0.1, 0).color(2, 0.1, 2)
            .mult(osc(20, 0.01, 0)).repeat(2, 20).rotate(0.5).modulate(o1)
            .scale(1, () =>  (a.fft[0]*0.9 + 2)).diff(o1).out(o0)
        hydra.osc(20, 0.2, 0).color(2, 0.7, 0.1).mult(osc(40)).modulateRotate(o0, 0.2)
            .rotate(0.2).out(o1)

    },
  }

  export default mapping