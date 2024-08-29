let userInput = document.getElementById("date")
userInput.max = new Date().toISOString().split("T")[0]
 let message = document.getElementById("message")


function calculateAge() {
    let birthdate = new Date(userInput.value)

    let d1 = birthdate.getDate()
    let m1 = birthdate.getMonth() + 1
    let y1 = birthdate.getFullYear()


    let currentdate = new Date()

    let d2 = currentdate.getDate()
    let m2 = currentdate.getMonth() + 1
    let y2 = currentdate.getFullYear()

    let y3, m3, d3;

    y3 = y2 - y1
     m3 = m2 - m1;
    d3 = d2 - d1;

    if (d3 < 0) {
        m3--;
        d3 += getDaysInMonth(y2, m2); // Add the days from the previous month
    }

    if (m3 < 0) {
        y3--;
        m3 += 12;
    }

    message.innerHTML = `You are ${y3} Years, ${m3} Months, and ${d3} Days old`;

    function getDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate(); // month + 1 because month is 0-based
    }

//     if (m2 > m1) {
//         m3 = m2 - m1

//     }
//     else {
//         y3--;
//         m3 = 12 + m2 - m1
//     }
//     if (d2 > d1) {
//         d3 = d2 - d1;
//     }
//     else {
//         m3--;
//         d3 = getDaysInMonth(y1, m1) + d2 - d1;
//     }
//     if (m3 < 0) {
//         m3 = 11
//         y3=0;
//     }

//     console.log(y3, m3, d3)

// //     let msg = document.createElement("span")

// //     msg.innerHTML=`You are ${y3} Year, ${m3} Month , ${d3} Days Old`
// //     message.appendChild(msg)
// //    console.log(msg)
// message.innerHTML=`You are ${y3} Year, ${m3} Month , ${d3} Days Old`


//     function getDaysInMonth(year, month) {
//         return new Date(year, month, 0).getDate();
//     }
}

