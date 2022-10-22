const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var ourServices = $$(".our-service-item");
var ourServiceOrder = 1;
ourServices.forEach((ourService, index) => {
    if (ourService.style.order == '') {
        ourService.style.order = ourServiceOrder++;
    }
});

function preOurService() {
    ourServices.forEach((ourService, index) => {
        ourService.style.opacity = '0'
        var order = parseInt(ourService.style.order) + 1;
        if (order > ourServices.length) {
            order = 1;
        }
        ourService.style.order = order;
        setTimeout(() => {
            ourService.style.opacity = '1'
        }, 400)
    });
}

function nextOurService() {
    ourServices.forEach((ourService, index) => {
        ourService.style.opacity = '0'
        var order = parseInt(ourService.style.order) - 1;
        if (order == 0) {
            order = ourServices.length;
        }
        ourService.style.order = order;
        setTimeout(() => {
            ourService.style.opacity = '1'
        }, 400)
    });
}

var companyMembersList = $$(".company-members-item");
var pagis = $$(".vh-pagi-pagi-item");
var companyMemberOrder = 1;
for (var i = 1; i <= companyMembersList.length; i++) {
    if (companyMembersList[i - 1].parentElement.style.order == '') {
        companyMembersList[i - 1].parentElement.style.order = companyMemberOrder++;
    }
}

function companyMembersListChangeIndex() {
    var i = 1;
    companyMembersList.forEach((companyMembersItem, index) => {
        companyMembersItem.style.animation = 'hideRight .3s ease-in-out forwards';
        const pagi = pagis[index];

        if (companyMembersItem.parentElement.style.order == '') {
            companyMembersItem.parentElement.style.order = i++;
        } else {
            i = parseInt(companyMembersItem.parentElement.style.order) - 1;
            if (i < 1) {
                i = companyMembersList.length;
            }
            companyMembersItem.parentElement.style.order = i;
        }

        if (i == 1) {
            $(".vh-pagi-pagi-item.vh-pagi-pagi-item-active").classList.remove("vh-pagi-pagi-item-active");
            pagi.classList.add("vh-pagi-pagi-item-active");
        }
        setTimeout(() => {
            companyMembersItem.style.animation = 'showLeft .3s ease-in-out forwards';
        }, 200)
    });
}

var companyMembersListInterval = setInterval(companyMembersListChangeIndex, 5000);

function stopCompanyMembersListInterval() {
    clearInterval(companyMembersListInterval);
}

function showcompanyMembersList(i, index) {
    if (i - 1 < parseInt(index)) {
        companyMembersList[i - 1].parentElement.style.order = companyMembersList.length - parseInt(index) + i;
    } else if (i - 1 == parseInt(index)) {
        companyMembersList[i - 1].parentElement.style.order = 1;
    } else {
        companyMembersList[i - 1].parentElement.style.order = i - parseInt(index);
    }
}

function companyMembersListChangeOnclick(e) {
    stopCompanyMembersListInterval();
    $(".vh-pagi-pagi-item.vh-pagi-pagi-item-active").classList.remove("vh-pagi-pagi-item-active");
    pagis.forEach((pagi, index) => {
        if (pagi == e) {
            companyMembersList.forEach(companyMembers => {
                companyMembers.style.opacity = '0';
            });
            setTimeout(() => {
                for (var i = 1; i <= companyMembersList.length; i++) {
                    showcompanyMembersList(i, index);
                }
            }, 400);
            setTimeout(() => {
                companyMembersList.forEach(companyMembers => {
                    companyMembers.style.opacity = '1';
                });
            }, 500);
            pagis[index].classList.add("vh-pagi-pagi-item-active");
        }
    });
    companyMembersListInterval = setInterval(companyMembersListChangeIndex, 5000);
}

var partnerLogoList = $$(".partner-logo-item");
var partnerLogoOrder = 1;
partnerLogoList.forEach((partnerLogoItem, index) => {
    if (partnerLogoItem.style.order == '') {
        partnerLogoItem.style.order = partnerLogoOrder++;
    }
});

function nextPartnerLogo() {
    partnerLogoList.forEach((partnerLogoItem, index) => {
        var order = parseInt(partnerLogoItem.style.order) - 1;
        if (order == 0) {
            order = partnerLogoList.length;
        }
        partnerLogoItem.style.order = order;
    });
}

function prePartnerLogo() {
    partnerLogoList.forEach((partnerLogoItem, index) => {
        var order = parseInt(partnerLogoItem.style.order) + 1;
        if (order > partnerLogoList.length) {
            order = 1;
        }
        partnerLogoItem.style.order = order;
    });
}

var vhReviewList = $$(".vh-reviews-col");
var reviewPagis = $$(".vh-pagi-reviews-item");

function vhReviewListChangeIndex() {
    var i = 1;
    vhReviewList.forEach((vhReviewItem, index) => {
        const pagi = reviewPagis[index];

        if (vhReviewItem.style.order == '') {
            vhReviewItem.style.order = i++;
        } else {
            i = parseInt(vhReviewItem.style.order) - 1;
            if (i < 1) {
                i = vhReviewList.length;
            }
            vhReviewItem.style.order = i;
        }

        if (i == 1) {
            $(".vh-pagi-reviews-item.vh-pagi-reviews-item-active").classList.remove("vh-pagi-reviews-item-active");
            pagi.classList.add("vh-pagi-reviews-item-active");
        }
    });
}

var vhReviewListInterval = setInterval(vhReviewListChangeIndex, 5000);

function stopVhReviewListInterval() {
    clearInterval(vhReviewListInterval);
}

function vhReviewListOnclick(e) {
    stopVhReviewListInterval();
    $(".vh-pagi-reviews-item.vh-pagi-reviews-item-active").classList.remove("vh-pagi-reviews-item-active");
    reviewPagis.forEach((pagi, index) => {
        if (pagi == e) {
            var n = 1;
            for (var i = 1; i <= vhReviewList.length; i++) {
                if (vhReviewList[i - 1].style.order == '') {
                    vhReviewList[i - 1].style.order = n++;
                }
            }

            for (var i = 1; i <= vhReviewList.length; i++) {
                if (i - 1 < parseInt(index)) {
                    vhReviewList[i - 1].style.order = vhReviewList.length - parseInt(index) + i;
                } else if (i - 1 == parseInt(index)) {
                    vhReviewList[i - 1].style.order = 1;
                } else {
                    vhReviewList[i - 1].style.order = i - parseInt(index);
                }
            }

            reviewPagis[index].classList.add("vh-pagi-reviews-item-active");
        }
    });
    vhReviewListInterval = setInterval(vhReviewListChangeIndex, 5000);
}