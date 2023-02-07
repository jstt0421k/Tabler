

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    
    var mo = date.getMonth();
    var da = date.getDate();
    var year = date.getFullYear();
    var day = date.getDay();

    let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    if(h == 0){
        h = 12;
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    
    var time = h + ":" + m;
    var pD = `${month[mo]}, ${da}, ${year} (${days[day - 1]})`
    document.getElementById("main-right-top-clock-text").innerText = time;
    document.getElementById("main-right-top-clock-text").textContent = time;
    
    document.getElementById("main-right-top-date-text").innerText = pD;
    document.getElementById("main-right-top-date-text").textContent = pD;

    setTimeout(showTime, 1000);
}

showTime();

var pe = "체육1-2-권창섭-1";
var cs = "정보1-3-김호숙-7";
var math = "수학1-7-김승호-3";
var eng = "영어3-1-Casey Stojak-4";
var kor = "국어1-2-장경혜-0";
var chem = "화학및실험1-3-조철희-2";
var mus = "음악-2-윤여민-5";
var his = "한국사의이해-2-강재순-6";
var non = "공강";

var table = [
    [non, pe, cs, cs, math, non, chem, eng],
    [non, math, non, non, kor, kor, eng, non],
    [non, non, chem, chem, his, his, non, non],
    [mus, mus, math, math, non, chem, non, non],
    [non, chem, non, non, non, math, non, eng]
]

var colors = [
    [252, 101, 101, 0.2], // red - 0
    [250, 255, 62, 0.3], // yellow - 1
    [132, 255, 96, 0.2], // green - 2
    [96, 255, 243, 0.2], // sky - 3
    [127, 96, 255, 0.2], // purple - 4
    [255, 96, 224, 0.2], // pink - 5
    [30, 108, 54, 0.41], // dark green - 6
    [255, 255, 255, 0.2] // white - 7
]

function createTable() {
    var body = document.getElementById("main-center-table-div");
    var days = ["MON", "TUE", "WED", "THU", "FRI"];
    for (var i = 0; i < 9; i++) {
        var row = document.createElement("div");
        row.id = `table-row${i}`;
        row.style = "display: flex; flex-direction: row;"
        for (var j = 0; j < 6; j++) {
            var div = document.createElement("div");
            div.id = `table-row${i}-col${j}`;
            if (j == 0) {
                if (i == 0) {
                    div.style = "width: 5vw; height: 4vh; border: 0px solid black";
                }
                else {
                    div.style = "width: 5vw; height: 9vh; border: 0px solid black; text-align: center; font-size: 2.4vh";
                    div.innerText = `${i}`;
                }
            } 
            else {
                if (i == 0) {
                    div.style = "width: 8.5vw; height: 4vh; border: 0px solid black; text-align: center; font-size: 2.4vh;";
                    div.innerText = `${days[j-1]}`;
                }
                else {
                    div.style = "width: 8.5vw; height: 9vh; border: 0px solid black";
                }
            }
            row.appendChild(div);
        }
        body.appendChild(row);
    }
}

function fillTable() {
    for (var i = 0; i < table.length; i++) {
        for (var j = 0; j < table[0].length; j++) {
            if (table[i][j] != non) {
                splitStr = table[i][j].split("-");
                strA = `${splitStr[0]}, ${splitStr[1]}분반`;
                strB = `${splitStr[2]} T`;
                var div = document.createElement("div");
                div.classList.add("timetable-box");
                var text = document.createElement("p");
                text.classList.add("timetable-text");
                text.innerHTML = `${strA}<br>${strB}`;
                div.appendChild(text);
                div.style = `background-color: rgba(${colors[parseInt(splitStr[3])][0]}, ${colors[parseInt(splitStr[3])][1]}, ${colors[parseInt(splitStr[3])][2]}, ${colors[parseInt(splitStr[3])][3]})`;
                document.getElementById(`table-row${j+1}-col${i+1}`).appendChild(div);
            }
        }
    }
}

createTable();
// fillTable();


function addReminder() {
    var text = document.getElementById("main-right-center-reminder-input").value;
    var div = document.createElement("div");
    div.innerText = `→ ${text}`;
    div.classList.add("main-right-center-reminder");
    document.getElementById("main-right-center-reminder-container-div").appendChild(div);
    document.getElementById("main-right-center-reminder-input").value = ""
}

for (var i = 0; i < document.getElementsByClassName("main-right-center-reminder").length; i++) {
    document.getElementsByClassName("main-right-center-reminder")[i].addEventListener("click", remReminder);
}

function remReminder() {
    alert("removed.");
}

let strList2 = ['수학1_1', '수학1_2', '수학1_3', '수학1_4', '수학1_5', '수학1_6', '수학1_7', '수학1_8', '수학1_9', '정보과학1_1', '정보과학1_2', '정보과학1_3', '정보과학1_4', '정보과학1_5', '정보과학1_6', '정보과학1_7', '정보과학1_8', '한국사의이해_1', '한국사의이해_2', '한국사의이해_3', '한국사의이해_4', '물리학및실험1_1', '물리학및실험1_2', '물리학및실험1_3', '물리학및실험1_4', '물리학및실험1_5', '화학및실험_1', '화학및실험_2', '화학및실험_3', '화학및실험_4', '화학및실험_5', '생물학및실험_1', '생물학및실험_2', '생물학및실험_3', '생물학및실험_4', '생물학및실험_5', '국어1_1', '국어1_2', '국어1_3', '국어1_4', '국어1_5', '국어1_6', '국어1_7', '국어1_8', '영어I_1', '영어I_2', '영어I_3', '영어I_4', '영어I_5', '영어I_6', '영어I_7', '영어I_8', '음악_1', '음악_2', '음악_3', '음악_4', '미술_1', '미술_2', '미술_3', '미술_4', '체육1_1', '체육1_2', '체육1_3', '체육1_4', '체육1_5', '체육1_6', '체육1_7', '체육1_8', '기초수학_1', '물리학기초I_1', '화학및실험I_1', '생물학및실험I_1', '한국어1_1', '세계사_1', '수학2_1', '수학2_2', '미적분학1_1', '미적분학1_2', '미적분학1_3', '미적분학1_4', '미적분학1_5', '미적분학1_6', '미적분학1_7', '수학3_1', '수학3_2', '정보과학3_1', '정보과학3_2', '정보과학3_3', '프로그래밍과문제해결_1', '자료구조_1', '자료구조_2', '일반물리학1_1', '일반물리학실험1_1', '일반물리학실험1_2', '일반물리학실험1_3', '일반물리학실험2_1', '일반물리학실험2_2', '현대물리학개론_1', '물리학세미나_1', '물리학세미나_2', '물리학특강(전자회로의이해와응용)_1', '물리학특강(전자회로의이해와응용)_2', '천체관측의기초_1', '천체관측의기초_2', '일반천문학_1', '일반천문학_2', '일반천문학실험_1', '일반천문학실험_2', '일반지구과학_1', '일반지구과학_2', '일반지구과학_3', '일반지구과학실험_1', '일반지구과학실험_2', '일반지구과학실험_3', '생활속의화학_1', '일반화학1_1', '일반화학1_2', '일반화학1_3', '일반화학실험1_1', '일반화학실험1_2', '일반화학실험1_3', '일반화학실험1_4', '일반화학실험2_1', '일반화학2_1', '화학과에너지_1', '기초유기화학_1', '기초유기화학_2', '기초분석화학_1', '나노화학의입문_1', '나노화학의입문_2', '일반생물학1_1', '일반생물학1_2', '일반생물학실험_1', '일반생물학실험_2', '일반생물학2_1', '감염과면역_1', '기초뇌과학_1', '생물학세미나_1', '문학_1', '문학_2', '문학_3', '문학_4', '논리와글쓰기_1', '논리와글쓰기_2', '논리와글쓰기_3', '논리와글쓰기_4', '세계사의이해_1', '세계사의이해_2', '세계사의이해_3', '세계사의이해_4', '정치와경제_1', '정치와경제_2', '정치와경제_3', '정치와경제_4', '철학_1', '철학_2', '철학_3', '철학_4', '영어청해와회화_1', '영어청해와회화_2', '영어청해와회화_3', '영어청해와회화_4', '영어청해와회화_5', '영어독해와작문_1', '영어독해와작문_2', '영어독해와작문_3', '영어독해와작문_4', '체육3_1', '체육3_2', '체육3_3', '체육3_4', '체육3_5', '체육3_6', '체육3_7', '체육3_8', '생활음악_1', '생활음악_2', '생활음악_3', '생활미술_1', '생활미술_2', '생활미술_3', '생활미술_4', '전기화학에너지시스템_1', '전기화학에너지시스템_2', '전기화학에너지시스템_3', '수학의활용_1', '수학의활용_2', '수학의활용_3', '미적분학2_1', '미적분학2_2', '미적분학2_3', '미적분학3_1', '미분방정식_1', '확률및통계_1', '확률및통계_2', '수학특강(논리및집합)_1', '수학특강(논리및집합)_2', '알고리즘_1', '알고리즘_2', '소통과화법_1', '소통과화법_2', '소통과화법_3', '문학과사회_1', '문학과사회_2', '시사영어_1', '시사영어_2', '시사영어_3', '시사영어_4', '시사영어_5', '일본언어와문화_1', '중국언어와문화_1', '스페인언어와문화_1', '스페인언어와문화_2', '스페인언어와문화_3', '스페인언어와문화_4', '스페인언어와문화_5', '생활체육1_1', '생활체육1_2', '생활체육1_3', '생활체육1_4', '생활체육1_5', '생활체육1_6', '생활체육1_7', '생활체육1_8', '수학적모델링_1', '수학적모델링_2', '수학적모델링_3', '도시계획과환경_1', '우주생물학_1', '우주생물학_2', '과학의역사와철학_1', '과학의역사와철학_2', '과학의역사와철학_3', '과학기술과사회_1', '기초정수론(EC)_1', '기초정수론(EC)_2', '선형대수(EC)_1', '선형대수(EC)_2', '미분방정식(EC)_1', '미분방정식(EC)_2', '미분방정식(EC)_3', '미적분학3(EC)_1', '기초물리학(EC)_1', '일반물리학1(EC)_1', '일반물리학1(EC)_2', '일반물리학2(EC)_1', '일반물리학2(EC)_2', '정보과학1_1', '물리학및실험I_1', '한국어Ⅲ_1', '정치경제의이해_1', 'TOPIK한국어_1', '창의적문제해결기법_1', '생물학특강(생화학)_1', '화학및실험1_1', '생물학및실험1_1', '탐구물리_1', '기초전자기학_1', '심화영어_1', '영어III_1', '영어III_2'];

let strList = ['수학1(1)_1', '수학1(1)_2', '수학1(1)_3', '수학1(1)_4', '수학1(1)_5', '수학1(1)_6', '수학1(1)_7', '수학1(1)_8', '수학1(1)_9', '정보과학1(1)_1', '정보과학1(1)_2', '정보과학1(1)_3', '정보과학1(1)_4', '정보과학1(1)_5', '정보과학1(1)_6', '정보과학1(1)_7', '정보과학1(1)_8', '한국사의이해(1)_1', '한국사의이해(1)_2', '한국사의이해(1)_3', '한국사의이해(1)_4', '물리학및실험1(1)_1', '물리학및실험1(1)_2', '물리학및실험1(1)_3', '물리학및실험1(1)_4', '물리학및실험1(1)_5', '화학및실험(1)_1', '화학및실험(1)_2', '화학및실험(1)_3', '화학및실험(1)_4', '화학및실험(1)_5', '생물학및실험(1)_1', '생물학및실험(1)_2', '생물학및실험(1)_3', '생물학및실험(1)_4', '생물학및실험(1)_5', '국어1(1)_1', '국어1(1)_2', '국어1(1)_3', '국어1(1)_4', '국어1(1)_5', '국어1(1)_6', '국어1(1)_7', '국어1(1)_8', '영어I(1)_1', '영어I(1)_2', '영어I(1)_3', '영어I(1)_4', '영어I(1)_5', '영어I(1)_6', '영어I(1)_7', '영어I(1)_8', '음악(1)_1', '음악(1)_2', '음악(1)_3', '음악(1)_4', '미술(1)_1', '미술(1)_2', '미술(1)_3', '미술(1)_4', '체육1(1)_1', '체육1(1)_2', '체육1(1)_3', '체육1(1)_4', '체육1(1)_5', '체육1(1)_6', '체육1(1)_7', '체육1(1)_8', '기초수학(1)_1', '물리학기초I(1)_1', '화학및실험I(1)_1', '생물학및실험I(1)_1', '한국어1(1)_1', '세계사(1)_1', '수학2(2)_1', '수학2(2)_2', '미적분학1(2)_1', '미적분학1(2)_2', '미적분학1(2)_3', '미적분학1(2)_4', '미적분학1(2)_5', '미적분학1(2)_6', '미적분학1(2)_7', '수학3(2)_1', '수학3(2)_2', '정보과학3(2)_1', '정보과학3(2)_2', '정보과학3(2)_3', '프로그래밍과문제해결(2)_1', '자료구조(2)_1', '자료구조(2)_2', '일반물리학1(2)_1', '일반물리학실험1(2)_1', '일반물리학실험1(2)_2', '일반물리학실험1(2)_3', '일반물리학실험2(2)_1', '일반물리학실험2(2)_2', '현대물리학개론(2)_1', '물리학세미나(2)_1', '물리학세미나(2)_2', '물리학특강(전자회로의이해와응용)(2)_1', '물리학특강(전자회로의이해와응용)(2)_2', '천체관측의기초(2)_1', '천체관측의기초(2)_2', '일반천문학(2)_1', '일반천문학(2)_2', '일반천문학실험(2)_1', '일반천문학실험(2)_2', '일반지구과학(2)_1', '일반지구과학(2)_2', '일반지구과학(2)_3', '일반지구과학실험(2)_1', '일반지구과학실험(2)_2', '일반지구과학실험(2)_3', '생활속의화학(2)_1', '일반화학1(2)_1', '일반화학1(2)_2', '일반화학1(2)_3', '일반화학실험1(2)_1', '일반화학실험1(2)_2', '일반화학실험1(2)_3', '일반화학실험1(2)_4', '일반화학실험2(2)_1', '일반화학2(2)_1', '화학과에너지(2)_1', '기초유기화학(2)_1', '기초유기화학(2)_2', '기초분석화학(2)_1', '나노화학의입문(2)_1', '나노화학의입문(2)_2', '일반생물학1(2)_1', '일반생물학1(2)_2', '일반생물학실험(2)_1', '일반생물학실험(2)_2', '일반생물학2(2)_1', '감염과면역(2)_1', '기초뇌과학(2)_1', '생물학세미나(2)_1', '문학(2)_1', '문학(2)_2', '문학(2)_3', '문학(2)_4', '논리와글쓰기(2)_1', '논리와글쓰기(2)_2', '논리와글쓰기(2)_3', '논리와글쓰기(2)_4', '세계사의이해(2)_1', '세계사의이해(2)_2', '세계사의이해(2)_3', '세계사의이해(2)_4', '정치와경제(2)_1', '정치와경제(2)_2', '정치와경제(2)_3', '정치와경제(2)_4', '철학(2)_1', '철학(2)_2', '철학(2)_3', '철학(2)_4', '영어청해와회화(2)_1', '영어청해와회화(2)_2', '영어청해와회화(2)_3', '영어청해와회화(2)_4', '영어청해와회화(2)_5', '영어독해와작문(2)_1', '영어독해와작문(2)_2', '영어독해와작문(2)_3', '영어독해와작문(2)_4', '체육3(2)_1', '체육3(2)_2', '체육3(2)_3', '체육3(2)_4', '체육3(2)_5', '체육3(2)_6', '체육3(2)_7', '체육3(2)_8', '생활음악(2)_1', '생활음악(2)_2', '생활음악(2)_3', '생활미술(2)_1', '생활미술(2)_2', '생활미술(2)_3', '생활미술(2)_4', '전기화학에너지시스템(2)_1', '전기화학에너지시스템(2)_2', '전기화학에너지시스템(2)_3', '수학의활용(3)_1', '수학의활용(3)_2', '수학의활용(3)_3', '미적분학2(3)_1', '미적분학2(3)_2', '미적분학2(3)_3', '미적분학3(3)_1', '미분방정식(3)_1', '확률및통계(3)_1', '확률및통계(3)_2', '수학특강(논리및집합)(3)_1', '수학특강(논리및집합)(3)_2', '알고리즘(3)_1', '알고리즘(3)_2', '소통과화법(3)_1', '소통과화법(3)_2', '소통과화법(3)_3', '문학과사회(3)_1', '문학과사회(3)_2', '시사영어(3)_1', '시사영어(3)_2', '시사영어(3)_3', '시사영어(3)_4', '시사영어(3)_5', '일본언어와문화(3)_1', '중국언어와문화(3)_1', '스페인언어와문화(3)_1', '스페인언어와문화(3)_2', '스페인언어와문화(3)_3', '스페인언어와문화(3)_4', '스페인언어와문화(3)_5', '생활체육1(3)_1', '생활체육1(3)_2', '생활체육1(3)_3', '생활체육1(3)_4', '생활체육1(3)_5', '생활체육1(3)_6', '생활체육1(3)_7', '생활체육1(3)_8', '수학적모델링(3)_1', '수학적모델링(3)_2', '수학적모델링(3)_3', '도시계획과환경(3)_1', '우주생물학(3)_1', '우주생물학(3)_2', '과학의역사와철학(3)_1', '과학의역사와철학(3)_2', '과학의역사와철학(3)_3', '과학기술과사회(3)_1', '기초정수론(EC)(3)_1', '기초정수론(EC)(3)_2', '선형대수(EC)(3)_1', '선형대수(EC)(3)_2', '미분방정식(EC)(3)_1', '미분방정식(EC)(3)_2', '미분방정식(EC)(3)_3', '미적분학3(EC)(3)_1', '기초물리학(EC)(3)_1', '일반물리학1(EC)(3)_1', '일반물리학1(EC)(3)_2', '일반물리학2(EC)(3)_1', '일반물리학2(EC)(3)_2', '정보과학1(2)_1', '물리학및실험I(2)_1', '한국어Ⅲ(2)_1', '정치경제의이해(2)_1', 'TOPIK한국어(3)_1', '창의적문제해결기법(3)_1', '생물학특강(생화학)(3)_1', '화학및실험1(2)_1', '생물학및실험1(2)_1', '탐구물리(2)_1', '기초전자기학(3)_1', '심화영어(3)_1', '영어III(2)_1', '영어III(2)_2'];
$.getJSON("/xlsx/data.json", function(json) {
    console.log(json);

    idList = []
    for (var i = 0; i < json.length; i++) {
        idList.push(json[i]["과목명(학년)"]);
    }

    localStorage.setItem("idList", idList);
});

$.getJSON("/xlsx/teacher.json", function(json) {
    console.log(json);

    var newArr = [];

    for (var i = 0; i < json.length; i++) {
        newArr.push(`${json[i]["과목명"]}-${json[i]["분반"]}-${json[i]["선생님"]}-${json[i]["요일"]}`);
    }

    localStorage.setItem("subjectList", newArr);
});


function createMyTime(id) {
    idList = localStorage.getItem("idList");
    idList = idList.split(",");
    tf = false;
    for (var i = 0; i < idList.length; i++) {
        if (id == idList[i]) {
            tf = true;
            var idN = i;
            console.log(idN);
        }
    }
    if (tf == true) {
        var data = "";
        $.getJSON("/xlsx/data.json", function(json) {
            var subjectList = localStorage.getItem("subjectList");
            subjectList = subjectList.split(",");

            data = json[idN];
            var name = data["이름"];
            var stuId = data["과목명(학년)"];
            document.getElementById("main-left-top-profile-name-text").innerHTML = name;
            document.getElementById("main-left-top-profile-credential-job-text").innerHTML = `Student, ${stuId}`;
            document.getElementById("main-left-top-profile-credential-email-text").innerHTML = `${stuId}@ksa.hs.kr`;


            console.log(data);
            var k;
            var stuArr = [];
            for (var i = 0; i < strList.length; i++) {
                if (data[`${strList[i]}`] == 1) {
                    for (var j = 0; j < subjectList.length; j++) {
                        k = subjectList[j].split("-");
                        if (strList2[i] == `${k[0]}_${k[1]}`) {
                            stuArr.push(k);
                            console.log("ok");
                        }
                    }
                }
            }
            console.log(stuArr);

            for (var i = 0; i < stuArr.length; i++) {
                for (var j = 0; j < stuArr[i][3].split("|").length; j++) {

                    strA = `${stuArr[i][0]}, ${stuArr[i][1]}분반`;
                    strB = `${stuArr[i][2]} T`;
                    var div = document.createElement("div");
                    div.classList.add("timetable-box");
                    var text = document.createElement("p");
                    text.classList.add("timetable-text");
                    text.innerHTML = `${strA}<br>${strB}`;
                    div.appendChild(text);
                    div.style = `background-color: rgba( 255, 255, 255, 0.2 )`;
                    for (var m = 0; m < 5; m++) {
                        var da = ["월", "화", "수", "목", "금"];
                        if (da[m] == stuArr[i][3].split("|")[j][0]) {
                            var de = m;
                        }
                    }
                    console.log(`table-row${parseInt(stuArr[i][3].split("|")[j][1])+1}-col${de+1}`);
                    try {
                        document.getElementById(`table-row${parseInt(stuArr[i][3].split("|")[j][1])}-col${de+1}`).appendChild(div);
                    }
                    catch (error) {
                        console.error(error);
                    }
                }
            }
        });

    }
    else {
        alert("학번을 다시 확인해 주세요.");
    }
}


function render() {
    document.getElementById("main-left-top-profile-div").style = "visibility: visible;";
    document.getElementById("main-left-top-profile-alt-title").style = "visibility: hidden;";
    const boxes = document.querySelectorAll('.timetable-box');
    boxes.forEach(box => {
    box.remove();
    });
    var a = document.getElementById("main-right-bottom-container-input-1").value;
    createMyTime(a);

    localStorage.setItem("id", `${a}`);
}

if (localStorage.getItem("id") != undefined) {
    createMyTime(localStorage.getItem("id"));
    document.getElementById("main-left-top-profile-div").style = "visibility: visible;";
    document.getElementById("main-left-top-profile-alt-title").style = "visibility: hidden;";
}

else {
    document.getElementById("main-left-top-profile-div").style = "visibility: hidden;";
    document.getElementById("main-left-top-profile-alt-title").style = "visibility: visible;";
}