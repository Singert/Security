(function() {
    fetch('https://target.com/hidden-content')
        .then(response => response.text())
        .then(data => {
            console.log('偷偷拿到的数据:', data);
        })
        .catch(error => {
            console.error('偷请求失败:', error);
        });
})();
