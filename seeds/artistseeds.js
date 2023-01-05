const { Artists } = require('../models');

const artist_seeds = [
    {
        band_name: 'Sweet Spirit',
        img_filename: 'sweet_spirit.jpg',
        description:
            'Entrancing crowds with uninhibited go-go dancing and smoky, soulful vocals, Lead vocalist Sabrina Ellis is a seductress of fun. On stage, Sweet Spirit is a versatile hurricane of pop-perfection that cannot help but suck you into their vortex of enthusiasm',
        artist_site: 'https://www.sweetspiritatx.com/',
        spotify:
            'https://open.spotify.com/artist/32L6HnQe9jCXLmjpnS2XSQ',
      
    },

    {
        band_name: 'Night Cap',
        img_filename: 'nightcap.jpg',
        description:
            'Inspired by musical artists including Kings of Leon, Cage the Elephant, The Strokes and Local Natives, Night Cap is an Austin, TX based rock band. They describe their music as an original sound influenced by the experiences of life',
        artist_site: 'https://www.nightcapatx.com/',
        spotify:
            'https://open.spotify.com/artist/0d4OObbLXdSSO2suAeC4jk',
        
    },
];

const seedArtists = () => {
    Artists.bulkCreate(artist_seeds);
}
module.exports = seedArtists;