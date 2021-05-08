// Bài 1: Hiển thị thứ của ngày đưa vào
function dayInWeek(date) {
    let dayStr = date.getDay();
    a = dayStr == 0 ? `SU` : dayStr == 1 ? `MO` : dayStr == 2 ? `TU` : dayStr == 3 ? `WE` : dayStr == 4 ? `TH` : dayStr == 5 ? `FR` : `SA`;
    return a
}

// console.log("Bài 1:", dayInWeek(new Date(2021,2,23)))
// console.log("Bài 1:", dayInWeek(new Date("3/23/2021"))) // => Mặc định hiểu "mm/dd/yyyy"

// Bài 2: Tìm ngày trong quá khứ dựa vào khoảng cách giữa hai ngày
function getDateAgo(date, days) {
    let currentDay = date.getDate(); // Lấy ngày
    let agoDay = currentDay - days; // Lấy chênh lệch ngày
    let dateAgo = date.setDate(agoDay); // Trả về chuỗi số
    return new Date( dateAgo); // Biến đổi số thành ngày
}

// let date = new Date(2015, 0, 2);
// console.log( "Bài 2:", getDateAgo(date, 1)); 


// Bài 3: Tìm ngày cuối cùng trong 1 tháng
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate()
}

// console.log("Bài 3:",getLastDayOfMonth(2012,1))

// Bài 4: Tạo một hàm getSecondsToTomorrow() trả về số giây cho đến ngày mai.

function getSecondsToTomorrow() {
    let today = new Date()
    let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    let secs = Math.floor((tomorrow - Date.now()) / 1000, 0);
    return secs;
}

// console.log ("Bài 4:", getSecondsToTomorrow())

// Bài 5: 
function formatDate(date){
    let now = Date.now();
    let diff = Math.floor((now - date)/1000);
    if(diff < 1){
        return "Ngay bây giờ";
    } else if( diff < 60){
        return `${diff} giây trước`;
    } else if(diff < 3599 ){
        let min = Math.floor(diff/60);
        return `${min} phút trước`;
    } else {
        let year = date.getFullYear().toString().substr(-2);
        let month = (date.getMonth() + 1 ).toString();
        let day = date.getDate().toString();
        let hour = date.getHours().toString();
        let minute = date.getMinutes().toString();
        if(month.length == 1){
            month = "0" + month;
        }
        if(day.length == 1){
            day = "0" + day;
        }
        if(hour.length == 1){
            hour = "0" + hour;
        }
        if(minute.length == 1){
            minute = "0" + minute;
        }
        return `${day}.${month}.${year} ${hour}:${minute}`;
    }
}

// console.log("Bài 5:",formatDate(new Date(new Date - 86400 * 1000)));

// Bài 6: Hàm tính toán chênh lệch giữa 2 ngày bất kỳ ở dạng ( dd/mm/yyyy hoặc mm/dd/yyyy).

function distanceDate(date1, date2){
    let d = Math.floor((date2 - date1)/1000/60/60/24)
    return d
}

// console.log("Bài 6: ",distanceDate(new Date(2021,2,20), new Date()))





