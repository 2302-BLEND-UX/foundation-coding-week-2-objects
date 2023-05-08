const articleContainer = document.getElementById("article-container");
const modal = document.getElementById("modal");

let articles = [
    {
        id: 0,
        title: "MMA Fighting",
        description: "Conor McGregor doesn't mess around",
        content: `Conor McGregor is a professional mixed martial artist from Ireland, widely regarded as one of the biggest names in combat sports. Born on July 14, 1988, in Dublin, McGregor began his career in combat sports as an amateur boxer before transitioning to mixed martial arts (MMA) in 2008.

        McGregor quickly gained a reputation for his striking ability and knockout power in the featherweight and lightweight divisions of the Ultimate Fighting Championship (UFC). He won the featherweight championship in 2015 by defeating Jose Aldo in just 13 seconds, which remains the fastest finish in UFC title fight history.
        
        McGregor's brash personality and unique style of trash-talking helped to make him a polarizing figure in the world of combat sports. He often makes headlines for his out-of-the-cage antics, including his notorious bus attack in 2018, which led to his arrest and subsequent legal troubles.
        
        In addition to his fighting career, McGregor is also a successful entrepreneur, having launched his own whiskey brand, Proper No. Twelve, in 2018. He has also been involved in various philanthropic efforts, including donating money to hospitals in Ireland during the COVID-19 pandemic.
        
        Despite his controversial reputation, there is no denying McGregor's impact on the sport of MMA and his popularity among fans. His fights continue to draw massive crowds and generate significant pay-per-view revenue, cementing his status as one of the biggest stars in combat sports history.`,
        timestamp: "12:30pm",
        image: "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1679843665/saejzn9hxjbh0yd59fim.jpg",
        alt: "Conor Mcgregor in the octogon"
    },

    {
        id: 1,
        title: "Gamespot",
        description: "Diablo 4 released!",
        content: `Diablo 4 is an upcoming action role-playing game developed and published by Blizzard Entertainment. It is the fourth installment in the popular Diablo franchise and is set in a dark and foreboding world filled with demons and other supernatural creatures. Players will be able to choose from several classes and embark on quests to battle hordes of enemies, collect loot, and upgrade their skills and abilities. Diablo 4 promises to deliver the same fast-paced, hack-and-slash gameplay that made the series famous, while also introducing new features such as a shared open world and PvP zones. The game is highly anticipated by fans of the franchise and is expected to be released in the near future.`,
        timestamp: "1am",
        image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt197bfce3b1cb7880/6286c2cccf13bb4bbe6278ad/open-graph.jpg",
        alt: "demon girl with goat horns"
    },

    {
        id: 2,
        title: "J Cole",
        description: "Released a new album",
        content: `
        J. Cole, born Jermaine Lamarr Cole on January 28, 1985, is an American rapper, singer, and producer from Fayetteville, North Carolina. He first gained recognition with his mixtapes and debut album "Cole World: The Sideline Story" in 2011, which peaked at number one on the US Billboard 200. Cole's music is known for its introspective and socially conscious themes, often tackling issues such as race, politics, and social inequality. He has released several critically acclaimed albums, including "2014 Forest Hills Drive," which was certified double platinum and nominated for a Grammy Award for Best Rap Album. Cole is widely regarded as one of the most talented and influential rappers of his generation.
        `,
        timestamp: "6am",
        image: "https://larrybrownsports.com/wp-content/uploads/2022/02/j-cole.jpg",
        alt: "jcole smiling wearing denim jacket"
    }

];

// creating a loop which shows all the articles, and puts them into the article container

for (let i = 0; i < articles.length; i++) {
    articleContainer.innerHTML += `
    <div class="article">
        <img src="${articles[i].image}" alt="${articles[i].alt}">
        <h2>${articles[i].title}</h2>
        <p class="date-tag">${articles[i].timestamp}</p>
        <p>${articles[i].description}</p>
        <button data-id="${articles[i].id}" class="readmore-button">Read more<button>
    </div>
    `
}



function openModal(content) {
    modal.classList.toggle("active");
}

// this function will check for "read more" buttons on the page, these will be on an article

function addButtonEvents() {
    const readmoreButtons = document.getElementsByClassName("readmore-button");

    // loop through all available buttons
    // add an event listener for a click
    for (let i = 0; i < readmoreButtons.length; i++) {
        // always use an anonymous function after testing for the click
        readmoreButtons[i].addEventListener("click", function () {
            // console.log(readmoreButtons[i].dataset.id);

            let currentArticleId = readmoreButtons[i].dataset.id;

            let modalContent = articles[currentArticleId];

            openModal(modalContent);
        });
    }
}

addButtonEvents();