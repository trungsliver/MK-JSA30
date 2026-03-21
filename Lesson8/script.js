fetch("https://cataas.com/api/cats?limit=1000")
    .then((response) => response.json())
    .then((data) => {
        const catContainer = document.getElementById("cats-container");

        for (let i = 0; i < 10; i++) {
            // Tạo card cho từng con mèo
            const catCard = document.createElement("div");
            catCard.classList.add("cat-card");

            // Thêm nội dung vào card
            catCard.innerHTML = `
                <img src="https://cataas.com/cat/${data[i].minetype}" alt="Cat Image">
                <p>ID: ${data[i].id}</p>
                <p>Tags: ${data[i].tags.join(", ")}</p>
            `;

            catContainer.appendChild(catCard);
        }
    });

// fetch("https://api-football-standings.azharimm.site/leagues")
//     .then((response) => response.json())
//     .then((data) => {
//         const leagueContainer = document.getElementById("leagues-container");

//         data.forEach((league) => {
//             // Tạo card cho từng giải đấu
//             const leagueCard = document.createElement("div");
//             leagueCard.classList.add("league-card");

//             // Thêm nội dung vào card
//             leagueCard.innerHTML = `
//                 <h3>${league.name}</h3>
//                 <p>Slug: ${league.slug}</p>
//                 <p>Season: ${league.abbr}</p>
//                 <img src="${league.logos.dark}" alt="League Image">
//             `;

//             leagueContainer.appendChild(leagueCard);
//         });
//     });

    fetch("https://api.spaceflightnewsapi.net/v4/blogs/")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        const container = document.getElementById("news-container");

        data.results.forEach((news) => {
            const newsCard = document.createElement("div");
            newsCard.classList.add("news-card");

            newsCard.innerHTML = `
                <h3>${news.title}</h3>
                <p>Author: ${news.author}</p>
                <a href="${news.url}" target="_blank">Read More</a>
                <img src="${news.image_url}" alt="News Image">
                <p>${news.summary}</p>
                <p>Published At: ${new Date(news.published_at).toLocaleDateString()}</p>
            `;
            container.appendChild(newsCard);
        });
    });