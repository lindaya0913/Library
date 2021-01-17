window.onload = function () {
    var json="20210106.txt";/*json文件url，本地的就寫本地的位置，如果是服務器的就寫服務器的路徑*/
    var request = new XMLHttpRequest();

    request.open("get", json);/*設置請求方法與路徑*/
    request.send(null);/*不發送數據到服務器*/
    request.onload = function () {/*XHR對象獲取到返回信息後執行*/
        if (request.status == 200) {/*返回狀態為200，即為數據獲取成功*/
            // var a = JSON.parse(request.responseText);
            // console.log(a);
            var splitResponse = request.responseText.split("\n");
            // var splitResponse = JSON.stringify(splitResponse)
            console.log(splitResponse);
            console.log(splitResponse[1]);
            var splitResponse2 = [];
            var i = 0;
            // splitResponse2 += splitResponse.indexOf("~")
            // console.log(splitResponse2);
            for(index = 1; index < splitResponse.length; index+2){
                splitResponse2[i] += splitResponse[index];

                // splitResponse2 = splitResponse.indexOf("~")
                i+=1
            } 
            document.getElementById("status").innerHTML = splitResponse; 
        }
    }
}

