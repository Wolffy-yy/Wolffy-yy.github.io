// var now = new Date(); // 初始化now为当前日期和时间  
  
// function createtime() {  
//     now.setTime(now.getTime() + 1000); // 更新now为当前时间的下一秒  
  
//     // 起始日期（这里可能与旅行者1号的距离计算有关，但与网站运行时间无关）  
//     var e = new Date("12/07/2024 00:00:00");  
  
//     // 旅行者1号距离地球的千米数（这里的计算可能是一个示例，实际值可能不同）  
//     var t = Math.trunc(234e8 + (now - e) / 1e3 * 17);  
//     var a = (t / 1496e5).toFixed(6); // 转换为天文单位并保留6位小数  
  
//     // 网站运行时间起始日期  
//     var o = new Date("2024/07/12 00:00:00");  
  
//     // 计算网站运行时间  
//     var n = (now - o) / 1e3 / 60 / 60 / 24; // 总天数（包含小数部分）  
//     var r = Math.floor(n); // 整天数  
//     var i = (now - o) / 1e3 / 60 / 60 - 24 * r; // 当前小时数（包含小数部分）  
//     var s = Math.floor(i); // 当前小时数的整数部分  
//     if (String(s).length === 1) {  
//         s = "0" + s; // 如果小时数是一位数，则前面补0  
//     }  
  
//     var d = (now - o) / 1e3 / 60 - 1440 * r - 60 * s; // 当前分钟数（包含小数部分）  
//     var l = Math.floor(d); // 当前分钟数的整数部分  
//     if (String(l).length === 1) {  
//         l = "0" + l; // 如果分钟数是一位数，则前面补0  
//     }  
  
//     var g = (now - o) / 1e3 - 86400 * r - 3600 * s - 60 * l; // 当前秒数（包含小数部分）  
//     var b = Math.round(g); // 当前秒数的整数部分，四舍五入  
//     if (String(b).length === 1) {  
//         b = "0" + b; // 如果秒数是一位数，则前面补0  
//     }  
  
//     // 根据时间显示不同的徽章和文本  
//     let c = "";  
//     if (s < 18 && s >= 9) {  
//         c = `<img class='boardsign' src='https://img.shields.io/badge/F小屋-科研摸鱼中.svg' title='什么时候能够实现财富自由呀~'><br>  
//              <div style="font-size:13px;font-weight:bold">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒   
//              <i id="heartbeat" class='fas fa-heartbeat'></i>   
//              <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`;  
//     } else {  
//         c = `<img class='boardsign' src='https://img.shields.io/badge/F小屋-下班休息啦.svg' title='下班了就该开开心心地玩耍~'><br>  
//              <div style="font-size:13px;font-weight:bold">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒   
//              <i id="heartbeat" class='fas fa-heartbeat'></i>   
//              <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</div>`;  
//     }  
  
//     // 更新页面上的时间显示  
//     if (document.getElementById("workboard")) {  
//         document.getElementById("workboard").innerHTML = c;  
//     }  
// }  
  
// // 每秒调用一次createtime函数来更新时间显示  
// setInterval(() => {  
//     createtime();  
// }, 1000);



var now = new Date(); // 初始化now为当前日期和时间  
  
function createtime() {  
    now.setTime(now.getTime() + 1000); // 更新now为当前时间的下一秒  
  
    // 起始日期（这里可能与旅行者1号的距离计算有关，但与网站运行时间无关）  
    var e = new Date("12/07/2024 00:00:00");  
  
    // 旅行者1号距离地球的千米数（这里的计算可能是一个示例，实际值可能不同）  
    var t = Math.trunc(234e8 + (now - e) / 1e3 * 17);  
    var a = (t / 1496e5).toFixed(6); // 转换为天文单位并保留6位小数  
  
    // 网站运行时间起始日期  
    var o = new Date("2024/07/12 00:00:00");  
  
    // 计算网站运行时间  
    var n = (now - o) / 1e3 / 60 / 60 / 24; // 总天数（包含小数部分）  
    var r = Math.floor(n); // 整天数  
    var i = (now - o) / 1e3 / 60 / 60 - 24 * r; // 当前小时数（包含小数部分）  
    var s = Math.floor(i); // 当前小时数的整数部分  
    if (String(s).length === 1) {  
        s = "0" + s; // 如果小时数是一位数，则前面补0  
    }  
  
    var d = (now - o) / 1e3 / 60 - 1440 * r - 60 * s; // 当前分钟数（包含小数部分）  
    var l = Math.floor(d); // 当前分钟数的整数部分  
    if (String(l).length === 1) {  
        l = "0" + l; // 如果分钟数是一位数，则前面补0  
    }  
  
    var g = (now - o) / 1e3 - 86400 * r - 3600 * s - 60 * l; // 当前秒数（包含小数部分）  
    var b = Math.round(g); // 当前秒数的整数部分，四舍五入  
    if (String(b).length === 1) {  
        b = "0" + b; // 如果秒数是一位数，则前面补0  
    }  
  
    // 根据时间显示不同的徽章和文本  
    let c = "";  
    if (s < 18 && s >= 9) {  
        c = `<img class='boardsign' src='https://img.shields.io/badge/妙妙屋-营业中-6adea8?style=social&logo=cakephp' title='多读书多看报少吃零食多睡觉！'><br>  
             <div style="font-size:13px;font-weight:bold">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒   
             <i id="heartbeat" class='fas fa-heartbeat'></i>   
             <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀
             <br> 再看看那个光点，它就在这里，这是家园，这是我们 —— 你所爱的每一个人，你认识的每一个人，你听说过的每一个人，曾经有过的每一个人，都在它上面度过他们的一生🌟</div>`;  
    } else {  
        c = `<img class='boardsign' src='https://img.shields.io/badge/妙妙屋-打烊了-6adea8?style=social&logo=coffeescript' title='这个点了应该去睡觉啦，熬夜对身体不好哦'><br>  
             <div style="font-size:13px;font-weight:bold">本站居然运行了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒   
             <i id="heartbeat" class='fas fa-heartbeat'></i>   
             <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀
             <br> 再看看那个光点，它就在这里，这是家园，这是我们 —— 你所爱的每一个人，你认识的每一个人，你听说过的每一个人，曾经有过的每一个人，都在它上面度过他们的一生🌟</div>`;  
    }  
  
    // 更新页面上的时间显示  
    if (document.getElementById("workboard")) {  
        document.getElementById("workboard").innerHTML = c;  
    }  
}  
  
// 每秒调用一次createtime函数来更新时间显示  
setInterval(() => {  
    createtime();  
}, 1000);