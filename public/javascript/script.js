function externtAPI() {
    const request = new XMLHttpRequest();

    request.open('GET',"https://ghibliapi.herokuapp.com/films", true);
    request.onload = function() {

        const data = JSON.parse(this.response);

        for (let i = 0; i<data.length; i++) {
            const bundleContainer = document.createElement("div");
            bundleContainer.setAttribute("class", "bundleContainer");

            const infoContainer = document.createElement("div");
            infoContainer.setAttribute("class", "infoContainer");
           

            const banner = document.createElement("img")
            banner.setAttribute("class", "banner");
            banner.setAttribute("src", data[i].movie_banner)

            const title = document.createElement("p");
            title.setAttribute("class", "title");
            title.innerHTML = "Titel: " + data[i].title;

            const releaseDate = document.createElement("p");
            releaseDate.setAttribute("class", "releaseDate");
            releaseDate.innerHTML = "Släppt: " + data[i].release_date;

            const director = document.createElement("p");
            director.setAttribute("class", "director");
            director.innerHTML = "Regissör: " + data[i].director;

            const postContainer = document.createElement("div");
            postContainer.setAttribute("class", "postContainer");

            const description = document.createElement("p");
            description.setAttribute("class", "description");
            description.innerHTML = data[i].description;

            texti.appendChild(bundleContainer)
            bundleContainer.appendChild(infoContainer);
            infoContainer.appendChild(banner);
            infoContainer.appendChild(title);
            infoContainer.appendChild(releaseDate);
            infoContainer.appendChild(director);
            bundleContainer.appendChild(postContainer);
            postContainer.appendChild(description);
        }
    };
    request.send();
}

function showDetails() {

    const request = new XMLHttpRequest();

    request.open('GET',"./json/contact-input.json", true);
    
    request.onload = function () {
        
        const data = JSON.parse(this.response);

        for (let i = data.length-1; i >= 0; i--) {
            
            const bundleContainer = document.createElement("div");
            bundleContainer.setAttribute("class", "bundleContainer");

            const infoContainer = document.createElement("div");
            infoContainer.setAttribute("class", "infoContainer");

            const postName = document.createElement("p");
            postName.setAttribute("class", "postName");
            postName.innerHTML = data[i].firstname;

            const postLastName = document.createElement("p");
            postLastName.setAttribute("class", "postLastName");
            postLastName.innerHTML = data[i].lastname;

            const postEmail = document.createElement("p");
            postEmail.setAttribute("class", "postEmail");
            postEmail.innerHTML = data[i].email;

            const postContainer = document.createElement("div");
            postContainer.setAttribute("class", "postContainer");

            const postComment = document.createElement("p");
            postComment.setAttribute("class", "postComment");
            postComment.innerHTML = data[i].message;

            texti.appendChild(bundleContainer)
            bundleContainer.appendChild(infoContainer);
            infoContainer.appendChild(postName);
            infoContainer.appendChild(postLastName);
            infoContainer.appendChild(postEmail);
            bundleContainer.appendChild(postContainer);
            postContainer.appendChild(postComment);
        }
    };
    request.send();
}