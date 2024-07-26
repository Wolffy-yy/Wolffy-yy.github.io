const metingJs = document.querySelector("#nav-music meting-js");

// 判断是否是音乐
document.addEventListener('contextmenu', function(event) {
    if (metingJs.contains(event.target)) {
        // 如果点击的是音乐播放器元素
        // 显示音乐相关的右键菜单项
        document.getElementById('menu-music').style.display = 'block';
        
        // 绑定音乐控制功能
        document.getElementById('menu-music-toggle').onclick = function() {
            anzhiyu.musicToggle();
        };
        document.getElementById('menu-music-skip-back').onclick = function() {
            anzhiyu.musicSkipBack();
        };
        document.getElementById('menu-music-skip-forward').onclick = function() {
            anzhiyu.musicSkipForward();
        };
        document.getElementById('menu-music-info').onclick = function() {
            alert(anzhiyu.musicGetName());
        };
    } else {
        // 隐藏音乐相关的右键菜单项
        document.getElementById('menu-music').style.display = 'none';
    }
});
