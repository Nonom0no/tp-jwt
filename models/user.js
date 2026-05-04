const bcrypt = require('bcryptjs');
let users = [
 {
 id: 1,
 username: 'Kirei',
 password: bcrypt.hashSync('123456', 10),
 playlist: ['Apalah (Arti Menunggu)', 'Mantan Terindah', 'Lampu Kuning', 'Ada Titik-Titik di Ujung Doa', 'Satu Bulan'],
 mostListeningSong: 'Titik Nadir',
 mostListeningArtist: 'Raisa',
 favoriteGenre: 'Indonesian Pop'
 }
];
module.exports = {
 findByUsername: (username) =>
 users.find(u => u.username === username),
 findById: (id) =>
 users.find(u => u.id === id),
};
