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
let stutas = false

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



async function showOneLine(element){
    //重置各綫路按鈕
    reseetingInput();
    //移除所有到站時間通知div
    const elements = document.querySelectorAll('.sta_box');
    elements.forEach(element => {
        element.remove();
      });
    //改logo顔色
    let clickColor = line[element.text].color
    const MTR = document.querySelector('.MTR');
    MTR.style.color = clickColor
    //修改點擊的按鈕顔色
    element.style.background = clickColor
    element.style.color = "#ffffff"

    console.log('点击了',element.value,element.text)
    let TargetLine = element.text
    console.log(line[TargetLine])
    let allSta = line[TargetLine].sta
    for (index in allSta){
        console.log(allSta[index].code,allSta[index].name)
        let sta = allSta[index].code
        const api = `https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php?line=${TargetLine}&sta=${sta}&lang=TC`;
        const res = await fetch(api)
        jsData = await res.json()
        document.querySelector('.NewTime').textContent ='最新更新時間為：'+String(jsData.sys_time) 
        // console.log( jsData.sys_time)
        let direction = Object.keys(jsData.data)[0]
        let oneData = jsData.data[direction].UP
        console.log(oneData,'oneData')
        let time =  oneData[0].time
        let plat =  oneData[0].plat
        console.log(time,plat)
        const date = new Date(time.replace(' ', 'T') + 'Z'); 
        const hours = String(date.getUTCHours()).padStart(2, '0'); 
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        // document.removeChild('.sta_box')
        const staBox = document.createElement('div');
        staBox.className = 'sta_box';
        staBox.style.background = clickColor
        const stationInfo = [`${allSta[index].name}`, `${hours}:${minutes}`, `月臺：${plat}`, ``, ``];
        stationInfo.forEach(info => {
            const p = document.createElement('p');
            p.textContent = info;
            staBox.appendChild(p);
        });
        //更新時間
        document.querySelector('.sta_max_box').appendChild(staBox);
        // break
    }

    
}
ready()
