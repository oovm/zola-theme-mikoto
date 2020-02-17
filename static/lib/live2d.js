// 注意：live2d_path 参数应使用绝对路径
const live2d_path = "https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/";
//const live2d_path = "/live2d-widget/";



// 加载 waifu.css live2d.min.js waifu-tips.js
if (screen.width >= 1000) {
    Promise
        .all([
            loadExternalResource(live2d_path + "waifu.css", "css"),
            loadExternalResource(live2d_path + "live2d.min.js", "js"),
            loadExternalResource(live2d_path + "waifu-tips.js", "js")
        ])
        .then(() => {
            initWidget({
                waifuPath: live2d_path + "waifu-tips.json",
                apiPath: "https://live2d.fghrsh.net/api/",
                cdnPath: "https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/"
            });
        });
}
// initWidget 第一个参数为 waifu-tips.json 的路径，第二个参数为 API 地址
// API 后端可自行搭建，参考 https://github.com/fghrsh/live2d_api
// 初始化看板娘会自动加载指定目录下的 waifu-tips.json
