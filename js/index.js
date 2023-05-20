let ip = document.querySelector(".ip").children[0];
//ip.textContent = "1";
async function json() {
   let arrIp = await fetch("https://api.ipify.org/?format=json");
   let ipText=await arrIp.json()
   ip.textContent = ipText.ip;
}
json()
//console.log(navigator.geolocation.geolocation.getCurrentPosition());
let geol = {
   btn: document.querySelector('.btn'),
   geo: document.querySelector('.geo'),
   getGeo(position) {
      console.log(position);
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log(lat, lon);
      let geo = document.querySelector('.geo');
      geo.innerHTML = `
         <p> Широта:${lat}</p>
         <p> Довгота:${lon}</p>
         <a href="https://www.google.com.ua/maps/@${lat},${lon},9.22z?hl=ru" target="blank">Чекай в гості!</a>
      `
 
   },
   error() {
      this.geo.textContent = "Геолокоція не запущена";
      
   },
   return() {
      this.btn.addEventListener('click', () => {
         navigator.geolocation.getCurrentPosition(this.getGeo, this.error);
      })
         console.log(this.btn);
      
   },

}
geol.return();