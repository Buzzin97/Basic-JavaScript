const quotes = [
    {
        quote: "산다는것 그것은 치열한 전투이다.",
        author:"로망로랑",
    },
    
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author:"사무엘 존슨",
    },
    
    {
        quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
        author:"파울로 코엘료",
    },
    
    {
        quote: "진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 해",
        author:"찰리 채플린",
    },
    
    {
        quote: "직업에서 행복을 찾아라, 아니면 행복이 무엇인지 절대 모를 것이다.",
        author:"엘버트 하버드",
    },
    
    {
        quote: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
        author:"엘사 맥스웰",
    },
    
    {
        quote: "먼저 핀 꽃은 먼저진다. 남보다 먼저 공을 세우려고 조급히 서둘것이 아니다.",
        author:"채근담",
    },
    
    {
        quote: "행복한 삶을 살기위해 필요한 것은 거의 없다.",
        author:"마르쿠스 아우렐리우스",
    },
    
    {
        quote: "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다.",
        author:"제임스 오펜하임",
    },
    
    {
        quote: "모든 인생은 실험이다. 더 많이 실험할수록 더 나아진다.",
        author:"랄프 왈도 에머슨",
    },
    
    
];

const quote = document.querySelector("#quote span:first-child"); 
const author = document.querySelector("#quote span:last-child"); 

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;