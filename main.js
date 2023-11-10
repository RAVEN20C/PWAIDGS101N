//Comprueba que este en serviceWorker
if('serviceWorker' in navigator){
    console.log('andando Service Worker');
    //Cargar el sw
    navigator.serviceWorker.register('./sw.js')
    .then(res=> console.log('serviceworker cargado correctamente',res))
    .catch(err=> console.log('serviceWorker no se ha podido registrar', err));
}
else{
    console.log('Aun no lo puedes usar');
}