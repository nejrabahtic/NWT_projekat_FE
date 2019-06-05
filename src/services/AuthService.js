var NAME = "NAME";
var ROLE = "ROLE";
var TOKEN = "TOKEN";

var subscribed = {};
var Storage = window.localStorage;

var callSubscribed = () => {
    Object
        .values(subscribed)
        .forEach( fun => fun());
}

export default {
    setUser(name, role){
        Storage.setItem(NAME, name);
        Storage.setItem(ROLE, role);
        callSubscribed();
    },
    setToken(token){
        Storage.setItem(TOKEN, token);
        callSubscribed();
    },
    getName(){
        return Storage.getItem(NAME);
    },
    getRole(){
        return Storage.getItem(ROLE);
    },
    getToken(){
        return Storage.getItem(TOKEN);
    },
    isLoggedIn(){
        return Storage.getItem(NAME) !== null && Storage.getItem(ROLE) !== null && Storage.getItem(TOKEN) !== null;
    },
    clear(){
        Storage.clear();
        callSubscribed();
    },
    subscribe(name, fun){
        subscribed[name] = fun;
    },
    unsubscribe(name){
        delete subscribed[name]
    }

};
