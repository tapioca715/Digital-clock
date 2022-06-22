$(function(){
   //setinterval 함수 이용하여 1초마다 시간 달라지도록
    setInterval(function(){
        let d = new Date();
        let h = d.getHours();
        let m = d.getMinutes()
        let s = d.getSeconds();
        
        $('.hour').html(h);
        $('.min').html(m);
        $('.sec').html(s);
    
    },1000);

    if(s < 10) {
        s = '0' + s;
    };
})

// 개선 필요 부분 (과제)
// 1. 0 ~ 9까지는 앞에 0이 표시되도록 ('00'과 같이 두 자리수 표시)
// 2. 오전/오후 표시 (AM / PM)
// 3. 24시간제
// 4. 알람기능: 50분이 되면 '휴식시간' 경고창 띄우기

