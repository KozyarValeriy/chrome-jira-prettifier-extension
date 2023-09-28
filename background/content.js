const toggleMap = {
  false: { text: " >> ", title: "Collapse sidebar" },
  true: { text: " << ", title: "Expand sidebar" },
};

function isPageFit() {
  if (document.body.id !== "jira") return false;

  let pathname = window.location.pathname;

  if (pathname.startsWith("/browse") || pathname.startsWith("/jira/browse")) {
    return true;
  }

  if (pathname.endsWith("/issues/")) return true;

  return false;
}

function changeHiddenSidebar(toggle) {
  const sidebar = document.getElementById("viewissuesidebar");
  if (sidebar) {
    sidebar.hidden = !sidebar.hidden;
    toggle.textContent = toggleMap[sidebar.hidden].text;
    toggle.title = toggleMap[sidebar.hidden].title;
  }
}

const getToggle = (sidebarHidden) => {
  const toggle = document.createElement("button");
  toggle.textContent = toggleMap[sidebarHidden].text;
  toggle.title = toggleMap[sidebarHidden].title;
  toggle.setAttribute("class", "aui-button");
  toggle.addEventListener("click", function () {
    changeHiddenSidebar(toggle);
  });
  return toggle;
};

function start() {
  if (!isPageFit()) return;

  const opsNav = document.getElementById("opsbar-jira.issue.tools");
  if (opsNav) {
    const toggle = getToggle(false);
    opsNav.appendChild(toggle);
  }
}

start();
