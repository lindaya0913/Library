window.onload = function () {
    var txt = "20210106.txt";/*txt文件url，本地的就寫本地的位置，如果是服務器的就寫服務器的路徑*/
    var request = new XMLHttpRequest();
    request.open("get", txt);/*設置請求方法與路徑*/
    request.send(null);/*不發送數據到服務器*/
    request.onload = function () {/*XHR對象獲取到返回信息後執行*/
        if (request.status == 200) {/*返回狀態為200，即為數據獲取成功*/
            var splitResponse = request.responseText.split("\n");
            var times = splitResponse.filter((item, index) => index % 2 == 0);
            var date = splitResponse.filter((item, index) => index % 2 != 0);
            var data = [];
            var year13 = [], year17 = [], year18 = [], year19 = [], year20 = [], year21 = [];
            var a = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
            times.shift()/*去掉空格*/
            date = date.map(x => x.slice(1,11))/*選取YYYY/MM/DD*/

            for (var n = 0; n < times.length; n ++) {
                data[n] = {"date":date[n], "times":times[n]};
            }

            //分隔年分
            for (var m = 0; m < data.length; m ++) {
                if(data[m].date.match('2013')){
                    year13[a] = data[m];
                    a += 1;
                }
                if(data[m].date.match('2017')){
                    year17[e] = data[m];
                    e += 1;
                }
                if(data[m].date.match('2018')){
                    year18[f] = data[m];
                    f += 1;
                }
                if(data[m].date.match('2019')){
                    year19[g] = data[m];
                    g += 1;
                }
                if(data[m].date.match('2020')){
                    year20[h] = data[m];
                    h += 1;
                }
                if(data[m].date.match('2021')){
                    year21[i] = data[m];
                    i += 1;
                }
            }

            //判斷選擇哪一年
            var queryString = decodeURIComponent(window.location.search);
            //取得?後的 key 跟 value
            queryString = queryString.substring(1);
            var queries = queryString.split("=");
            if (queries!=""){
                document.getElementById("status").innerHTML = queries[1];
            }else{
                document.getElementById("status").innerHTML = "2013";
            }
            

            //12 tables + 12 totals
            var trStr1 = '', trStr2 = '', trStr3 = '', trStr4 = '', trStr5 = '', trStr6 = '',
                trStr7 = '', trStr8 = '', trStr9 = '', trStr10 = '', trStr11 = '', trStr12 = '', total='';
            var alltotal = 0, total1 = 0, total2 = 0, total3 = 0, total4 = 0, total5 = 0, total6 = 0,
                total7 = 0, total8 = 0, total9 = 0, total10 = 0, total11 = 0, total12 = 0;
            
            if (queryString == "year=2021"){//year2021
                for (var l = 0; l < year21.length; l ++) {//迴圈遍歷出year21物件中的每一個資料並顯示在對應的td中
                    if(year21[l].date.match('/01/')){
                        trStr1 += '<tr>';  
                        trStr1 += '<td>' + year21[l].date + '</td>';//資料表的主鍵值
                        trStr1 += '<td>' + year21[l].times + '</td>';
                        trStr1 += '</tr>';  
                        total1 += parseInt(year21[l].times);
                    }
                    if(year21[l].date.match('/02/')){
                        trStr2 += '<tr>';  
                        trStr2 += '<td>' + year21[l].date + '</td>';//資料表的主鍵值
                        trStr2 += '<td>' + year21[l].times + '</td>';
                        trStr2 += '</tr>';  
                        total2 += parseInt(year21[l].times);
                    }
                    if(year21[l].date.match('/03/')){
                        trStr3 += '<tr>';  
                        trStr3 += '<td>' + year21[l].date + '</td>';//資料表的主鍵值
                        trStr3 += '<td>' + year21[l].times + '</td>';
                        trStr3 += '</tr>'; 
                        total3 += parseInt(year21[l].times);
                    }
                    if(year21[l].date.match('/04/')){
                        trStr4 += '<tr>';  
                        trStr4 += '<td>' + year21[l].date + '</td>';//資料表的主鍵值
                        trStr4 += '<td>' + year21[l].times + '</td>';
                        trStr4 += '</tr>';  
                        total4 += parseInt(year21[l].times);
                    }
                    if(year21[l].date.match('/05/')){
                        trStr5 += '<tr>';  
                        trStr5 += '<td>' + year21[l].date + '</td>';//資料表的主鍵值
                        trStr5 += '<td>' + year21[l].times + '</td>';
                        trStr5 += '</tr>';  
                        total5 += parseInt(year21[l].times);
                    }
                    if(year21[l].date.match('/06/')){
                        trStr6 += '<tr>';  
                        trStr6 += '<td>' + year21[l].date + '</td>';//資料表的主鍵值
                        trStr6 += '<td>' + year21[l].times + '</td>';
                        trStr6 += '</tr>';  
                        total6 += parseInt(year21[l].times);
                    }
                    if(year21[l].date.match('/07/')){
                        trStr7 += '<tr>';  
                        trStr7 += '<td>' + year21[l].date + '</td>';//資料表的主鍵值
                        trStr7 += '<td>' + year21[l].times + '</td>';
                        trStr7 += '</tr>';  
                        total7 += parseInt(year21[l].times);
                    }
                    if(year21[l].date.match('/08/')){
                        trStr8 += '<tr>';  
                        trStr8 += '<td>' + year21[l].date + '</td>';//資料表的主鍵值
                        trStr8 += '<td>' + year21[l].times + '</td>';
                        trStr8 += '</tr>';  
                        total8 += parseInt(year21[l].times);
                    }
                    if(year21[l].date.match('/09/')){
                        trStr9 += '<tr>';  
                        trStr9 += '<td>' + year21[l].date + '</td>';//資料表的主鍵值
                        trStr9 += '<td>' + year21[l].times + '</td>';
                        trStr9 += '</tr>';  
                        total9 += parseInt(year21[l].times);
                    }
                    if(year21[l].date.match('/10/')){
                        trStr10 += '<tr>';  
                        trStr10 += '<td>' + year21[l].date + '</td>';//資料表的主鍵值
                        trStr10 += '<td>' + year21[l].times + '</td>';
                        trStr10 += '</tr>';  
                        total10 += parseInt(year21[l].times);
                    }
                    if(year21[l].date.match('/11/')){
                        trStr11 += '<tr>';  
                        trStr11 += '<td>' + year21[l].date + '</td>';//資料表的主鍵值
                        trStr11 += '<td>' + year21[l].times + '</td>';
                        trStr11 += '</tr>';  
                        total11 += parseInt(year21[l].times);
                    }
                    if(year21[l].date.match('/12/')){
                        trStr12 += '<tr>';  
                        trStr12 += '<td>' + year21[l].date + '</td>';//資料表的主鍵值
                        trStr12 += '<td>' + year21[l].times + '</td>';
                        trStr12 += '</tr>';  
                        total12 += parseInt(year21[l].times);
                    }
                } 
            } else if (queryString == "year=2020"){//year2020
                for (var l = 0; l < year20.length; l ++) {//迴圈遍歷出year20物件中的每一個資料並顯示在對應的td中
                    if(year20[l].date.match('/01/')){
                        trStr1 += '<tr>';  
                        trStr1 += '<td>' + year20[l].date + '</td>';//資料表的主鍵值
                        trStr1 += '<td>' + year20[l].times + '</td>';
                        trStr1 += '</tr>';  
                        total1 += parseInt(year20[l].times);
                    }
                    if(year20[l].date.match('/02/')){
                        trStr2 += '<tr>';  
                        trStr2 += '<td>' + year20[l].date + '</td>';//資料表的主鍵值
                        trStr2 += '<td>' + year20[l].times + '</td>';
                        trStr2 += '</tr>';  
                        total2 += parseInt(year20[l].times);
                    }
                    if(year20[l].date.match('/03/')){
                        trStr3 += '<tr>';  
                        trStr3 += '<td>' + year20[l].date + '</td>';//資料表的主鍵值
                        trStr3 += '<td>' + year20[l].times + '</td>';
                        trStr3 += '</tr>'; 
                        total3 += parseInt(year20[l].times);
                    }
                    if(year20[l].date.match('/04/')){
                        trStr4 += '<tr>';  
                        trStr4 += '<td>' + year20[l].date + '</td>';//資料表的主鍵值
                        trStr4 += '<td>' + year20[l].times + '</td>';
                        trStr4 += '</tr>';  
                        total4 += parseInt(year20[l].times);
                    }
                    if(year20[l].date.match('/05/')){
                        trStr5 += '<tr>';  
                        trStr5 += '<td>' + year20[l].date + '</td>';//資料表的主鍵值
                        trStr5 += '<td>' + year20[l].times + '</td>';
                        trStr5 += '</tr>';  
                        total5 += parseInt(year20[l].times);
                    }
                    if(year20[l].date.match('/06/')){
                        trStr6 += '<tr>';  
                        trStr6 += '<td>' + year20[l].date + '</td>';//資料表的主鍵值
                        trStr6 += '<td>' + year20[l].times + '</td>';
                        trStr6 += '</tr>';  
                        total6 += parseInt(year20[l].times);
                    }
                    if(year20[l].date.match('/07/')){
                        trStr7 += '<tr>';  
                        trStr7 += '<td>' + year20[l].date + '</td>';//資料表的主鍵值
                        trStr7 += '<td>' + year20[l].times + '</td>';
                        trStr7 += '</tr>';  
                        total7 += parseInt(year20[l].times);
                    }
                    if(year20[l].date.match('/08/')){
                        trStr8 += '<tr>';  
                        trStr8 += '<td>' + year20[l].date + '</td>';//資料表的主鍵值
                        trStr8 += '<td>' + year20[l].times + '</td>';
                        trStr8 += '</tr>';  
                        total8 += parseInt(year20[l].times);
                    }
                    if(year20[l].date.match('/09/')){
                        trStr9 += '<tr>';  
                        trStr9 += '<td>' + year20[l].date + '</td>';//資料表的主鍵值
                        trStr9 += '<td>' + year20[l].times + '</td>';
                        trStr9 += '</tr>';  
                        total9 += parseInt(year20[l].times);
                    }
                    if(year20[l].date.match('/10/')){
                        trStr10 += '<tr>';  
                        trStr10 += '<td>' + year20[l].date + '</td>';//資料表的主鍵值
                        trStr10 += '<td>' + year20[l].times + '</td>';
                        trStr10 += '</tr>';  
                        total10 += parseInt(year20[l].times);
                    }
                    if(year20[l].date.match('/11/')){
                        trStr11 += '<tr>';  
                        trStr11 += '<td>' + year20[l].date + '</td>';//資料表的主鍵值
                        trStr11 += '<td>' + year20[l].times + '</td>';
                        trStr11 += '</tr>';  
                        total11 += parseInt(year20[l].times);
                    }
                    if(year20[l].date.match('/12/')){
                        trStr12 += '<tr>';  
                        trStr12 += '<td>' + year20[l].date + '</td>';//資料表的主鍵值
                        trStr12 += '<td>' + year20[l].times + '</td>';
                        trStr12 += '</tr>';  
                        total12 += parseInt(year20[l].times);
                    }
                } 
            } else if (queryString == "year=2019"){//year2019
                for (var l = 0; l < year19.length; l ++) {//迴圈遍歷出year19物件中的每一個資料並顯示在對應的td中
                    if(year19[l].date.match('/01/')){
                        trStr1 += '<tr>';  
                        trStr1 += '<td>' + year19[l].date + '</td>';//資料表的主鍵值
                        trStr1 += '<td>' + year19[l].times + '</td>';
                        trStr1 += '</tr>';  
                        total1 += parseInt(year19[l].times);
                    }
                    if(year19[l].date.match('/02/')){
                        trStr2 += '<tr>';  
                        trStr2 += '<td>' + year19[l].date + '</td>';//資料表的主鍵值
                        trStr2 += '<td>' + year19[l].times + '</td>';
                        trStr2 += '</tr>';  
                        total2 += parseInt(year19[l].times);
                    }
                    if(year19[l].date.match('/03/')){
                        trStr3 += '<tr>';  
                        trStr3 += '<td>' + year19[l].date + '</td>';//資料表的主鍵值
                        trStr3 += '<td>' + year19[l].times + '</td>';
                        trStr3 += '</tr>'; 
                        total3 += parseInt(year19[l].times);
                    }
                    if(year19[l].date.match('/04/')){
                        trStr4 += '<tr>';  
                        trStr4 += '<td>' + year19[l].date + '</td>';//資料表的主鍵值
                        trStr4 += '<td>' + year19[l].times + '</td>';
                        trStr4 += '</tr>';  
                        total4 += parseInt(year19[l].times);
                    }
                    if(year19[l].date.match('/05/')){
                        trStr5 += '<tr>';  
                        trStr5 += '<td>' + year19[l].date + '</td>';//資料表的主鍵值
                        trStr5 += '<td>' + year19[l].times + '</td>';
                        trStr5 += '</tr>';  
                        total5 += parseInt(year19[l].times);
                    }
                    if(year19[l].date.match('/06/')){
                        trStr6 += '<tr>';  
                        trStr6 += '<td>' + year19[l].date + '</td>';//資料表的主鍵值
                        trStr6 += '<td>' + year19[l].times + '</td>';
                        trStr6 += '</tr>';  
                        total6 += parseInt(year19[l].times);
                    }
                    if(year19[l].date.match('/07/')){
                        trStr7 += '<tr>';  
                        trStr7 += '<td>' + year19[l].date + '</td>';//資料表的主鍵值
                        trStr7 += '<td>' + year19[l].times + '</td>';
                        trStr7 += '</tr>';  
                        total7 += parseInt(year19[l].times);
                    }
                    if(year19[l].date.match('/08/')){
                        trStr8 += '<tr>';  
                        trStr8 += '<td>' + year19[l].date + '</td>';//資料表的主鍵值
                        trStr8 += '<td>' + year19[l].times + '</td>';
                        trStr8 += '</tr>';  
                        total8 += parseInt(year19[l].times);
                    }
                    if(year19[l].date.match('/09/')){
                        trStr9 += '<tr>';  
                        trStr9 += '<td>' + year19[l].date + '</td>';//資料表的主鍵值
                        trStr9 += '<td>' + year19[l].times + '</td>';
                        trStr9 += '</tr>';  
                        total9 += parseInt(year19[l].times);
                    }
                    if(year19[l].date.match('/10/')){
                        trStr10 += '<tr>';  
                        trStr10 += '<td>' + year19[l].date + '</td>';//資料表的主鍵值
                        trStr10 += '<td>' + year19[l].times + '</td>';
                        trStr10 += '</tr>';  
                        total10 += parseInt(year19[l].times);
                    }
                    if(year19[l].date.match('/11/')){
                        trStr11 += '<tr>';  
                        trStr11 += '<td>' + year19[l].date + '</td>';//資料表的主鍵值
                        trStr11 += '<td>' + year19[l].times + '</td>';
                        trStr11 += '</tr>';  
                        total11 += parseInt(year19[l].times);
                    }
                    if(year19[l].date.match('/12/')){
                        trStr12 += '<tr>';  
                        trStr12 += '<td>' + year19[l].date + '</td>';//資料表的主鍵值
                        trStr12 += '<td>' + year19[l].times + '</td>';
                        trStr12 += '</tr>';  
                        total12 += parseInt(year19[l].times);
                    }
                } 
            } else if (queryString == "year=2018"){//year2018
                for (var l = 0; l < year18.length; l ++) {//迴圈遍歷出year18物件中的每一個資料並顯示在對應的td中
                    if(year18[l].date.match('/01/')){
                        trStr1 += '<tr>';  
                        trStr1 += '<td>' + year18[l].date + '</td>';//資料表的主鍵值
                        trStr1 += '<td>' + year18[l].times + '</td>';
                        trStr1 += '</tr>';  
                        total1 += parseInt(year18[l].times);
                    }
                    if(year18[l].date.match('/02/')){
                        trStr2 += '<tr>';  
                        trStr2 += '<td>' + year18[l].date + '</td>';//資料表的主鍵值
                        trStr2 += '<td>' + year18[l].times + '</td>';
                        trStr2 += '</tr>';  
                        total2 += parseInt(year18[l].times);
                    }
                    if(year18[l].date.match('/03/')){
                        trStr3 += '<tr>';  
                        trStr3 += '<td>' + year18[l].date + '</td>';//資料表的主鍵值
                        trStr3 += '<td>' + year18[l].times + '</td>';
                        trStr3 += '</tr>'; 
                        total3 += parseInt(year18[l].times);
                    }
                    if(year18[l].date.match('/04/')){
                        trStr4 += '<tr>';  
                        trStr4 += '<td>' + year18[l].date + '</td>';//資料表的主鍵值
                        trStr4 += '<td>' + year18[l].times + '</td>';
                        trStr4 += '</tr>';  
                        total4 += parseInt(year18[l].times);
                    }
                    if(year18[l].date.match('/05/')){
                        trStr5 += '<tr>';  
                        trStr5 += '<td>' + year18[l].date + '</td>';//資料表的主鍵值
                        trStr5 += '<td>' + year18[l].times + '</td>';
                        trStr5 += '</tr>';  
                        total5 += parseInt(year18[l].times);
                    }
                    if(year18[l].date.match('/06/')){
                        trStr6 += '<tr>';  
                        trStr6 += '<td>' + year18[l].date + '</td>';//資料表的主鍵值
                        trStr6 += '<td>' + year18[l].times + '</td>';
                        trStr6 += '</tr>';  
                        total6 += parseInt(year18[l].times);
                    }
                    if(year18[l].date.match('/07/')){
                        trStr7 += '<tr>';  
                        trStr7 += '<td>' + year18[l].date + '</td>';//資料表的主鍵值
                        trStr7 += '<td>' + year18[l].times + '</td>';
                        trStr7 += '</tr>';  
                        total7 += parseInt(year18[l].times);
                    }
                    if(year18[l].date.match('/08/')){
                        trStr8 += '<tr>';  
                        trStr8 += '<td>' + year18[l].date + '</td>';//資料表的主鍵值
                        trStr8 += '<td>' + year18[l].times + '</td>';
                        trStr8 += '</tr>';  
                        total8 += parseInt(year18[l].times);
                    }
                    if(year18[l].date.match('/09/')){
                        trStr9 += '<tr>';  
                        trStr9 += '<td>' + year18[l].date + '</td>';//資料表的主鍵值
                        trStr9 += '<td>' + year18[l].times + '</td>';
                        trStr9 += '</tr>';  
                        total9 += parseInt(year18[l].times);
                    }
                    if(year18[l].date.match('/10/')){
                        trStr10 += '<tr>';  
                        trStr10 += '<td>' + year18[l].date + '</td>';//資料表的主鍵值
                        trStr10 += '<td>' + year18[l].times + '</td>';
                        trStr10 += '</tr>';  
                        total10 += parseInt(year18[l].times);
                    }
                    if(year18[l].date.match('/11/')){
                        trStr11 += '<tr>';  
                        trStr11 += '<td>' + year18[l].date + '</td>';//資料表的主鍵值
                        trStr11 += '<td>' + year18[l].times + '</td>';
                        trStr11 += '</tr>';  
                        total11 += parseInt(year18[l].times);
                    }
                    if(year18[l].date.match('/12/')){
                        trStr12 += '<tr>';  
                        trStr12 += '<td>' + year18[l].date + '</td>';//資料表的主鍵值
                        trStr12 += '<td>' + year18[l].times + '</td>';
                        trStr12 += '</tr>';  
                        total12 += parseInt(year18[l].times);
                    }
                } 
            } else if (queryString == "year=2017"){//year2017
                for (var l = 0; l < year17.length; l ++) {//迴圈遍歷出year17物件中的每一個資料並顯示在對應的td中
                    if(year17[l].date.match('/01/')){
                        trStr1 += '<tr>';  
                        trStr1 += '<td>' + year17[l].date + '</td>';//資料表的主鍵值
                        trStr1 += '<td>' + year17[l].times + '</td>';
                        trStr1 += '</tr>';  
                        total1 += parseInt(year17[l].times);
                    }
                    if(year17[l].date.match('/02/')){
                        trStr2 += '<tr>';  
                        trStr2 += '<td>' + year17[l].date + '</td>';//資料表的主鍵值
                        trStr2 += '<td>' + year17[l].times + '</td>';
                        trStr2 += '</tr>';  
                        total2 += parseInt(year17[l].times);
                    }
                    if(year17[l].date.match('/03/')){
                        trStr3 += '<tr>';  
                        trStr3 += '<td>' + year17[l].date + '</td>';//資料表的主鍵值
                        trStr3 += '<td>' + year17[l].times + '</td>';
                        trStr3 += '</tr>'; 
                        total3 += parseInt(year17[l].times);
                    }
                    if(year17[l].date.match('/04/')){
                        trStr4 += '<tr>';  
                        trStr4 += '<td>' + year17[l].date + '</td>';//資料表的主鍵值
                        trStr4 += '<td>' + year17[l].times + '</td>';
                        trStr4 += '</tr>';  
                        total4 += parseInt(year17[l].times);
                    }
                    if(year17[l].date.match('/05/')){
                        trStr5 += '<tr>';  
                        trStr5 += '<td>' + year17[l].date + '</td>';//資料表的主鍵值
                        trStr5 += '<td>' + year17[l].times + '</td>';
                        trStr5 += '</tr>';  
                        total5 += parseInt(year17[l].times);
                    }
                    if(year17[l].date.match('/06/')){
                        trStr6 += '<tr>';  
                        trStr6 += '<td>' + year17[l].date + '</td>';//資料表的主鍵值
                        trStr6 += '<td>' + year17[l].times + '</td>';
                        trStr6 += '</tr>';  
                        total6 += parseInt(year17[l].times);
                    }
                    if(year17[l].date.match('/07/')){
                        trStr7 += '<tr>';  
                        trStr7 += '<td>' + year17[l].date + '</td>';//資料表的主鍵值
                        trStr7 += '<td>' + year17[l].times + '</td>';
                        trStr7 += '</tr>';  
                        total7 += parseInt(year17[l].times);
                    }
                    if(year17[l].date.match('/08/')){
                        trStr8 += '<tr>';  
                        trStr8 += '<td>' + year17[l].date + '</td>';//資料表的主鍵值
                        trStr8 += '<td>' + year17[l].times + '</td>';
                        trStr8 += '</tr>';  
                        total8 += parseInt(year17[l].times);
                    }
                    if(year17[l].date.match('/09/')){
                        trStr9 += '<tr>';  
                        trStr9 += '<td>' + year17[l].date + '</td>';//資料表的主鍵值
                        trStr9 += '<td>' + year17[l].times + '</td>';
                        trStr9 += '</tr>';  
                        total9 += parseInt(year17[l].times);
                    }
                    if(year17[l].date.match('/10/')){
                        trStr10 += '<tr>';  
                        trStr10 += '<td>' + year17[l].date + '</td>';//資料表的主鍵值
                        trStr10 += '<td>' + year17[l].times + '</td>';
                        trStr10 += '</tr>';  
                        total10 += parseInt(year17[l].times);
                    }
                    if(year17[l].date.match('/11/')){
                        trStr11 += '<tr>';  
                        trStr11 += '<td>' + year17[l].date + '</td>';//資料表的主鍵值
                        trStr11 += '<td>' + year17[l].times + '</td>';
                        trStr11 += '</tr>';  
                        total11 += parseInt(year17[l].times);
                    }
                    if(year17[l].date.match('/12/')){
                        trStr12 += '<tr>';  
                        trStr12 += '<td>' + year17[l].date + '</td>';//資料表的主鍵值
                        trStr12 += '<td>' + year17[l].times + '</td>';
                        trStr12 += '</tr>';  
                        total12 += parseInt(year17[l].times);
                    }
                } 
            } else if (queryString == "" || "year=2013"){//year2013
                for (var l = 0; l < year13.length; l ++) {//迴圈遍歷出year13物件中的每一個資料並顯示在對應的td中
                    if(year13[l].date.match('/01/')){
                        trStr1 += '<tr>';  
                        trStr1 += '<td>' + year13[l].date + '</td>';//資料表的主鍵值
                        trStr1 += '<td>' + year13[l].times + '</td>';
                        trStr1 += '</tr>';  
                        total1 += parseInt(year13[l].times);
                    }
                    if(year13[l].date.match('/02/')){
                        trStr2 += '<tr>';  
                        trStr2 += '<td>' + year13[l].date + '</td>';//資料表的主鍵值
                        trStr2 += '<td>' + year13[l].times + '</td>';
                        trStr2 += '</tr>';  
                        total2 += parseInt(year13[l].times);
                    }
                    if(year13[l].date.match('/03/')){
                        trStr3 += '<tr>';  
                        trStr3 += '<td>' + year13[l].date + '</td>';//資料表的主鍵值
                        trStr3 += '<td>' + year13[l].times + '</td>';
                        trStr3 += '</tr>'; 
                        total3 += parseInt(year13[l].times);
                    }
                    if(year13[l].date.match('/04/')){
                        trStr4 += '<tr>';  
                        trStr4 += '<td>' + year13[l].date + '</td>';//資料表的主鍵值
                        trStr4 += '<td>' + year13[l].times + '</td>';
                        trStr4 += '</tr>';  
                        total4 += parseInt(year13[l].times);
                    }
                    if(year13[l].date.match('/05/')){
                        trStr5 += '<tr>';  
                        trStr5 += '<td>' + year13[l].date + '</td>';//資料表的主鍵值
                        trStr5 += '<td>' + year13[l].times + '</td>';
                        trStr5 += '</tr>';  
                        total5 += parseInt(year13[l].times);
                    }
                    if(year13[l].date.match('/06/')){
                        trStr6 += '<tr>';  
                        trStr6 += '<td>' + year13[l].date + '</td>';//資料表的主鍵值
                        trStr6 += '<td>' + year13[l].times + '</td>';
                        trStr6 += '</tr>';  
                        total6 += parseInt(year13[l].times);
                    }
                    if(year13[l].date.match('/07/')){
                        trStr7 += '<tr>';  
                        trStr7 += '<td>' + year13[l].date + '</td>';//資料表的主鍵值
                        trStr7 += '<td>' + year13[l].times + '</td>';
                        trStr7 += '</tr>';  
                        total7 += parseInt(year13[l].times);
                    }
                    if(year13[l].date.match('/08/')){
                        trStr8 += '<tr>';  
                        trStr8 += '<td>' + year13[l].date + '</td>';//資料表的主鍵值
                        trStr8 += '<td>' + year13[l].times + '</td>';
                        trStr8 += '</tr>';  
                        total8 += parseInt(year13[l].times);
                    }
                    if(year13[l].date.match('/09/')){
                        trStr9 += '<tr>';  
                        trStr9 += '<td>' + year13[l].date + '</td>';//資料表的主鍵值
                        trStr9 += '<td>' + year13[l].times + '</td>';
                        trStr9 += '</tr>';  
                        total9 += parseInt(year13[l].times);
                    }
                    if(year13[l].date.match('/10/')){
                        trStr10 += '<tr>';  
                        trStr10 += '<td>' + year13[l].date + '</td>';//資料表的主鍵值
                        trStr10 += '<td>' + year13[l].times + '</td>';
                        trStr10 += '</tr>';  
                        total10 += parseInt(year13[l].times);
                    }
                    if(year13[l].date.match('/11/')){
                        trStr11 += '<tr>';  
                        trStr11 += '<td>' + year13[l].date + '</td>';//資料表的主鍵值
                        trStr11 += '<td>' + year13[l].times + '</td>';
                        trStr11 += '</tr>';  
                        total11 += parseInt(year13[l].times);
                    }
                    if(year13[l].date.match('/12/')){
                        trStr12 += '<tr>';  
                        trStr12 += '<td>' + year13[l].date + '</td>';//資料表的主鍵值
                        trStr12 += '<td>' + year13[l].times + '</td>';
                        trStr12 += '</tr>';  
                        total12 += parseInt(year13[l].times);
                    }
                } 
            }

            alltotal=total1+total2+total3+total4+total5+total6+total7+total8+total9+total10+total11+total12;
            //total table
            total += '<tr>';  
            total += '<td>' + alltotal + '</td>';
            total += '<td>' + total1 + '</td>';
            total += '<td>' + total2 + '</td>';
            total += '<td>' + total3 + '</td>';
            total += '<td>' + total4 + '</td>';
            total += '<td>' + total5 + '</td>';
            total += '<td>' + total6 + '</td>';
            total += '<td>' + total7 + '</td>';
            total += '<td>' + total8 + '</td>';
            total += '<td>' + total9 + '</td>';
            total += '<td>' + total10 + '</td>';
            total += '<td>' + total11 + '</td>';
            total += '<td>' + total12 + '</td>';
            total += '</tr>';  

            //total table
            $('#total_body').append(total);
            //12 tables
            $('#tbody_id1').append(trStr1);
            $('#table_id1').DataTable({
                "searching": false,
                dom: 'lBfrtip',
                buttons: [
                    {
                        extend:    'csvHtml5',
                        bom:        true,
                        text:      '<i class="fa fa-file-text-o fa-2x"></i>',
                        titleAttr: 'CSV'
                    }
                ]
            });
            $('#tbody_id2').append(trStr2);
            $('#table_id2').DataTable({
                "searching": false,
                dom: 'lBfrtip',
                buttons: [
                    {
                        extend:    'csvHtml5',
                        charset:   'UTF-8',
                        bom:        true,
                        text:      '<i class="fa fa-file-text-o fa-2x"></i>',
                        titleAttr: 'CSV'
                    }
                ]
            });
            $('#tbody_id3').append(trStr3);
            $('#table_id3').DataTable({
                "searching": false,
                dom: 'lBfrtip',
                buttons: [
                    {
                        extend:    'csvHtml5',
                        bom:        true,
                        text:      '<i class="fa fa-file-text-o fa-2x"></i>',
                        titleAttr: 'CSV'
                    }
                ]
            });
            $('#tbody_id4').append(trStr4);
            $('#table_id4').DataTable({
                "searching": false,
                dom: 'lBfrtip',
                buttons: [
                    {
                        extend:    'csvHtml5',
                        bom:        true,
                        text:      '<i class="fa fa-file-text-o fa-2x"></i>',
                        titleAttr: 'CSV'
                    }
                ]
            });
            $('#tbody_id5').append(trStr5);
            $('#table_id5').DataTable({
                "searching": false,
                dom: 'lBfrtip',
                buttons: [
                    {
                        extend:    'csvHtml5',
                        bom:        true,
                        text:      '<i class="fa fa-file-text-o fa-2x"></i>',
                        titleAttr: 'CSV'
                    }
                ]
            });
            $('#tbody_id6').append(trStr6);
            $('#table_id6').DataTable({
                "searching": false,
                dom: 'lBfrtip',
                buttons: [
                    {
                        extend:    'csvHtml5',
                        bom:        true,
                        text:      '<i class="fa fa-file-text-o fa-2x"></i>',
                        titleAttr: 'CSV'
                    }
                ]
            });
            $('#tbody_id7').append(trStr7);
            $('#table_id7').DataTable({
                "searching": false,
                dom: 'lBfrtip',
                buttons: [
                    {
                        extend:    'csvHtml5',
                        bom:        true,
                        text:      '<i class="fa fa-file-text-o fa-2x"></i>',
                        titleAttr: 'CSV'
                    }
                ]
            });
            $('#tbody_id8').append(trStr8);
            $('#table_id8').DataTable({
                "searching": false,
                dom: 'lBfrtip',
                buttons: [
                    {
                        extend:    'csvHtml5',
                        bom:        true,
                        text:      '<i class="fa fa-file-text-o fa-2x"></i>',
                        titleAttr: 'CSV'
                    }
                ]
            });
            $('#tbody_id9').append(trStr9);
            $('#table_id9').DataTable({
                "searching": false,
                dom: 'lBfrtip',
                buttons: [
                    {
                        extend:    'csvHtml5',
                        bom:        true,
                        text:      '<i class="fa fa-file-text-o fa-2x"></i>',
                        titleAttr: 'CSV'
                    }
                ]
            });
            $('#tbody_id10').append(trStr10);
            $('#table_id10').DataTable({
                "searching": false,
                dom: 'lBfrtip',
                buttons: [
                    {
                        extend:    'csvHtml5',
                        bom:        true,
                        text:      '<i class="fa fa-file-text-o fa-2x"></i>',
                        titleAttr: 'CSV'
                    }
                ]
            });
            $('#tbody_id11').append(trStr11);
            $('#table_id11').DataTable({
                "searching": false,
                dom: 'lBfrtip',
                buttons: [
                    {
                        extend:    'csvHtml5',
                        bom:        true,
                        text:      '<i class="fa fa-file-text-o fa-2x"></i>',
                        titleAttr: 'CSV'
                    }
                ]
            });
            $('#tbody_id12').append(trStr12);
            $('#table_id12').DataTable({
                "searching": false,
                dom: 'lBfrtip',
                buttons: [
                    {
                        extend:    'csvHtml5',
                        bom:        true,
                        text:      '<i class="fa fa-file-text-o fa-2x"></i>',
                        titleAttr: 'CSV'
                    }
                ]
            });

            //chart
            var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                    datasets: [{
                        label: '電子書使用次數',
                        data: [total1,total2,total3,total4,total5,total6,total7,total8,total9,total10,total11,total12],
                        fill: false,
                        backgroundColor: 'rgba(212, 106, 106, 1)',
                        borderColor: 'rgba(212, 106, 106, 1)'
                    }]
                },
                options: {
                responsive: false    
                // ... 圖表標題和圖例在這裡修改
                }
            });
        }
    }
}