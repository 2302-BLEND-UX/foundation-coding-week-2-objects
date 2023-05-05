const articleContainer = document.getElementById("article-container");

// ---- example of one object ---

// let article = {
//     id: 1,
//     title: "MMA Fighting",
//     description: "Conor McGregor doesn't mess around",
//     timestamp: "12:30pm",
//     image: "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1679843665/saejzn9hxjbh0yd59fim.jpg",
//     alt: "Conor Mcgregor in the octogon"
// }

// ------this is how you could show a single object on the screen

// articleContainer.innerHTML = `
// <div class="article">
//     <h2>${article.title}</h2>
//     <p class="article-date">${article.timestamp}</p>
//     <p>${article.description}</p>
//     <img src="${article.image}"
//         alt="${article.alt}">
// </div>
// `

let articles = [
    {
        id: 1,
        title: "MMA Fighting",
        description: "Conor McGregor doesn't mess around",
        timestamp: "12:30pm",
        image: "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1679843665/saejzn9hxjbh0yd59fim.jpg",
        alt: "Conor Mcgregor in the octogon"
    },

    {
        id: 2,
        title: "Gamespot",
        description: "Diablo 4 released!",
        timestamp: "1am",
        image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt197bfce3b1cb7880/6286c2cccf13bb4bbe6278ad/open-graph.jpg",
        alt: "demon girl with goat horns"
    },

    {
        id: 3,
        title: "J Cole",
        description: "Released a new album",
        timestamp: "6am",
        image: "https://larrybrownsports.com/wp-content/uploads/2022/02/j-cole.jpg",
        alt: "jcole smiling wearing denim jacket"
    }

];

// ---- check out our array of articles, each article being an object
// console.log(articles);

// log out the third article from the "articles" array, and also show the title property of it
// console.log(articles[2].title);

// logging out the first article, i.e. the first thing in the array, and choosing the description property
// console.log(articles[0].description);

// creating a loop which shows all the articles, and puts them into the article container

for (let i = 0; i < articles.length; i++) {
    articleContainer.innerHTML += `
    <div class="article">
        <h2>${articles[i].title}</h2>
        <p>${articles[i].timestamp}</p>
        <p>${articles[i].description}</p>
        <img src="${articles[i].image}" alt="${articles[i].alt}">
    </div>
    `
}