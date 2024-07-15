// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}

// 复制提醒
document.addEventListener("copy", function () {
    debounce(function () {
        new Vue({
            data: function () {
                this.$notify({
                    title: "哎嘿！复制成功🍭",
                    message: "祝您度过愉快的一天",
                    position: 'top-left',
                    offset: 50,
                    showClose: true,
                    type: "success",
                    duration: 2000  //ms,弹窗显示时间
                });
            }
        })
    }, 300);
})

//以下可替换copy制造弹窗,浏览器提供的接口函数
// click：鼠标点击事件
// dblclick：鼠标双击事件
// mouseover/mouseout：鼠标移入/移出元素
// keydown/keyup：键盘按键按下/释放
// scroll：滚动事件
// focus/blur：元素获得/失去焦点
// input：输入框内容变化
// change：表单元素（如<select>、<input type="file">）的值变化
// touchstart/touchend：触摸开始/结束事件（移动端）