const texti = document.getElementById("texti")
const buttoni = document.getElementById("buttoni")

buttoni.addEventListener("click", () => {
    chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT},(tab) => {
        chrome.tabs.sendMessage(tab[0].id, {method: 'getSelection'}, (resp) => {
            texti.innerHTML = resp.data
        })
    }) 
})
