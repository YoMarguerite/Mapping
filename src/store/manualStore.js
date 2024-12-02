const store = {
    colorMapping: '4287f5',
    textMapping: 'RABABOOM',
    amplitudeMapping: 0,
    reactSoundMapping: false
}

var setStore = function(valueStore){
    for (const [key, value] of Object.entries(store)) {
        if(valueStore[key]){
            localStorage.setItem(key, valueStore[key]);
        }
    }
}

var getStore = function(){
    
    let result = {}
    let setDefault = false
    for (const [key, value] of Object.entries(store)) {
        let item = localStorage.getItem(key);
        if(item == null){
            item = value
            setDefault = true;
        }
        result[key] = item
    }  

    if(setDefault){
        setStore(result)
    }

    return result
}



export default {
    getStore: getStore,
    setStore: setStore
}