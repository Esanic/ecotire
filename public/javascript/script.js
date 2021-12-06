function showDetails() {

    const request = new XMLHttpRequest();

    request.open('GET',"./javascript/contact-input.json", true);
    console.log("3");
    request.onload = function () {
        console.log("1");
        const data = JSON.parse(this.response);

        for (let i = data.length-1; i >= 0; i--) {
            console.log("2");
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