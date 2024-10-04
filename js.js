const line = {
    KTL: {
        text: "觀塘線",
        color: "#7ed957",
        sta: [
            { code: "WHA", name: "Whampoa" },
            { code: "HOM", name: "Ho Man Tin" },
            { code: "YMT", name: "Yau Ma Tei" },
            { code: "MOK", name: "Mong Kok" },
            { code: "PRE", name: "Prince Edward" },
            { code: "SKM", name: "Shek Kip Mei" },
            { code: "KOT", name: "Kowloon Tong" },
            { code: "LOF", name: "Lok Fu" },
            { code: "WTS", name: "Wong Tai Sin" },
            { code: "DIH", name: "Diamond Hill" },
            { code: "CHH", name: "Choi Hung" },
            { code: "KOB", name: "Kowloon Bay" },
            { code: "NTK", name: "Ngau Tau Kok" },
            { code: "KWT", name: "Kwun Tong" },
            { code: "LAT", name: "Lam Tin" },
            { code: "YAT", name: "Yau Tong" },
            { code: "TIK", name: "Tiu Keng Leng" },
        ],
    },
    ISL: {
        text: "港島線",
        color: "#004aad",
        sta: [
            { code: "KET", name: "Kennedy Town" },
            { code: "HKU", name: "HKU" },
            { code: "SYP", name: "Sai Ying Pun" },
            { code: "SHW", name: "Sheung Wan" },
            { code: "CEN", name: "Central" },
            { code: "ADM", name: "Admiralty" },
            { code: "WAC", name: "Wan Chai" },
            { code: "CAB", name: "Causeway Bay" },
            { code: "TIH", name: "Tin Hau" },
            { code: "FOH", name: "Fortress Hill" },
            { code: "NOP", name: "North Point" },
            { code: "QUB", name: "Quarry Bay" },
            { code: "TAK", name: "Tai Koo" },
            { code: "SWH", name: "Sai Wan Ho" },
            { code: "SKW", name: "Shau Kei Wan" },
            { code: "HFC", name: "Heng Fa Chuen" },
            { code: "CHW", name: "Chai Wan" },
        ],
    },
    TWL: {
        text: "荃灣線",
        color: "#ff3131",
        sta: [
            { code: "CEN", name: "Central" },
            { code: "ADM", name: "Admiralty" },
            { code: "TST", name: "Tsim Sha Tsui" },
            { code: "JOR", name: "Jordan" },
            { code: "YMT", name: "Yau Ma Tei" },
            { code: "MOK", name: "Mong Kok" },
            { code: "PRE", name: "Price Edward" },
            { code: "SSP", name: "Sham Shui Po" },
            { code: "CSW", name: "Cheung Sha Wan" },
            { code: "LCK", name: "Lai Chi Kok" },
            { code: "MEF", name: "Mei Foo" },
            { code: "LAK", name: "Lai King" },
            { code: "KWF", name: "Kwai Fong" },
            { code: "KWH", name: "Kwai Hing" },
            { code: "TWH", name: "Tai Wo Hau" },
            { code: "TSW", name: "Tsuen Wan" },
        ],
    },
    SIL: {
        text: "南港島線",
        color: "#cbcd09",
        sta: [
            { code: "ADM", name: "Admiralty" },
            { code: "OCP", name: "Ocean Park" },
            { code: "WCH", name: "Wong Chuk Hang" },
            { code: "LET", name: "Lei Tung" },
            { code: "SOH", name: "South Horizons" },
        ],
    },
    TCL: {
        text: "東涌線",
        color: "#f6943d",
        sta: [
            { code: "HOK", name: "Hong Kong" },
            { code: "KOW", name: "Kowloon" },
            { code: "OLY", name: "Olympic" },
            { code: "NAC", name: "Nam Cheong" },
            { code: "LAK", name: "Lai King" },
            { code: "TSY", name: "Tsing Yi" },
            { code: "SUN", name: "Sunny Bay" },
            { code: "TUC", name: "Tung Chung" },
        ],
    },
    EAL: {
        text: "東鐵線",
        color: "#5ce1e6",
        sta: [
            { code: "ADM", name: "Admiralty" },
            { code: "EXC", name: "Exhibition Centre" },
            { code: "HUH", name: "Hung Hom" },
            { code: "MKK", name: "Mong Kok East" },
            { code: "KOT", name: "Kowloon Tong" },
            { code: "TAW", name: "Tai Wai" },
            { code: "SHT", name: "Sha Tin" },
            { code: "FOT", name: "Fo Tan" },
            { code: "RAC", name: "Racecourse" },
            { code: "UNI", name: "University" },
            { code: "TAP", name: "Tai Po Market" },
            { code: "TWO", name: "Tai Wo" },
            { code: "FAN", name: "Fanling" },
            { code: "SHS", name: "Sheung Shui" },
            { code: "LOW", name: "Lo Wu" },
            { code: "LMC", name: "Lok Ma Chau" },
        ],
    },
    TML: {
        text: "屯馬線",
        color: "#8d6019",
        sta: [
            { code: "WKS", name: "Wu Kai Sha" },
            { code: "MOS", name: "Ma On Shan" },
            { code: "HEO", name: "Heng On" },
            { code: "TSH", name: "Tai Shui Hang" },
            { code: "SHM", name: "Shek Mun" },
            { code: "CIO", name: "City One" },
            { code: "STW", name: "Sha Tin Wai" },
            { code: "CKT", name: "Che Kung Temple" },
            { code: "TAW", name: "Tai Wai" },
            { code: "HIK", name: "Hin Keng" },
            { code: "DIH", name: "Diamond Hill" },
            { code: "KAT", name: "Kai Tak" },
            { code: "SUW", name: "Sung Wong Toi" },
            { code: "TKW", name: "To Kwa Wan" },
            { code: "HOM", name: "Ho Man Tin" },
            { code: "HUH", name: "Hung Hom" },
            { code: "ETS", name: "East Tsim Sha Tsui" },
            { code: "AUS", name: "Austin" },
            { code: "NAC", name: "Nam Cheong" },
            { code: "MEF", name: "Mei Foo" },
            { code: "TWW", name: "Tsuen Wan West" },
            { code: "KSR", name: "Kam Sheung Road" },
            { code: "YUL", name: "Yuen Long" },
            { code: "LOP", name: "Long Ping" },
            { code: "TIS", name: "Tin Shui Wai" },
            { code: "SIH", name: "Siu Hong" },
            { code: "TUM", name: "Tuen Mun" },
        ],
    },
    AEL: {
        text: "機場快線",
        color: "#3d9ea0",
        sta: [
            { code: "HOK", name: "Hong Kong" },
            { code: "KOW", name: "Kowloon" },
            { code: "TSY", name: "Tsing Yi" },
            { code: "AIR", name: "Airport" },
            { code: "AWE", name: "AsiaWorld Expo" },
        ],
    },
    TKL: {
        text: "將軍澳線",
        color: "#8d45ab",
        sta: [
            { code: "NOP", name: "North Point" },
            { code: "QUB", name: "Quarry Bay" },
            { code: "YAT", name: "Yau Tong" },
            { code: "TIK", name: "Tiu Keng Leng" },
            { code: "TKO", name: "Tseung Kwan O" },
            { code: "LHP", name: "LOHAS Park" },
            { code: "HAH", name: "Hang Hau" },
            { code: "POA", name: "Po Lam" },
        ],
    },
};
const locations = {
    "Whampoa": "黃埔",
    "Ho Man Tin": "何文田",
    "Yau Ma Tei": "油麻地",
    "Mong Kok": "旺角",
    "Price Edward": "太子",
    "Prince Edward": "太子",
    "Edward": "太子",
    "Shek Kip Mei": "石碣尾",
    "Kowloon Tong": "九龍塘",
    "Lok Fu": "樂富",
    "Wong Tai Sin": "黃大仙",
    "Diamond Hill": "鑽石山",
    "Choi Hung": "彩虹",
    "Kowloon Bay": "九龍灣",
    "Ngau Tau Kok": "牛頭角",
    "Kwun Tong": "觀塘",
    "Lam Tin": "藍田",
    "Yau Tong": "游塘",
    "Tiu Keng Leng": "調景嶺",
    "Kennedy Town": "堅尼地城",
    "HKU": "香港大學",
    "Sai Ying Pun": "西營盤",
    "Sheung Wan": "上環",
    "Central": "中環",
    "Admiralty": "金鐘",
    "Wan Chai": "灣仔",
    "Causeway Bay": "銅鑼灣",
    "Tin Hau": "天后",
    "Fortress Hill": "炮台山",
    "North Point": "北角",
    "Quarry Bay": "鰂魚涌",
    "Tai Koo": "太古",
    "Sai Wan Ho": "西灣河",
    "Shau Kei Wan": "筲箕灣",
    "Heng Fa Chuen": "橫頭磡",
    "Chai Wan": "柴灣",
    "Tsim Sha Tsui": "尖沙咀",
    "Jordan": "佐敦",
    "Sham Shui Po": "深水埗",
    "Cheung Sha Wan": "長沙灣",
    "Lai Chi Kok": "荔枝角",
    "Mei Foo": "美孚",
    "Lai King": "荔景",
    "Kwai Fong": "葵芳",
    "Kwai Hing": "葵興",
    "Tai Wo Hau": "大窩口",
    "Tsuen Wan": "荃灣",
    "Ocean Park": "海洋公園",
    "Wong Chuk Hang": "黃竹坑",
    "Lei Tung": "利東",
    "South Horizons": "海怡半島",
    "Hong Kong": "香港",
    "Kowloon": "九龍",
    "Olympic": "奧運",
    "Nam Cheong": "南昌",
    "Tsing Yi": "青衣",
    "Sunny Bay": "欣澳",
    "Tung Chung": "東涌",
    "Exhibition Centre": "會展中心",
    "Hung Hom": "紅磡",
    "Mong Kok East": "旺角東",
    "Tai Wai": "大圍",
    "Sha Tin": "沙田",
    "Fo Tan": "火炭",
    "Racecourse": "賽馬場",
    "University": "大學",
    "Tai Po Market": "大埔墟",
    "Tai Wo": "大窩",
    "Fanling": "粉嶺",
    "Sheung Shui": "上水",
    "Lo Wu": "羅湖",
    "Lok Ma Chau": "落馬洲",
    "Wu Kai Sha": "烏溪沙",
    "Ma On Shan": "馬鞍山",
    "Heng On": "恆安",
    "Tai Shui Hang": "太水坑",
    "Shek Mun": "石門",
    "City One": "第一城",
    "Sha Tin Wai": "沙田圍",
    "Che Kung Temple": "車公廟",
    "Hin Keng": "顯徑",
    "Kai Tak": "啟德",
    "Sung Wong Toi": "宋皇台",
    "To Kwa Wan": "土瓜灣",
    "East Tsim Sha Tsui": "尖東",
    "Austin": "柯士甸",
    "Tsuen Wan West": "荃灣西",
    "Kam Sheung Road": "感相道",
    "Yuen Long": "元朗",
    "Long Ping": "朗屏",
    "Tin Shui Wai": "天水圍",
    "Siu Hong": "勺景",
    "Tuen Mun": "屯門",
    "Airport": "機場",
    "AsiaWorld Expo": "亞洲博覽館",
    "Tseung Kwan O": "將軍澳",
    "LOHAS Park": "康城",
    "Hang Hau": "坑口",
    "Po Lam": "寶琳"
};
let numList = {
    "1":"①",
    "2":"②",
    "3":"③",
    "4":"④",
    "5":"⑤",
    "6":"⑥",
    "7":"⑦",
    "8":"⑧",
    "9":"⑨",
    "10":"⑩",
}


function reseetingInput(){
    const elements = document.querySelectorAll('input');
    elements.forEach(element => {
        let code = element.text
        element.style.color = line[code].color;
        element.style.background = 'transparent';
      });
}
function ready(){
    const lineBox = document.querySelector('.line_box');
    for (let i in line){
        const newInput = document.createElement('input');
        newInput.type = 'button';
        newInput.value = line[i].text;
        newInput.text = i
        newInput.style.color = line[i].color;
        newInput.onclick = function() {showOneLine(this); };
        newInput.style.border = `3px solid ${line[i].color}`;
        lineBox.appendChild(newInput);
    }
}

function getMins(time){
    let currentTime = new Date();
    let targetTime = new Date(time.replace(' ', 'T'));
    let timeDiff = targetTime.getTime() - currentTime.getTime();
    return Math.floor(timeDiff / (1000 * 60));
}
function getStaMex(){
    
}
let isRunning = false
async function showOneLine(element) {
    if (isRunning) {
        return;
    }
    isRunning = true;

    reseetingInput();

    const elements = document.querySelectorAll('.sta_box');
    elements.forEach(element => {
        element.remove();
    });

    let clickColor = line[element.text].color;
    const MTR = document.querySelector('.MTR');
    MTR.style.color = clickColor;

    element.style.background = clickColor;
    element.style.color = "#ffffff";

    let TargetLine = element.text;
    let allSta = line[TargetLine].sta;

    document.querySelector('.UP_direction').textContent = `往 ${locations[allSta[allSta.length - 1].name]} 方向`;
    document.querySelector('.UP_direction').style.color = clickColor;
    document.querySelector('.DOWN_direction').textContent = `往 ${locations[allSta[0].name]} 方向`;
    document.querySelector('.DOWN_direction').style.color = clickColor;

    stationInfoList = [];
    for (let index in allSta) {
        let sta = allSta[index].code;
        try {
            const api = `https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${TargetLine}&sta=${sta}&lang=TC`;
            const res = await fetch(api);
            let jsData = await res.json();
            document.querySelector('.NewTime').textContent = '最新更新時間為：' + String(jsData.sys_time);
            console.log(jsData)
            let direction = Object.keys(jsData.data)[0];
            const dArry = ['UP', 'DOWN'];
            for (let d in dArry) {
                if (jsData.data[direction].hasOwnProperty(`${dArry[d]}`)) {
                    if (jsData.data[direction][`${dArry[d]}`].length !== 0) {
                        let oneData = jsData.data[direction][dArry[d]];
                        let time1 = oneData[0].time;
                        let time2 = oneData[1].time;
                        let plat1 = numList[oneData[0].plat];
                        let plat2 = numList[oneData[1].plat];
                        let minutesDiff1 = getMins(time1);
                        let minutesDiff2 = getMins(time2);

                        const staBox = document.createElement('div');
                        staBox.className = 'sta_box';
                        staBox.style.background = clickColor;

                        let stationInfo = [`${locations[allSta[index].name]}`];
                        if (minutesDiff1 < 1) {
                            stationInfo.push(`正在進站 ${plat1}`);
                        } else if (minutesDiff1 > 60) {
                            stationInfo.push(time1.split(' ')[1].substring(0, 5));
                        } else {
                            stationInfo.push(`${minutesDiff1}Mins  ${plat1}`);
                        }

                        if (minutesDiff2 < 1) {
                            stationInfo.push(`正在進站 ${plat2}`);
                        } else if (minutesDiff2 > 60) {
                            stationInfo.push(time2.split(' ')[1].substring(0, 5));
                        } else {
                            stationInfo.push(`${minutesDiff2}Mins  ${plat2}`);
                        }

                        stationInfoList.push(stationInfo);
                        stationInfo.forEach(info => {
                            const p = document.createElement('p');
                            p.textContent = info;
                            staBox.appendChild(p);
                        });
                        document.querySelector(`.sta_${dArry[d]}`).appendChild(staBox);
                    } else {
                        if ((dArry[d] == 'UP' && index  == allSta.length-1) || (dArry[d] == 'DOWN' && index  == 0)){

                        }
                        else{
                            const staBox = document.createElement('div');
                            staBox.className = 'sta_box';
                            staBox.style.background = clickColor;
                            let stationInfo = [`${locations[allSta[index].name]}`, '暫無車次'];
                            stationInfo.forEach(info => {
                                const p = document.createElement('p');
                                p.textContent = info;
                                staBox.appendChild(p);
                            });
                            document.querySelector(`.sta_${dArry[d]}`).appendChild(staBox);
                        }
                        
                    }
                }
            }
        } catch (error) {
            console.error("Error fetching or processing data:", error);
        }
    }
    isRunning = false;
}
ready()
