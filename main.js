
//  main variable
let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector('.get-button');
let reposData = document.querySelector('.show-data');

getButton.onclick = function(){
    getRepos();
};

//  get repos function 
function getRepos(){
    // fetch('https://api.github.com/users/ahmedbasuony7/repos')

    if(theInput.value == ""){
        reposData.innerHTML = `  <span> please write your Githb User Name  </span>`;

    }else{
        fetch(`https://api.github.com/users/${theInput.value}/repos`).then((response) => {
            return response.json();
        }).then((repositries) => {
            // empty the container 
            reposData.innerHTML ="";

            // loop on repositries
            repositries.forEach( (repo) => {
                // creare main div
                let mainDiv = document.createElement("div");

                //  create repo Name Text
                let repoName = document.createTextNode(repo.name);

                // append the text to the main div
                mainDiv.appendChild(repoName);

                // create repo url 
                let theurl = document.createElement('a');

                // create repo url text
                let theUrlText = document.createTextNode("visit");

                //  Append the  url text 
                theurl.appendChild(theUrlText);

                // add the Hypertext Refrence "herf"
                theurl.href = `https://github.com/ahmedbasuony7/${repo.name}`;

                // set attribute blank 
                theurl.setAttribute('target' , '_blank');

                // append url anchor to main div 
                mainDiv.appendChild(theurl);

                // create starts  count span 
                let StarsSpan = document.createElement("span");

                // create the starts count text 
                let startsText = document.createTextNode(`stars ${repo.stargazers_count} `);

                // add starts ount text to start span 
                StarsSpan.appendChild(startsText);

                mainDiv.style.display="flex";
                mainDiv.style.justifyContent="flex-start"
                mainDiv.style.flexWrap ="wrap";
                mainDiv.style.alignItems = "center";
                // append start count to main div
                mainDiv.appendChild(StarsSpan);
                // add class on main div
                mainDiv.className = 'repo-box';
                // append the main div to container
                reposData.appendChild(mainDiv);
                reposData.style.display="block"
            });
            
        })
        
    }
}