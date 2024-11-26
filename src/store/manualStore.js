var setStore = function(colorMapping, textMapping){
    localStorage.setItem("colorMapping", colorMapping);
    localStorage.setItem("textMapping", textMapping);
}

var getStore = function(){
    let colorMapping = localStorage.getItem("colorMapping");
    let textMapping = localStorage.getItem("textMapping");

    let setDefault = false
    if(colorMapping == null){
        colorMapping = '4287f5'
        setDefault = true
    }
    if(textMapping == null){
        textMapping = 'RABABOOM'
        setDefault = true
    }   

    if(setDefault){
        setStore(colorMapping, textMapping)
    }

    return { colorMapping, textMapping }
}

export default {
    getStore: getStore,
    setStore: setStore
}