//- utility module to convert image url to base64 encoded images
//- taken from https://stackoverflow.com/a/20285053/6611700

export default function loadFavicon(url){
  let parser = document.createElement("a");
  parser.href = url;

  return new Promise((resolve) => {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
      let reader = new FileReader();
      reader.onloadend = function() {
        resolve(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', `https://cors-anywhere.herokuapp.com/${parser.protocol}//${parser.hostname}/favicon.ico`);
    xhr.setRequestHeader("X-Requested-With", "resumify (https://github.com/riyaz-ali/resumify)");
    xhr.responseType = 'blob';
    xhr.send();
  })
}
