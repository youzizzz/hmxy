export function MP(url) {
  return new Promise(function (resolve, reject) {
    window.onload = function () {
      resolve(returnCitySN)
    }
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onerror = reject;
    document.head.appendChild(script);
  })
}
