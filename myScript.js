chrome.runtime.onMessage.addListener((req, sender, senderResp) => {
    if(req.method == 'getSelection')
        senderResp({data: document.getSelection().toString()})
    else
        senderResp({data: ''})
})
