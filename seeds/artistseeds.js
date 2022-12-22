const { Artists } = require('../models');

const artist_seeds = [
{
    band_name:'Sweet Spirit',
    img_filename:'sweet_spirit.jpg',
    description: 
        'Lead vocalist Sabrina Ellis is the queen bee of the Austin rock n roll scene. Entrancing crowds with uninhibited go-go dancing and smoky, soulful vocals, she is a seductress of fun. On stage, Sweet Spirit is a tight, versatile hurricane of pop-perfection that cannot help but suck you into their vortex of enthusiasm. The bands debut album has begun to attract a national audience, and with a nation-wide tour on tap this nine-piece powerhouse could soon become a household name. -credit: Lee Ackerley Do512',
    artist_site:'https://www.sweetspiritatx.com/',
    spotify:
        'https://open.spotify.com/artist/32L6HnQe9jCXLmjpnS2XSQ',
    genre_id:'',
    },
];

const seedArtists = () => Artists.bulkCreate(artist_seeds);

module.exports = seedArtists;