window.onload = function () {
    let txt = "Ebook.txt";/*txt文件url，本地的就寫本地的位置，如果是服務器的就寫服務器的路徑*/
    let request = new XMLHttpRequest();
    request.open("get", txt);/*設置請求方法與路徑*/
    request.send(null);/*不發送數據到服務器*/
    request.onload = function () {/*XHR對象獲取到返回信息後執行*/
        if (request.status == 200) {/*返回狀態為200，即為數據獲取成功*/
            let splitResponse = request.responseText.split("\n");/*切割一行一行*/
            let times = splitResponse.filter((item, index) => index % 2 == 0);/*index偶數為次數*/
            let date = splitResponse.filter((item, index) => index % 2 != 0);/*index奇數為日期*/
            let year13 = [], year17 = [], year18 = [], year19 = [], year20 = [], year21 = [];
            let a = 0, b = 0, c = 0, d = 0, e = 0, f = 0;
            times.shift()/*去掉空格*/
            date = date.map(x => x.slice(1,11))/*選取YYYY/MM/DD*/

            let data = [];
            for (let n = 0; n < times.length; n ++) {
                data[n] = {"date":date[n], "times":times[n]};
            }

            //同日期次數加起來
            let obj = {};
            let currentDate = "";
            let currentTimes = 0;
            for(let i = 0; i< data.length-1; i++) {
                if (data[i].date === data[i+1].date) {
                    currentTimes = (currentTimes === 0 ? parseInt(data[i].times) : currentTimes) + parseInt(data[i+1].times)
                    currentDate = data[i].date
                    obj[currentDate] = currentTimes
                } else {
                    currentDate = data[i].date
                    obj[currentDate] = currentTimes !== 0 ? currentTimes : parseInt(data[i].times)
                    currentTimes = 0
                    currentDate = ""
                }
            }

            let new_data = [];
            let i = 0;
            for(key in obj){
                new_data[i]={"date":key, "times":obj[key]};
                i += 1;
            }

            //分隔年分
            for (let m = 0; m < new_data.length; m ++) {
                if(new_data[m].date.match('2013')){
                    year13[a] = new_data[m];
                    a += 1;
                }
                if(new_data[m].date.match('2017')){
                    year17[b] = new_data[m];
                    b += 1;
                }
                if(new_data[m].date.match('2018')){
                    year18[c] = new_data[m];
                    c += 1;
                }
                if(new_data[m].date.match('2019')){
                    year19[d] = new_data[m];
                    d += 1;
                }
                if(new_data[m].date.match('2020')){
                    year20[e] = new_data[m];
                    e += 1;
                }
                if(new_data[m].date.match('2021')){
                    year21[f] = new_data[m];
                    f += 1;
                }
            }

            //判斷選擇哪一年
            let queryString = decodeURIComponent(window.location.search);
            //取得?後的 key 跟 value
            queryString = queryString.substring(1);
            let queries = queryString.split("=");
            if (queries!=""){
                document.getElementById("status").innerHTML = queries[1];
            }else{
                document.getElementById("status").innerHTML = "2021";
            }
            console.log("queryString", queryString)
            console.log("queries", queries)
            //13 tables + 12 totals
            let trStr1 = '', trStr2 = '', trStr3 = '', trStr4 = '', trStr5 = '', trStr6 = '', trStr7 = '', 
                trStr8 = '', trStr9 = '', trStr10 = '', trStr11 = '', trStr12 = '', trStr13 = '', total = '';
            let alltotal = 0, total1 = 0, total2 = 0, total3 = 0, total4 = 0, total5 = 0, total6 = 0,
                total7 = 0, total8 = 0, total9 = 0, total10 = 0, total11 = 0, total12 = 0;
            
            //判斷選擇哪一年以動態拼接tables
            switch(queryString){
                case "year=2013":
                    targetYear = year13;
                    break;
                case "year=2017":
                    targetYear = year17;
                    break;
                case "year=2018":
                    targetYear = year18;
                    break;
                case "year=2019":
                    targetYear = year19;
                    break;
                case "year=2020":
                    targetYear = year20;
                    break;
                case "year=2021":
                    targetYear = year21;
                    break;
                default:
                    targetYear = year21;
            }

            for (let l = 0; l < targetYear.length; l ++) {//迴圈遍歷出year21物件中的每一個資料並顯示在對應的td中
                trStr13 += '<tr>';  
                trStr13 += '<td>' + targetYear[l].date + '</td>';//資料表的主鍵值
                trStr13 += '<td>' + targetYear[l].times + '</td>';
                trStr13 += '</tr>';
                if(targetYear[l].date.match('/01/')){
                    trStr1 += '<tr>';  
                    trStr1 += '<td>' + targetYear[l].date + '</td>';//資料表的主鍵值
                    trStr1 += '<td>' + targetYear[l].times + '</td>';
                    trStr1 += '</tr>';  
                    total1 += parseInt(targetYear[l].times);
                }
                if(targetYear[l].date.match('/02/')){
                    trStr2 += '<tr>';  
                    trStr2 += '<td>' + targetYear[l].date + '</td>';//資料表的主鍵值
                    trStr2 += '<td>' + targetYear[l].times + '</td>';
                    trStr2 += '</tr>';  
                    total2 += parseInt(targetYear[l].times);
                }
                if(targetYear[l].date.match('/03/')){
                    trStr3 += '<tr>';  
                    trStr3 += '<td>' + targetYear[l].date + '</td>';//資料表的主鍵值
                    trStr3 += '<td>' + targetYear[l].times + '</td>';
                    trStr3 += '</tr>'; 
                    total3 += parseInt(targetYear[l].times);
                }
                if(targetYear[l].date.match('/04/')){
                    trStr4 += '<tr>';  
                    trStr4 += '<td>' + targetYear[l].date + '</td>';//資料表的主鍵值
                    trStr4 += '<td>' + targetYear[l].times + '</td>';
                    trStr4 += '</tr>';  
                    total4 += parseInt(targetYear[l].times);
                }
                if(targetYear[l].date.match('/05/')){
                    trStr5 += '<tr>';  
                    trStr5 += '<td>' + targetYear[l].date + '</td>';//資料表的主鍵值
                    trStr5 += '<td>' + targetYear[l].times + '</td>';
                    trStr5 += '</tr>';  
                    total5 += parseInt(targetYear[l].times);
                }
                if(targetYear[l].date.match('/06/')){
                    trStr6 += '<tr>';  
                    trStr6 += '<td>' + targetYear[l].date + '</td>';//資料表的主鍵值
                    trStr6 += '<td>' + targetYear[l].times + '</td>';
                    trStr6 += '</tr>';  
                    total6 += parseInt(targetYear[l].times);
                }
                if(targetYear[l].date.match('/07/')){
                    trStr7 += '<tr>';  
                    trStr7 += '<td>' + targetYear[l].date + '</td>';//資料表的主鍵值
                    trStr7 += '<td>' + targetYear[l].times + '</td>';
                    trStr7 += '</tr>';  
                    total7 += parseInt(targetYear[l].times);
                }
                if(targetYear[l].date.match('/08/')){
                    trStr8 += '<tr>';  
                    trStr8 += '<td>' + targetYear[l].date + '</td>';//資料表的主鍵值
                    trStr8 += '<td>' + targetYear[l].times + '</td>';
                    trStr8 += '</tr>';  
                    total8 += parseInt(targetYear[l].times);
                }
                if(targetYear[l].date.match('/09/')){
                    trStr9 += '<tr>';  
                    trStr9 += '<td>' + targetYear[l].date + '</td>';//資料表的主鍵值
                    trStr9 += '<td>' + targetYear[l].times + '</td>';
                    trStr9 += '</tr>';  
                    total9 += parseInt(targetYear[l].times);
                }
                if(targetYear[l].date.match('/10/')){
                    trStr10 += '<tr>';  
                    trStr10 += '<td>' + targetYear[l].date + '</td>';//資料表的主鍵值
                    trStr10 += '<td>' + targetYear[l].times + '</td>';
                    trStr10 += '</tr>';  
                    total10 += parseInt(targetYear[l].times);
                }
                if(targetYear[l].date.match('/11/')){
                    trStr11 += '<tr>';  
                    trStr11 += '<td>' + targetYear[l].date + '</td>';//資料表的主鍵值
                    trStr11 += '<td>' + targetYear[l].times + '</td>';
                    trStr11 += '</tr>';  
                    total11 += parseInt(targetYear[l].times);
                }
                if(targetYear[l].date.match('/12/')){
                    trStr12 += '<tr>';  
                    trStr12 += '<td>' + targetYear[l].date + '</td>';//資料表的主鍵值
                    trStr12 += '<td>' + targetYear[l].times + '</td>';
                    trStr12 += '</tr>';  
                    total12 += parseInt(targetYear[l].times);
                }
            }
            
            alltotal = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10
                    + total11 + total12;
            //total table
            total += '<tr class="table-secondary">';  
            total += '<th>' + alltotal + '</th>';
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
            //13 tables
            $('#tbody_id1').append(trStr1);
            $('#tbody_id2').append(trStr2);
            $('#tbody_id3').append(trStr3);
            $('#tbody_id4').append(trStr4);
            $('#tbody_id5').append(trStr5);
            $('#tbody_id6').append(trStr6);
            $('#tbody_id7').append(trStr7);
            $('#tbody_id8').append(trStr8);
            $('#tbody_id9').append(trStr9);
            $('#tbody_id10').append(trStr10);
            $('#tbody_id11').append(trStr11);
            $('#tbody_id12').append(trStr12);
            $('#tbody_id13').append(trStr13);

            $('.table-striped').DataTable({
                "lengthMenu": [[5, 25, 50, -1], [5, 25, 50, "All"]],
                "searching": false,
                dom: 'lBfrtip',
                buttons: [
                    {
                        extend:    'csvHtml5',
                        bom:        true,
                        text:      '<img src="file-alt-solid.svg" alt="file" style="width:25px;height:25px;">',
                        titleAttr: 'CSV'
                    }
                ]
            });

            //chart
            let ctx = document.getElementById('myChart').getContext('2d');
            let myChart = new Chart(ctx, {
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