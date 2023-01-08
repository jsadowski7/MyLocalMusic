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
        genre_id: 1,
      
    },

    {
        band_name: 'Night Cap',
        img_filename: 'nightcap.jpg',
        description:
            'Inspired by musical artists including Kings of Leon, Cage the Elephant, The Strokes and Local Natives, Night Cap is an Austin, TX based rock band. They describe their music as an original sound influenced by the experiences of life',
        artist_site: 'https://www.nightcapatx.com/',
        spotify:
            'https://open.spotify.com/artist/0d4OObbLXdSSO2suAeC4jk',
        genre_id: 1,
    },
    {
        band_name: 'The Peterson Brothers',
        img_filename: 'petersonbros.jpg',
        description: 'The Peterson Brothers combine infectious energy and modern grooves with jazz, funk, blues & soul to a create their own unique sound.',
        artist_site: 'https://www.petersonbrothersband.com/',
        spotify: 'https://open.spotify.com/artist/6op6sWjJ0fTmCg4bPyDkJs',
        genre_id:3,
    },
    {
        band_name: 'Explosions in the Sky',
        img_filename: 'explosions.jpg',
        description: 'Instrumental rock band formed in 1999. The band has garnered popularity for their elaborately developed guitar work, narratively styled instrumentals, and enthusiastic live shows',
        artist_site: 'http://www.explosionsinthesky.com/',
        spotify: 'https://open.spotify.com/artist/1uQWmt1OhuHGRKmZ2ZcL6p',
        genre_id: 1,
    },
    {
        band_name: 'The Sword',
        img_filename: 'sword.jpg',
        description: 'A doom rock/metal band formed in 2003 in ATX had a song featured on video game Guitar Hero II',
        artist_site: 'https://theswordofficial.com/',
        spotify: 'https://open.spotify.com/artist/0q32a3GRCjDxS4EIrC7YVY',
        genre_id: 3,
    },
    {
        band_name: 'Gary Clark Jr.',
        img_filename: 'gary.webp',
        description: 'Rock/Blues artist born in Austin. He is known for his fusion of blues, rock and soul music with elements of hip hop.',
        artist_site: 'https://www.garyclarkjr.com/?frontpage=true',
        spotify: 'https://open.spotify.com/artist/01aC2ikO4Xgb2LUpf9JfKp',
        genre_id: 2,
    },
];

const seedArtists = () => {
    Artists.bulkCreate(artist_seeds);
}
module.exports = seedArtists;