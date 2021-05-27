// ***** create variable to DOM elements ***** //

//------------ Main Section Containers ------------//
const mainContentSections = document.querySelectorAll(".main-content");
const pageTitle = document.querySelector("#page-title");
const addSection = document.querySelector("#add");
const viewSection = document.querySelector("#view");
const createNavbar = document.querySelector("#navbar-create");
const viewNavbar = document.querySelector("#navbar-view");
// const detailsSection = document.querySelector("#details");

//------------ Add New/View All Buttons ------------//
const addSectionBtn = document.querySelector("#add-info");
const viewSectionBtn = document.querySelector("#view-info");

//------------ Add New Container Selectors ------------//
const newAppTab = document.getElementById("create-app");
const newCompanyTab = document.getElementById("create-company");
const newContactTab = document.getElementById("create-contact");

//------------ View All Container Selectors ------------//
const viewAppTab = document.getElementById("view-app");
const viewCompanyTab = document.getElementById("view-company");
const viewContactTab = document.getElementById("view-contact");
const viewAllTitle = document.querySelector(".view-content h3");
const viewAppListContainer = document.querySelector("#allappview");
const viewCompaniesListContainer = document.querySelector("#allcompaniesview");
const viewContactsListContainer = document.querySelector("#allcontactsview");

//------------ Detail Container Selectors ------------//
// const appDetBtn = document.querySelector(".app-dets-btn");
// const companyDetBtn = document.querySelector(".company-dets-btn");
// const contactDetBtn = document.querySelector(".contact-dets-btn");
// const appDet = document.querySelector("#details-app");
// const companyDet = document.querySelector("#details-company");
// const contactDet = document.querySelector("#details-contact");
// const detContentDivs = document.querySelectorAll(".details-content");

// const appDetailUIList = document.querySelectorAll(".app-details-temp").forEach(elem => elem.innerHTML = appDetailsTemplate);
// const companyDetailUIList = document.querySelectorAll(".company-details-temp").forEach(elem => elem.innerHTML = companyDetailsTemplate);
// const contactDetailUIList = document.querySelectorAll(".contact-details-temp").forEach(elem => elem.innerHTML = contactDetailsTemplate);



//------------ Add forms templates to HTML ------------//
const addContactListener = () => {
    let form = document.querySelector("#app-form");
    form.addEventListener("click", e => {
        let clickEvent = e.target;
        let template = document.createElement("div");
        template.setAttribute("class", "contact-form card-textbg app-theme-light");
        template.innerHTML = contactFormTemplate;
        let btnElem = document.createElement("button");
        btnElem.innerText = "Add another contact";
        btnElem.classList = "add-contact-btn";
        btnElem.setAttribute("type", "button");
        if(clickEvent.classList == "remove-contact-btn"){
            clickEvent.previousElementSibling.remove();
            clickEvent.remove();
        }
        if(clickEvent.classList == "add-contact-btn"){
            clickEvent.classList = "remove-contact-btn";
            clickEvent.innerHTML = "Remove Contact";
            clickEvent.parentElement.insertBefore(template, clickEvent.parentElement.lastElementChild);
            clickEvent.parentElement.insertBefore(btnElem, clickEvent.parentElement.lastElementChild);
            addLogListener();
        }
    });
};
const loadAppForm = ()=>{
    document.querySelectorAll(".app-form").forEach(elem => elem.innerHTML = appFormTemplate);
    addContactListener();
};

const loadCompanyForm = ()=>{
    document.querySelectorAll(".company-form").forEach(elem => elem.innerHTML = companyFormTemplate);
};

const addLogListener = () => {
    let contactForm = document.querySelectorAll(".contact-form");
    contactForm.forEach(form => {
        form.addEventListener("click", e => {
            logBtn = e.target;
            if(logBtn.classList.contains("remove-log")){
                e.target.parentElement.remove();
            }
            if(logBtn.classList.contains("add-log")){  
                let newNode = document.createElement("div");
                newNode.innerHTML = logBtn.parentElement.innerHTML;
                newNode.classList = "form-group log-info";
                logBtn.parentElement.parentElement.append(newNode);
                logBtn.innerHTML = "Remove Log";
                logBtn.classList = "remove-log"; 
            }
        }); 
    });
};
const loadContactForm = ()=>{
    document.querySelectorAll(".contact-form").forEach(elem => elem.innerHTML = contactFormTemplate);
    addLogListener();
};
loadAppForm();
loadCompanyForm();
loadContactForm();

// const loadAppDetails = ()=>{};
// const loadCompanyDetails = ()=>{};
// const loadContactDetails = ()=>{};


//------------ Toggle between Add New and View All Sections ------------//
addSectionBtn.addEventListener('click', () => {
    if (addSection.style.display !== 'block'){
        pageTitle.innerHTML = 'Add New Application';
        document.querySelectorAll("form").forEach(fm => fm.style.display = "none" );
        document.querySelector("#app-form").style.display = "block";
    }
    mainContentSections.forEach(section => {
        section.style.display = 'none';
    });
    createNavbar.style.display = 'flex';
    viewNavbar.style.display = 'none';
    addSection.style.display = 'block';
});
viewSectionBtn.addEventListener('click', () => {
    if (viewSection.style.display !== 'block'){
        loadAppViewAll();
    }
    mainContentSections.forEach(section => {
        section.style.display = 'none';
    });
    createNavbar.style.display = 'none';
    viewNavbar.style.display = 'flex';
    viewSection.style.display = 'block';
});

//------------ Add New Section ------------//
// add event listeners for "Add New" section
const addformTemplate = (idTag) => {
    //function to to add form information to ui
    document.querySelectorAll("form").forEach(fm => fm.style.display = "none" );
    document.querySelector(idTag).style.display = "block";
};
newAppTab.addEventListener('click', () => {
    pageTitle.innerHTML = 'Add New Application';
    let idTag = "#app-form";
    addformTemplate(idTag);
});
newCompanyTab.addEventListener('click', e => {
    pageTitle.innerHTML = 'Add New Company';
    let idTag = "#company-form";
    addformTemplate(idTag);
});
newContactTab.addEventListener('click', e => {
    pageTitle.innerHTML = 'Add New Contact';
    idTag = "#contact-form";
    addformTemplate(idTag);
});

//------------ View All Section ------------//
// functions for view all section
const clearViewContainer = () => {
    viewAppListContainer.innerHTML = ""; 
    viewCompaniesListContainer.innerHTML = "";
    viewContactsListContainer.innerHTML = "";
}
const loadData = (template, templateClass, container) => {
    container.innerHTML += "<div class=" + templateClass + "></div>";
    document.querySelectorAll("."+templateClass).forEach(elem => elem.innerHTML = template);
};
const loadAppViewAll = () => {
    clearViewContainer();
    pageTitle.innerHTML = 'View All Applications';
    // function that loads all available apps and puts them into the template
    // need to get list of apps from DB
    let list = [1,2,3];  //example test array
    let templateClass= "cards-container";
    let template = appViewTemplate;
    let container = viewAppListContainer;
    list.forEach(item => {
        loadData(template, templateClass, container);
    });
};
const loadCompanyViewAll = () => {
    clearViewContainer();
    pageTitle.innerHTML = 'View All Companies';
    let list = [1,2,3];  //example test array
    let templateClass= "cards-container";
    let template = companyViewTemplate;
    let container = viewCompaniesListContainer;
    list.forEach(item => {
        loadData(template, templateClass, container);
    });
};
const loadContactViewAll = ()=>{
    clearViewContainer();
    pageTitle.innerHTML = 'View All Contacts';
    // viewContactsListContainer.innerHTML = "<div class='contact-view-temp'></div>";
    let list = [1,2,3];  //example test array
    let templateClass= "cards-container";
    let template = contactViewTemplate;
    let container = viewContactsListContainer;
    list.forEach(item => {
        loadData(template, templateClass, container);
    });
};
// add event listeners for view all section
viewAppTab.addEventListener('click', () => {
    loadAppViewAll();
});
viewCompanyTab.addEventListener('click', e => {
    loadCompanyViewAll();
});
viewContactTab.addEventListener('click', e => {
    loadContactViewAll();
});

//------------ Detail Elements ------------//
// // add event listeners for details 
// appDetBtn.addEventListener('click', () => {
//     mainContentSections.forEach(section => {
//         section.style.display = 'none';
//     });
//     detailsSection.style.display = 'block';
//     detContentDivs.forEach(section => {
//         section.style.display = 'none';
//     });
//     appDet.style.display = 'block';
// });
// companyDetBtn.addEventListener('click', () => {
//     mainContentSections.forEach(section => {
//         section.style.display = 'none';
//     });
//     detailsSection.style.display = 'block';
//     detContentDivs.forEach(section => {
//         section.style.display = 'none';
//     });
//     companyDet.style.display = 'block';
// });
// contactDetBtn.addEventListener('click', () => {
//     mainContentSections.forEach(section => {
//         section.style.display = 'none';
//     });
//     detailsSection.style.display = 'block';
//     detContentDivs.forEach(section => {
//         section.style.display = 'none';
//     });
//     contactDet.style.display = 'block';
// });

const inputs = document.querySelectorAll("input");

inputs.forEach(inputField => {
    inputField.addEventListener('click', e => {
        // console.log(e.target.parentElement.parentElement.parentElement);
    });
});

//OBJECTS//
// job class

// company class

// contact class


//CRUD//
// create and add item to database

// read item from database

// update item in database

// delete item from database

//UI//
// form class
// tooltips class
// dropdown class
// search field class
// filter class






