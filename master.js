document.addEventListener('contextmenu', event => event.preventDefault());
if (!location.href.includes('about:srcdoc') && location.href.includes('/mc/')) {
  window.addEventListener('beforeunload', function (e) {
      e.preventDefault();
      e.returnValue = '';
  });
  if(top.versionDropdown){top.versionDropdown('close')};
}

function fetchLoading() {
  fetch('/loading.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.text();
    })
    .then(html => {
      window.loaderHTML = html;
    })
    .catch(error => {
      console.error('Error fetching loading: ', error);
    });
  return window.loaderHTML;
}
fetchLoading();

function isMobile() {
  try {
      document.createEvent("TouchEvent");
      return true;
  } catch (e) {
      return false;
  }
}
if (isMobile()&&!location.href.includes('mobile')) {
  alert('To get the full WebMC Launcher experience, please visit this page from a proper desktop/laptop computer! You will now be redirected to EaglerMobile.');
  location.href=location.origin+'/mc/mobile/';
}