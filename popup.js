const btn = document.getElementById("hideBtn")

btn.addEventListener("click",() => {
    chrome.tabs.query({active: true}, (tabs) => {
        const tab = tabs[0];
        if (tab) {
            chrome.scripting.executeScript(
                {
                    target:{tabId: tab.id, allFrames: true},
                    func:changeHiddenSidebar
                }
            )
        }
    })
    btn.blur()
})


function changeHiddenSidebar() {
    let sidebar = document.getElementById('viewissuesidebar')
    if (sidebar) {
        sidebar.hidden = !sidebar.hidden
    }
    else {
        console.log('Sidebar not found')
    }
}
