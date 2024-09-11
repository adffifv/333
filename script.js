document.addEventListener('DOMContentLoaded', function() {  
    console.log('页面已加载完毕！');  

    // 示例：点击图片时，在控制台输出信息  
    const img = document.querySelector('img');  
    img.addEventListener('click', function() {  
        console.log('你点击了图片！');  
    });  
});