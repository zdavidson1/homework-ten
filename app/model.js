var MODEL = (function () {

    var _homeContent = ` <h1>HOME</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis natus
        neque nam nemo reiciendis necessitatibus praesentium amet, labore
        numquam quod rem itaque, quidem nihil dignissimos. Possimus facilis
        asperiores culpa beatae!
      </p>
      <p>
        Labore et eius eveniet corporis, nam quis rerum cum, dolorum officiis
        quas inventore deleniti nobis quo omnis unde! Beatae enim minus nisi
        consequuntur illo ea doloremque quos voluptate deserunt quaerat.
      </p>
      <p>
        Fugiat maxime similique doloribus ex voluptate, quisquam est, sit facere
        corrupti non animi quam. Excepturi, tempora? Dolores incidunt quaerat
        iure ratione, nesciunt nulla illum. Fugiat magnam quidem placeat officia
        eum.
      </p>`;
var _aboutContent = ` <h1>ABOUT</h1>
      <h4>This is the about page.</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis natus
        neque nam nemo reiciendis necessitatibus praesentium amet, labore
        numquam quod rem itaque, quidem nihil dignissimos. Possimus facilis
        asperiores culpa beatae!
      </p>
      <p>
        Labore et eius eveniet corporis, nam quis rerum cum, dolorum officiis
        quas inventore deleniti nobis quo omnis unde! Beatae enim minus nisi
        consequuntur illo ea doloremque quos voluptate deserunt quaerat.
      </p>
      <p>
        Fugiat maxime similique doloribus ex voluptate, quisquam est, sit facere
        corrupti non animi quam. Excepturi, tempora? Dolores incidunt quaerat
        iure ratione, nesciunt nulla illum. Fugiat magnam quidem placeat officia
        eum.
      </p>`;
var _productsContent = `<h1>Products</h1>
        <img src="./imgaes/Bonnaroo2019_P.webp" alt="bonnaroo" class="bonnaroo-pic">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis natus
          neque nam nemo reiciendis necessitatibus praesentium amet, labore
          numquam quod rem itaque, quidem nihil dignissimos. Possimus facilis
          asperiores culpa beatae!
        </p>
        <p>
          Labore et eius eveniet corporis, nam quis rerum cum, dolorum officiis
          quas inventore deleniti nobis quo omnis unde! Beatae enim minus nisi
          consequuntur illo ea doloremque quos voluptate deserunt quaerat.
        </p>
        <p>
          Fugiat maxime similique doloribus ex voluptate, quisquam est, sit facere
          corrupti non animi quam. Excepturi, tempora? Dolores incidunt quaerat
          iure ratione, nesciunt nulla illum. Fugiat magnam quidem placeat officia
          eum.
        </p>`;
var _contactContent = ` <h1>Contact Us!</h1>
<div class="container">
  <div class="location"></div>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum et,
    aliquid modi placeat doloribus quia consequatur corporis quisquam rem
    itaque cum animi accusantium dolores, corrupti ea natus pariatur ex
    repudiandae! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Ipsum et, aliquid modi placeat doloribus quia consequatur corporis
    quisquam rem itaque cum animi accusantium dolores, corrupti ea natus
    pariatur ex repudiandae!
  </p>
</div>`;


var _updateView = function (pageName) {
    console.log("Model " + pageName);
    var pageContent = "_" + pageName;
     $("#app").html(eval(pageContent));
};

    return {
        updateView: _updateView,
    };

})();