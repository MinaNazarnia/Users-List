
// get queryParams values

const params = new URLSearchParams(window.location.search)
let username = params.get("username");


async function userProfile() {
    let response = await fetch('https://api.github.com/users/' + username);
    let data = await response.json();

    return data;
};


userProfile().then(function (userData) {

    document.getElementById('title').innerText = userData.name;

    // ? top of the profile page

    let row = document.createElement('div');
    row.className = "row";

    let profilePicturePosition = document.createElement('div');
    profilePicturePosition.className = "col-md-4 d-flex justify-content-center";

    let profileImage = document.createElement('img');
    profileImage.src = userData.avatar_url;
    profileImage.style.width = "150px";
    profileImage.style.height = "150px";
    profileImage.alt = "avatar picture";

    profilePicturePosition.appendChild(profileImage);

    row.appendChild(profilePicturePosition);

    let dataPosition = document.createElement('div');
    dataPosition.className = "col-md-6";

    let h3 = document.createElement('h3');
    h3.className = "text-secondary pb-1";
    h3.innerText = userData.name;

    dataPosition.appendChild(h3);

    let h6 = document.createElement('h6');
    h6.className = "text-primary pb-1";
    h6.innerText = userData.login;

    dataPosition.appendChild(h6);

    let userStatus = document.createElement('p');
    userStatus.className = "mt-2 userStatus";
    if (userData.site_admin == false)
        userStatus.innerText = "User";
    else
        userStatus = "Admin";

    dataPosition.appendChild(userStatus);

    let dataUl = document.createElement('ul');
    dataUl.classList = "nav nav-tabs";
    dataUl.role = "tablist";


    // ? about tab

    let aboutLi = document.createElement('li');
    aboutLi.className = "nav-item";

    let aboutLink = document.createElement('a');
    aboutLink.classList = "nav-link active";
    aboutLink.dataToggle = "tab";
    aboutLink.ariaControls = "home";
    aboutLink.ariaSelected = "true";
    aboutLink.innerText = "About";

    aboutLi.appendChild(aboutLink);

    dataUl.appendChild(aboutLi);


    // ? other tab

    let timelineLi = document.createElement('li');
    timelineLi.className = "nav-item";

    let timelineLink = document.createElement('a');
    timelineLink.classList = "nav-link";
    timelineLink.dataToggle = "tab";
    timelineLink.ariaControls = "profile";
    timelineLink.ariaSelected = "true";
    timelineLink.innerText = "Timeline";

    timelineLi.appendChild(timelineLink);

    dataUl.appendChild(timelineLi);

    dataPosition.appendChild(dataUl);

    row.appendChild(dataPosition);

    let editBtnPosition = document.createElement('div');
    editBtnPosition.className = "col-md-2";

    let btnAlignment = document.createElement('div');
    btnAlignment.classList = "d-flex flex-column justify-content-center";

    let followers = document.createElement('button');
    followers.classList = "btn btn-outline-primary mt-2 p-1 flw-btn responsive-width";
    followers.innerText = "Followers";
    followers.title = userData.followers;
    followers.addEventListener("click", function () {
        window.open(userData.followers_url);
    });

    btnAlignment.appendChild(followers);

    let following = document.createElement('button');
    following.classList = "btn btn-outline-primary mt-2 p-1 flw-btn responsive-width";
    following.innerText = "Following";
    following.title = userData.following;
    following.addEventListener("click", function () {
        window.open(userData.following_url);
    });

    btnAlignment.appendChild(following);

    let editBtn = document.createElement('button');
    editBtn.classList = "btn flw-btn editBtnColor p-1 mt-2 nowrap responsive-width";
    editBtn.innerText = "Edit Profile";

    btnAlignment.appendChild(editBtn);

    editBtnPosition.appendChild(btnAlignment);

    row.appendChild(editBtnPosition);

    document.getElementById('profile').appendChild(row);


    // ? profile page

    let row2 = document.createElement('div');
    row2.className = "row";

    // list of social media account should create col-md-4

    let socialMediaCol = document.createElement('div');
    socialMediaCol.classList = "col-md-4 d-flex justify-content-center";

    let socialMediaList = document.createElement('ul');
    socialMediaList.className = "list-unstyled";


    // * twitter 

    let twitter = document.createElement('li');

    let twitterIcon = document.createElement('button');
    twitterIcon.classList = "btn mt-5";
    twitterIcon.style.fontSize = "25px";
    twitterIcon.type = "button";
    if (userData.twitter_username == null || userData.twitter_username == "") {
        twitterIcon.disabled = true;
    } else {
        twitterIcon.title = userData.twitter_username;
    }

    let iconT = document.createElement('i');
    iconT.classList = "fa fa-twitter p-1";

    twitterIcon.appendChild(iconT);

    twitter.appendChild(twitterIcon);

    socialMediaList.appendChild(twitter);


    // * facebook

    let facebook = document.createElement('li');

    let facebookIcon = document.createElement('button');
    facebookIcon.classList = "btn mt-2";
    facebookIcon.style.fontSize = "25px";
    facebookIcon.type = "button";
    facebookIcon.disabled = true;


    let iconF = document.createElement('i');
    iconF.classList = "fa fa-facebook p-2";

    facebookIcon.appendChild(iconF);

    facebook.appendChild(facebookIcon);

    socialMediaList.appendChild(facebook);


    // * instagram

    let instagram = document.createElement('li');

    let instagramIcon = document.createElement('button');
    instagramIcon.classList = "btn mt-2";
    instagramIcon.style.fontSize = "25px";
    instagramIcon.type = "button";
    instagramIcon.disabled = true;


    let iconI = document.createElement('i');
    iconI.classList = "fa fa-instagram p-1";

    instagramIcon.appendChild(iconI);

    instagram.appendChild(instagramIcon);

    socialMediaList.appendChild(instagram);


    // * linkedin

    let linkedin = document.createElement('li');

    let linkedinIcon = document.createElement('button');
    linkedinIcon.classList = "btn mt-2";
    linkedinIcon.style.fontSize = "25px";
    linkedinIcon.type = "button";
    linkedinIcon.disabled = true;


    let iconL = document.createElement('i');
    iconL.classList = "fa fa-linkedin p-1";

    linkedinIcon.appendChild(iconL);

    linkedin.appendChild(linkedinIcon);

    socialMediaList.appendChild(linkedin);

    socialMediaCol.appendChild(socialMediaList);


    // * date

    let createdDate = document.createElement('li');
    createdDate.classList = "text-secondary mt-3";
    createdDate.style.fontSize = "small";
    createdDate.innerText = "Created : " + userData.created_at;

    socialMediaList.appendChild(createdDate);

    let update = document.createElement('li');
    update.className = "text-secondary mt-1";
    update.style.fontSize = "small";
    update.innerText = "Updated : " + userData.updated_at;

    socialMediaList.appendChild(update);

    socialMediaCol.appendChild(socialMediaList);

    row2.appendChild(socialMediaCol);


    // * about tab

    let info = document.createElement('div');
    info.className = "col-md-8";

    let tabContent = document.createElement('div');
    tabContent.classList = "tab-content profile-tab";

    let aboutTab = document.createElement('div');
    aboutTab.classList = "tab-pane fade show active";
    aboutTab.role = "tabpanel";
    aboutTab.ariaLabelLedby = "home-tab";

    // * node Id
    let nodeIdRow = document.createElement('div');
    nodeIdRow.className = "row mt-5";

    let nodeId = document.createElement('div');
    nodeId.className = "col-md-6";

    let nodeIdLabel = document.createElement('label');
    nodeIdLabel.innerText = "Node ID";

    nodeId.appendChild(nodeIdLabel);

    nodeIdRow.appendChild(nodeId);

    let nodeIdValue = document.createElement('div');
    nodeIdValue.className = "col-md-6";

    let nodeIdP = document.createElement('p');
    nodeIdP.innerText = userData.node_id;

    nodeIdValue.appendChild(nodeIdP);

    nodeIdRow.appendChild(nodeIdValue);

    aboutTab.appendChild(nodeIdRow);

    tabContent.appendChild(aboutTab);

    info.appendChild(tabContent);


    // * company

    let companyRow = document.createElement('div');
    companyRow.className = "row mt-2";

    let company = document.createElement('div');
    company.className = "col-md-6";

    let companyLabel = document.createElement('label');
    companyLabel.innerText = "Comapny";

    company.appendChild(companyLabel);

    companyRow.appendChild(company);

    let companyValue = document.createElement('div');
    companyValue.className = "col-md-6";

    let companyP = document.createElement('p');
    if (userData.company != null || userData.company != "") {
        companyP.innerText = userData.company;
    }
    else {
        companyP.innerText = "-";
    }

    companyValue.appendChild(companyP);

    companyRow.appendChild(companyValue);

    aboutTab.appendChild(companyRow);


    // * location

    let locationRow = document.createElement('div');
    locationRow.className = "row mt-2";

    let location = document.createElement('div');
    location.className = "col-md-6";

    let locationLabel = document.createElement('label');
    locationLabel.innerText = "Location";

    location.appendChild(locationLabel);

    locationRow.appendChild(location);

    let locationValue = document.createElement('div');
    locationValue.className = "col-md-6";

    let locationP = document.createElement('p');
    if (userData.blog != null || userData.location != "") {
        locationP.innerText = userData.location;
    }
    else {
        locationP.innerText = "-";
    }

    locationValue.appendChild(locationP);

    locationRow.appendChild(locationValue);

    aboutTab.appendChild(locationRow);


    // * bio

    let bioRow = document.createElement('div');
    bioRow.className = "row mt-2";

    let bio = document.createElement('div');
    bio.className = "col-md-6";

    let bioLabel = document.createElement('label');
    bioLabel.innerText = "Location";

    bio.appendChild(bioLabel);

    bioRow.appendChild(bio);

    let bioValue = document.createElement('div');
    bioValue.className = "col-md-6";

    let bioP = document.createElement('p');
    if (userData.bio != null || userData.bio != "") {
        bioP.innerText = userData.bio;
    }
    else {
        bioP.innerText = "-";
    }

    bioValue.appendChild(bioP);

    bioRow.appendChild(bioValue);

    aboutTab.appendChild(bioRow);



    // the last 
    tabContent.appendChild(aboutTab);

    info.appendChild(tabContent);

    row2.appendChild(info);

    // "node_id": "MDQ6VXNlcjE4MjU3OTg=",
    //     "company": null,
    //         "blog": "",
    //             "location": "San Francisco, CA",
    //                 "email": null
    // "bio": null,


    document.getElementById('profile').appendChild(row2);


});