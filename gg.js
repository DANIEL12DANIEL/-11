let total = document.getElementById('totel');  // חיבור לאלמנט עם ID 'totel'
    let porpole = document.getElementById("porpole");  
    let blue = document.getElementById("blue");  
     let yello = document.getElementById("yello");
     let pink = document.getElementById("pink"); 
     let red = document.getElementById("red"); 
    let green = document.getElementById("green");  // חיבור לאלמנט עם ID 'porpole'
let body = document.body;  // חיבור לגוף הדף

// מאזין לאירוע "click" על הכפתור
pink.addEventListener("click", function() {
    total.innerHTML = "כחם";  // עדכון התוכן ב- 'totel' ל-"עצוב"
    body.style.background = "pink";  // שינוי צבע הרקע של הגוף ל-"purple"
});
porpole.addEventListener("click", function() {
    total.innerHTML = "ביישן";  // עדכון התוכן ב- 'totel' ל-"עצוב"
    body.style.background = "purple";  // שינוי צבע הרקע של הגוף ל-"purple"
});
yello.addEventListener("click", function() {
    total.innerHTML = "שמח";  // עדכון התוכן ב- 'totel' ל-"עצוב"
    body.style.background = "yellow";  // שינוי צבע הרקע של הגוף ל-"purple"
});
red.addEventListener("click", function() {
    total.innerHTML = "עצבני";  // עדכון התוכן ב- 'totel' ל-"עצוב"
    body.style.background = "red";  // שינוי צבע הרקע של הגוף ל-"purple"
});
green.addEventListener("click", function() {
    total.innerHTML = "חרדה";  // עדכון התוכן ב- 'totel' ל-"עצוב"
    body.style.background = "green";  // שינוי צבע הרקע של הגוף ל-"purple"
});
blue.addEventListener("click", function() {
    total.innerHTML = "חרוץ";  // עדכון התוכן ב- 'totel' ל-"עצוב"
    body.style.background = "blue";  // שינוי צבע הרקע של הגוף ל-"purple"
});
