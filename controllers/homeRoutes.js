const router = require("express").Router();
const { Saved, User, Genre, Artists } = require("../models");
const withAuth = require("../utils/auth");

router.get('/', async (req, res) => {
  try {

    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {

  res.render("homepage");
});


router.get("/artist/:id", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Saved, Genre }],
    });

    const user = userData.get({ plain: true });

    const artistData = await Artists.findByPk(req.params.id).catch((err) => {
      res.json(err);
    });
    const artist = artistData.get({ plain: true });
  
    res.render("artist", {
      ...user,
      logged_in: true,
      artist 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/genres', async (req, res) => {
  const artistData = await Artists.findAll().catch((err) => { 
      res.json(err);
    });
      const artists = artistData.map((artist) => artist.get({ plain: true }));

      const genreData = await Genre.findAll().catch((err) => { 
        res.json(err);
      });
        const genres = genreData.map((genre) => genre.get({ plain: true }));

      res.render('genres', { artists, genres });
    });

module.exports = router;
