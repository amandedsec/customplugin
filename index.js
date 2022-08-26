let myIframe = document.getElementById("myIframe"); 
let Iframeurl = "https://example.com/";

 let url_string= window.location.href; 
 
 function hasQueryParams(url) {
  return url.indexOf('?') !== -1;
}

if(hasQueryParams(url_string)){
  const button='<button>click me</button>';
  document.getElementById("demo").innerHTML=button;
 myIframe.src =Iframeurl; 
}