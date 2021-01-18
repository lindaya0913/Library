window.onload = function () {
    var txt = "20210106.txt";/*txt文件url，本地的就寫本地的位置，如果是服務器的就寫服務器的路徑*/
    var request = new XMLHttpRequest();
    request.open("get", txt);/*設置請求方法與路徑*/
    request.send(null);/*不發送數據到服務器*/
    request.onload = function () {/*XHR對象獲取到返回信息後執行*/
        if (request.status == 200) {/*返回狀態為200，即為數據獲取成功*/
            var splitResponse = request.responseText.split("\n");
            var times = splitResponse.filter((item, index) => index % 2 == 0);
            var year = splitResponse.filter((item, index) => index % 2 != 0);
            var data = [];
            var year13 = [], year17 = [], year18 = [], year19 = [], year20 = [], year21 = [];
            var a = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
            times.shift()/*去掉空格*/
            year = year.map(x => x.slice(1,11))/*選取YYYY/MM/DD*/

            for (var n = 0; n < times.length; n ++) {
                data[n]={"year":year[n], "times":times[n]};
            }

            for (var m = 0; m < data.length; m ++) {
                if(data[m].year.match('2013')){
                    year13[a] = data[m]
                    a += 1
                }
                if(data[m].year.match('2017')){
                    year17[e] = data[m]
                    e += 1
                }
                if(data[m].year.match('2018')){
                    year18[f] = data[m]
                    f += 1
                }
                if(data[m].year.match('2019')){
                    year19[g] = data[m]
                    g += 1
                }
                if(data[m].year.match('2020')){
                    year20[h] = data[m]
                    h += 1
                }
                if(data[m].year.match('2021')){
                    year21[i] = data[m]
                    i += 1
                }
            }

            var select = document.getElementById("select").value
            var trStr1 = '', trStr2 = '', trStr3 = '', trStr4 = '', trStr5 = '', trStr6 = '',
                trStr7 = '', trStr8 = '', trStr9 = '', trStr10 = '', trStr11 = '', trStr12 = '', total=''
            var total1 = 0, total2 = 0, total3 = 0, total4 = 0, total5 = 0, total6 = 0,
                total7 = 0, total8 = 0, total9 = 0, total10 = 0, total11 = 0, total12 = 0
            console.log(select);
            //year2020
            if (select = "2020"){
                for (var l = 0; l < year20.length; l ++) {//迴圈遍歷出json物件中的每一個資料並顯示在對應的td中
                    if(year20[l].year.match('/01/')){
                        trStr1 += '<tr>';  
                        trStr1 += '<td>' + year20[l].year + '</td>';//資料表的主鍵值
                        trStr1 += '<td>' + year20[l].times + '</td>';
                        trStr1 += '</tr>';  
                        total1 += parseInt(year20[l].times)
                    }
                    if(year20[l].year.match('/02/')){
                        trStr2 += '<tr>';  
                        trStr2 += '<td>' + year20[l].year + '</td>';//資料表的主鍵值
                        trStr2 += '<td>' + year20[l].times + '</td>';
                        trStr2 += '</tr>';  
                        total2 += parseInt(year20[l].times)
                    }
                    if(year20[l].year.match('/03/')){
                        trStr3 += '<tr>';  
                        trStr3 += '<td>' + year20[l].year + '</td>';//資料表的主鍵值
                        trStr3 += '<td>' + year20[l].times + '</td>';
                        trStr3 += '</tr>'; 
                        total3 += parseInt(year20[l].times) 
                    }
                    if(year20[l].year.match('/04/')){
                        trStr4 += '<tr>';  
                        trStr4 += '<td>' + year20[l].year + '</td>';//資料表的主鍵值
                        trStr4 += '<td>' + year20[l].times + '</td>';
                        trStr4 += '</tr>';  
                        total4 += parseInt(year20[l].times)
                    }
                    if(year20[l].year.match('/05/')){
                        trStr5 += '<tr>';  
                        trStr5 += '<td>' + year20[l].year + '</td>';//資料表的主鍵值
                        trStr5 += '<td>' + year20[l].times + '</td>';
                        trStr5 += '</tr>';  
                        total5 += parseInt(year20[l].times)
                    }
                    if(year20[l].year.match('/06/')){
                        trStr6 += '<tr>';  
                        trStr6 += '<td>' + year20[l].year + '</td>';//資料表的主鍵值
                        trStr6 += '<td>' + year20[l].times + '</td>';
                        trStr6 += '</tr>';  
                        total6 += parseInt(year20[l].times)
                    }
                    if(year20[l].year.match('/07/')){
                        trStr7 += '<tr>';  
                        trStr7 += '<td>' + year20[l].year + '</td>';//資料表的主鍵值
                        trStr7 += '<td>' + year20[l].times + '</td>';
                        trStr7 += '</tr>';  
                        total7 += parseInt(year20[l].times)
                    }
                    if(year20[l].year.match('/08/')){
                        trStr8 += '<tr>';  
                        trStr8 += '<td>' + year20[l].year + '</td>';//資料表的主鍵值
                        trStr8 += '<td>' + year20[l].times + '</td>';
                        trStr8 += '</tr>';  
                        total8 += parseInt(year20[l].times)
                    }
                    if(year20[l].year.match('/09/')){
                        trStr9 += '<tr>';  
                        trStr9 += '<td>' + year20[l].year + '</td>';//資料表的主鍵值
                        trStr9 += '<td>' + year20[l].times + '</td>';
                        trStr9 += '</tr>';  
                        total9 += parseInt(year20[l].times)
                    }
                    if(year20[l].year.match('/10/')){
                        trStr10 += '<tr>';  
                        trStr10 += '<td>' + year20[l].year + '</td>';//資料表的主鍵值
                        trStr10 += '<td>' + year20[l].times + '</td>';
                        trStr10 += '</tr>';  
                        total10 += parseInt(year20[l].times)
                    }
                    if(year20[l].year.match('/11/')){
                        trStr11 += '<tr>';  
                        trStr11 += '<td>' + year20[l].year + '</td>';//資料表的主鍵值
                        trStr11 += '<td>' + year20[l].times + '</td>';
                        trStr11 += '</tr>';  
                        total11 += parseInt(year20[l].times)
                    }
                    if(year20[l].year.match('/12/')){
                        trStr12 += '<tr>';  
                        trStr12 += '<td>' + year20[l].year + '</td>';//資料表的主鍵值
                        trStr12 += '<td>' + year20[l].times + '</td>';
                        trStr12 += '</tr>';  
                        total12 += parseInt(year20[l].times)
                    }
                } 
            }
            // console.log("select", select);
            // document.getElementById("status").innerHTML = "1月: " + total1 + " ;2月: "+ total2 +" ;3月: "+ total3 +
            //     " ;4月: "+ total4 +" ;5月: "+ total5 +" ;6月: "+ total6 +" ;7月: "+ total7 +" ;8月: "+ total8 +
            //     " ;9月: "+ total9 +" ;10月: "+ total10 +" ;11月: "+ total11 +" ;12月: "+ total12; 

            total += '<tr>';  
            total += '<td>' + total1 + '</td>';//資料表的主鍵值
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
            $('#total_body').append(total);
            //table
            $('#tbody_id1').append(trStr1);
            $('#table_id1').DataTable({
                "order": [ 0, 'asc' ],
            });
            $('#tbody_id2').append(trStr2);
            $('#table_id2').DataTable({
                "order": [ 0, 'asc' ],
            });
            $('#tbody_id3').append(trStr3);
            $('#table_id3').DataTable({
                "order": [ 0, 'asc' ],
            });
            $('#tbody_id4').append(trStr4);
            $('#table_id4').DataTable({
                "order": [ 0, 'asc' ],
            });
            $('#tbody_id5').append(trStr5);
            $('#table_id5').DataTable({
                "order": [ 0, 'asc' ],
            });
            $('#tbody_id6').append(trStr6);
            $('#table_id6').DataTable({
                "order": [ 0, 'asc' ],
            });
            $('#tbody_id7').append(trStr7);
            $('#table_id7').DataTable({
                "order": [ 0, 'asc' ],
            });
            $('#tbody_id8').append(trStr8);
            $('#table_id8').DataTable({
                "order": [ 0, 'asc' ],
            });
            $('#tbody_id9').append(trStr9);
            $('#table_id9').DataTable({
                "order": [ 0, 'asc' ],
            });
            $('#tbody_id10').append(trStr10);
            $('#table_id10').DataTable({
                "order": [ 0, 'asc' ],
            });
            $('#tbody_id11').append(trStr11);
            $('#table_id11').DataTable({
                "order": [ 0, 'asc' ],
            });
            $('#tbody_id12').append(trStr12);
            $('#table_id12').DataTable({
                "order": [ 0, 'asc' ],
            });

            var ctx = document.getElementById('myChart').getContext('2d');
            // var chart = new Chart(ctx, {
            //     type: 'line',
            //     data: {
            //     labels: data.map(x=>x.Time.slice(11,16)),
            //     datasets: [{
            //         label: '交通量',
            //         data: data.map(x=>x.Volume),
            //         // ... 待會美化的部分加在這裡
            //     }]
            //     },
            //     options: {
            //     responsive: false    
            //     // ... 圖表標題和圖例在這裡修改
            //     }
            // });
        }
    }
}

