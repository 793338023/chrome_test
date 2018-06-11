/*从Google Chrome扩展程序页面发送请求消息给content scripts的时候，需要给出当前tab的ID*/
chrome.tabs.query(
    {active: true, currentWindow: true}, 
    function(tabs) {
          chrome.tabs.sendMessage(
            tabs[0].id, 
            {greeting: "hello"}, 
            function(response) {
                    document.querySelector("#p").innerHTML = response.greeting;
        });
});