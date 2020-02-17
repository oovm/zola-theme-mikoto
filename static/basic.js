//console.swap = console.log
console.log = function () { };
console.info("%c Github %c", "background:#24272A; color:#ffffff", "", "https://github.com/GalAster/zola-theme-mikoto")

// 封装异步加载资源的方法
function loadExternalResource (url, type) {
    return new Promise((resolve, reject) => {
        let tag;

        if (type === "css") {
            tag = document.createElement("link");
            tag.rel = "stylesheet";
            tag.href = url;
        }
        else if (type === "js") {
            tag = document.createElement("script");
            tag.src = url;
        }
        if (tag) {
            tag.onload = () => resolve(url);
            tag.onerror = () => reject(url);
            document.head.appendChild(tag);
        }
    });
}
