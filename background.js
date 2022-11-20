chrome.action.onClicked.addListener(function(tab) {
  if (!tab.url?.match(".*youtube.com/watch.*")) return undefined;
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setVideoDarkMode,
  });
});

function setVideoDarkMode() {
  const overlay = document.getElementsByClassName("ytp-iv-video-content")[0]
  let InDarkMode = overlay.style.backgroundColor != ''
  if (!InDarkMode) {    
    const new_style = `
    z-index: 10; 
    pointer-events: none; 
    background-color: rgb(246, 245, 244); 
    mix-blend-mode: difference; 
    background-position: 0% 0%;
    backdrop-filter: hue-rotate(180deg);
  `
  overlay.style.cssText += new_style
  }
  else {
    added_properties = ["z-index", "pointer-events", "background-color", "mix-blend-mode", "background-position", "backdrop-filter"]
    for(const prop of added_properties) {
      overlay.style.removeProperty(prop)
    }
  }
}