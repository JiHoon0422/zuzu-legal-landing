// Define tabFunction
// TabFunction check the id of the 'tab_id' and automatically change the image.
$tabFunction = function(tab_id, detail_id) {
    $(tab_id)
        .children("ul")
        .children()
        .click(function() {
            $(this).siblings().removeClass("clicked");
            $(this).addClass("clicked");
            if ($(detail_id).has("img").length) {
                $(detail_id)
                    .children("img")
                    .attr({
                        src: "https://s3.ap-northeast-2.amazonaws.com/zuzu.network/" +
                            $(this).attr("id") +
                            "-image.png",
                        alt: $(this).attr("id"),
                    });
            }
        });
};

//Use tabFunction
$tabFunction("#introduction-feature-tab", "#introduction-feature-detail");
// $tabFunction("#detailed-meeting-feature-tab");
// $tabFunction("#detailed-shareholder-management-feature-tab");
// $tabFunction("#detailed-stock-management-feature-tab");