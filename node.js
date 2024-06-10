fetch('https://www.365z.org/daily-kindness-quotes') // This grabs the content from the daily kindness quotes page.
    .then(response => { 
    return response.text() // The text from the page gets extracted.
  }).then(html => { // The text is proccessed.
    let parser = new DOMParser(); // A new DOMParser gets created which parses HTML text.
    let data = parser.parseFromString(html, "text/html"); // This parses the HTML text into a DOM Document.
    let ps = data.querySelectorAll('#comp-lq2ml3wk1 p'); // This selects all <p> tag elements in the #comp-lq2ml3wk1 ID.
    let quotes = [...ps].map(q=> q.innerText); // The texts from each <p> tag get extracted and put into a quotes array.
    const start = new Date("2023-12-13T00:00:00"); // A start date is made when the code was first added to the website.
    const today = new Date(); // Everyday, the today variable will actively update to today's date.
    const total_mili = today - start; // We then get the difference in milliseconds between todays date and the start date.
    const diff_days = Math.floor(total_mili / (1000 * 60 * 60 * 24)); // We divide the difference in milliseconds with the total milliseconds in one day.
    let index = diff_days % quotes.length; // After that happens, we mod divide the difference in days with however many quotes from the quotes page.
    document.querySelector("#comp-lq2mk3tu1 span.color_11.wixui-rich-text__text").innerText = quotes[index]; // This displays the selected quote on the home page.
  })
