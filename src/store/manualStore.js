var setStore = function(colorMapping, textMapping, amplitudeMapping, reactSoundMapping){
    localStorage.setItem("colorMapping", colorMapping);
    localStorage.setItem("textMapping", textMapping);
    localStorage.setItem("amplitudeMapping", amplitudeMapping);
    localStorage.setItem("reactSoundMapping", reactSoundMapping);
}

var getStore = function(){
    let colorMapping = localStorage.getItem("colorMapping");
    let textMapping = localStorage.getItem("textMapping");
    let amplitudeMapping = localStorage.getItem("amplitudeMapping");
    let reactSoundMapping = localStorage.getItem("reactSoundMapping");


    let setDefault = false
    if(colorMapping == null){
        colorMapping = '4287f5'
        setDefault = true
    }
    if(textMapping == null){
        textMapping = 'RABABOOM'
        setDefault = true
    }  
    if(amplitudeMapping == null){
        amplitudeMapping = 0
        setDefault = true
    }   
    if(reactSoundMapping == null){
        reactSoundMapping = false
        setDefault = true
    }    

    if(setDefault){
        setStore(colorMapping, textMapping, amplitudeMapping, reactSoundMapping)
    }

    return { colorMapping, textMapping, amplitudeMapping, reactSoundMapping}
}

export default {
    getStore: getStore,
    setStore: setStore
}