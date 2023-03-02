function initListeners() {
  $("nav a").click(function (e) {
    // this stores the id from the anchor tag
    let aID = e.currentTarget.id;
    let contentID = aID + "Content";

    MODEL.updateView(contentID);

    if (aID == "home") {
      console.log("home");
      // change navigator to white
      $("nav a").addClass("white");
      $("nav a").removeClass("black");
    } else {
      // change navigation to black
      $("nav a").addClass("black");
      $("nav a").removeClass("white");
      console.log("else");
    }
  });
}

$(document).ready(function () {
  initListeners();
  MODEL.updateView("homeContent");
});
