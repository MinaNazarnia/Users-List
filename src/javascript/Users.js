"use strict";

// ? set page size and total page
const pageSize = 9;
let totalPage = 0;
let currentPage = 1;


// ? get github fake user api
async function userInfo() {
    let response = await fetch('https://api.github.com/users');
    let data = await response.json();

    return data;
};

userInfo().then(function (num) {
    num.forEach((user, index) => {
        if (index % pageSize == 0) {
            totalPage += 1;
        }
        let card = document.createElement("div");
        card.classList = "card m-2 col-lg-2 col-md-3 col-sm-4";

        let cardBody = document.createElement("div");
        cardBody.classList = "card-body d-flex flex-column align-items-center px-2 py-3"

        let profileImage = document.createElement("img");
        profileImage.style.width = '100px';
        profileImage.style.height = '100px'
        profileImage.src = user.avatar_url;
        profileImage.alt = "avatar";
        profileImage.classList = "img-setting img-fluid py-2";
        cardBody.appendChild(profileImage);

        let username = document.createElement("p");
        username.classList = "text-decoration-none text-dark m-0 pb-3"
        username.innerText = user.login;
        cardBody.appendChild(username);

        let row = document.createElement('div');
        row.classList = "d-flex flex-md-row align-items-center";

        let adminStatus = document.createElement("p");

        if (user.site_admin == true) {
            adminStatus.innerText = "Admin";
            adminStatus.classList = "text-success justify-content-start fontS col-5 m-0 pb-1";
        }

        else {
            adminStatus.innerText = "User";
            adminStatus.classList = "text-secondary justify-content-start fontS col-5 m-0 pb-1";
        }

        row.appendChild(adminStatus);

        let seeProfileBtn = document.createElement('button');

        seeProfileBtn.classList = "btn btn-primary text-nowrap justify-content-end px-2 col-7 btn-sm";
        seeProfileBtn.innerText = "See Profile";
        seeProfileBtn.addEventListener("click", function redirection() {
            window.open("ProfilePage.html?username=" + user.login);


        });
        row.appendChild(seeProfileBtn);
        cardBody.appendChild(row);
        card.appendChild(cardBody);
        document.getElementById("firstDiv").appendChild(card);
    });

    document.getElementById('pageNumberText').addEventListener("load", function paginator() {
        for (let i = 0; i <= totalPage.length; i++) {

            let pageNumber = document.createElement('li');
            pageNumber.className = "page-item";

            let pageNumberBtn = document.createElement('button');
            pageNumberBtn.classList = "btn btn-outline-primary";
            pageNumberBtn.type = "button";
            pageNumberBtn.innerText = index;
            pageNumberBtn.addEventListener("click", changePage(i));

            console.login(pageNumberBtn);

            pageNumber.appendChild(pageNumberBtn);
            document.getElementById('pageNumber').appendChild(pageNumber);
        }
    });

    // createPage(totalPage);
})

function createUser() {
    alert("Login as Admin!");
}

// function createPage(totalPage) {

// let pagination = document.createElement('nav');
// pagination.ariaLabel = "Page navigation example";

// let paginationUl = document.createElement('ul');
// paginationUl.className = "pagination";

// let paginationP = document.createElement('li');
// paginationP.className = "page-item";

// let previousBtn = document.createElement('button');
// previousBtn.type = "button";
// previousBtn.className = "btn";
// previousBtn.ariaLabel = "Previous";
// previousBtn.addEventListener("Previous", gotoPage());

// let preSymbol = document.createElement('span');
// preSymbol.ariaHidden = "true";
// preSymbol.innerText = "&laquo";
// previousBtn.appendChild(preSymbol);

// let preText = document.createElement('span');
// preText.className = "sr-only";
// preText.innerText = "Previvous";
// previousBtn.appendChild(preText);

// paginationUl.appendChild(paginationP);

// totalPage.forEach(creatingPage, index => {




// let paginationN = document.createElement('li');
// paginationN.className = "page-item";

// let nextBtn = document.createElement('button');
// nextBtn.className = "btn";
// nextBtn.type = "button";
// nextBtn.ariaLabel = "Next";
// nextBtn.addEventListener("Next", gotoPage());

// let nextSymbol = document.createElement('span');
// nextSymbol.ariaHidden = "true";
// nextSymbol.innerText = "&raquo";

// nextBtn.appendChild(nextSymbol);

// let nextText = document.createElement('span');
// nextText.className = "sr-only";
// nextText.innerText = "Next";
// nextBtn.appendChild(nextText);

// paginationN.appendChild(nextBtn);

// paginationUl.appendChild(paginationN);

// pagination.appendChild(paginationUl);

// document.getElementById('paginationFooter').appendChild(pagination);

function gotoPage(page) {
    if (page == 'next') {
        currentPage < totalPage ? currentPage += 1 : null;
    }
    else if (page == 'previous') {
        currentPage > 1 ? currentPage -= 1 : null;
    }
    else
        currentPage = page
}

function changePage(page) {
    currentPage = page;
}