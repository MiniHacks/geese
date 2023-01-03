chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({ url: "https://schedulebuilder.umn.edu/" });
});
