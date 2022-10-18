const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var ourServices = $$(".our-service-item");
var ourServiceIndex = 0;

ourServices.forEach((ourService, index) => {
    if ($(".our-service-item.our-service-item-active") == ourService) {
        ourServiceIndex = index;
    }
});

function removeOurServiceActive() {
    $(".our-service-item.our-service-item-active").classList.remove('our-service-item-active');
}

function addOurServiceActive() {
    ourServices[ourServiceIndex].classList.add('our-service-item-active');
}

function preOurService() {
    removeOurServiceActive();
    ourServiceIndex = ourServiceIndex - 1;
    if (ourServiceIndex < 0) {
        ourServiceIndex = ourServices.length - 1;
    }
    addOurServiceActive();
}

function nextOurService() {
    removeOurServiceActive();
    ourServiceIndex = ourServiceIndex + 1;
    if (ourServiceIndex >= ourServices.length) {
        ourServiceIndex = 0;
    }
    addOurServiceActive();
}

var companyMembersList = $$(".company-members-item");
var pagis = $$(".vh-pagi-pagi-item");

function companyMembersListChangeIndex() {
    var i = 1;
    companyMembersList.forEach((companyMembersItem, index) => {
        const pagi = pagis[index];

        if (companyMembersItem.style.order == '') {
            companyMembersItem.style.order = i++;
        } else {
            i = parseInt(companyMembersItem.style.order) - 1;
            if (i < 1) {
                i = companyMembersList.length;
            }
            companyMembersItem.style.order = i;
        }

        if (i == 1) {
            $(".vh-pagi-pagi-item.vh-pagi-pagi-item-active").classList.remove("vh-pagi-pagi-item-active");
            pagi.classList.add("vh-pagi-pagi-item-active");
        }
    });
}

var companyMembersListInterval = setInterval(companyMembersListChangeIndex, 3000);

function stopClock() {
    clearInterval(companyMembersListInterval);
}

function companyMembersListChangeOnclick(e) {
    stopClock();
    const index = parseInt(e.getAttribute("index"));
    $(".vh-pagi-pagi-item.vh-pagi-pagi-item-active").classList.remove("vh-pagi-pagi-item-active");
    pagis.forEach((pagi, index) => {
        if (pagi == e) {
            var n = 1;
            for (var i = 1; i <= companyMembersList.length; i++) {
                if (companyMembersList[i - 1].style.order == '') {
                    companyMembersList[i - 1].style.order = n++;
                }
            }

            for (var i = 1; i <= companyMembersList.length; i++) {
                if (i - 1 < parseInt(index)) {
                    companyMembersList[i - 1].style.order = companyMembersList.length - parseInt(index) + i;
                } else if (i - 1 == parseInt(index)) {
                    companyMembersList[i - 1].style.order = 1;
                } else {
                    companyMembersList[i - 1].style.order = i - parseInt(index);
                }
            }

            pagis[index].classList.add("vh-pagi-pagi-item-active");
        }
    });
    companyMembersListInterval = setInterval(companyMembersListChangeIndex, 3000);
}

var partnerLogoList = $$(".partner-logo-item");
var partnerLogoOrder = 1;
partnerLogoList.forEach((partnerLogoItem, index) => {
    if (partnerLogoItem.style.order == '') {
        partnerLogoItem.style.order = partnerLogoOrder++;
    }
});

function prePartnerLogo() {
    partnerLogoList.forEach((partnerLogoItem, index) => {
        var order = parseInt(partnerLogoItem.style.order) - 1;
        if (order == 0) {
            order = partnerLogoList.length;
        }
        partnerLogoItem.style.order = order;
    });
}
function nextPartnerLogo() {
    partnerLogoList.forEach((partnerLogoItem, index) => {
        var order = parseInt(partnerLogoItem.style.order) + 1;
        if (order > partnerLogoList.length) {
            order = 1;
        }
        partnerLogoItem.style.order = order;
    });
}