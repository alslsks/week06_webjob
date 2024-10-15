const scores = [  
    { number: 'N1047', chinese: 95, math: 79, english: 98 },  
    { number: 'N1176', chinese: 84, math: 72, english: 76 },  
    { number: 'N1087', chinese: 82, math: 99, english: 97 },  
    { number: 'N1808', chinese: 77, math: 89, english: 70 },  
    { number: 'N1365', chinese: 93, math: 79, english: 71 },  
    { number: 'N1416', chinese: 90, math: 91, english: 91 },  
    { number: 'N1048', chinese: 74, math: 89, english: 85 },  
    { number: 'N1126', chinese: 74, math: 82, english: 85 },  
    { number: 'N1386', chinese: 77, math: 77, english: 85 },  
    { number: 'N1869', chinese: 90, math: 74, english: 99 }  
];  

function calculateTotalScores() {  
    const output = document.getElementById('output');  
    output.innerHTML = ''; // 清空之前的输出  

    scores.forEach(m => m.totalScore = m.chinese + m.math + m.english);  
    scores.sort((a, b) => b.totalScore - a.totalScore);  

    scores.forEach(m => {  
        output.innerHTML += `number: ${m.number}, total score: ${m.totalScore}\n`;  
    });  
}  

function calculateTopThree(subject) {  
    const output = document.getElementById('output');  
    output.innerHTML = ''; // 清空之前的输出  

    scores.sort((a, b) => b[subject] - a[subject])  
        .slice(0, 3)  
        .forEach(m => {  
            output.innerHTML += `number: ${m.number}, ${subject}: ${m[subject]}\n`;  
        });  

    console.log(`${subject}前三名：`);  
    console.log(output.innerHTML); // 仅用于调试，实际运行时可以移除  
}  