var express = require("express");
var router = express.Router();

// define the home page route
router.get("/", (req, res) => {
  res.render("index");
});
// router.get("/", (req, res) => {
//   res.render("index", {
//     "titleBar": teamData
//   });
// });
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/features", (req, res) => {
  res.render("features");
});
router.get("/personal", (req, res) => {
  res.render("personal");
});
// define the about route
router.get("/business", (req, res) => {
  res.render("business");
});

router.get("/offers", (req, res) => {
  res.render("offers");
});

router.get("/faq", (req, res) => {
  res.render("faq");
});

router.get("/privacy-policy", (req, res) => {
  res.render("privacy-policy");
});

router.get("/terms-personal", (req, res) => {
  res.render("terms-personal");
});

router.get("/limit-personal", (req, res) => {
  res.render("limit-personal");
});

router.get("/fee-personal", (req, res) => {
  res.render("fee-personal");
});

router.get("/security", (req, res) => {
  res.render("security");
});

router.get("/pci-dss-equirements", (req, res) => {
  res.render("pci-dss-equirements");
});

router.get("/terms-business", (req, res) => {
  res.render("terms-business");
});

router.get("/user-manual-personal", (req, res) => {
  var file = 'user_manuals/user-manual-customer.pdf';
  res.download(file);
});

router.get("/user-manual-business", (req, res) => {
  var file = 'user_manuals/user-manual-merchant.pdf';
  res.download(file);
});




module.exports = router;