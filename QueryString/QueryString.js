// noinspection JSUnusedGlobalSymbols

function getQueryString(){
    let url = new URLSearchParams(window.location.search);
    let params = {};
    for(let [key, value] of url){
        params[key] = value;
    }
    return params;
}

function getQueryStringValue(key){
    let url = new URLSearchParams(window.location.search);
    return url.get(key);
}

function genQueryString(params){
    let url = new URLSearchParams();
    for(let key in params){
        url.set(key, params[key]);
    }
    return url.toString();
}

function updateQueryString(key, value){
    let url = new URLSearchParams(window.location.search);
    url.set(key, value);
    window.history.replaceState(null, null, `${window.location.pathname}?${url}`);
}

function updateQueryStrings(params){
    let url = new URLSearchParams(window.location.search);
    for(let key in params){
        url.set(key, params[key]);
    }
    window.history.replaceState(null, null, `${window.location.pathname}?${url}`);
}