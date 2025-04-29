(function() {
    fetch('https://raw.githubusercontent.com/Singert/Security/refs/heads/main/data.txt')
        .then(response => response.text())
        .then(data => {
            console.log('偷偷拿到的数据:', data);
        })
        .catch(error => {
            console.error('偷请求失败:', error);
        });
})();
