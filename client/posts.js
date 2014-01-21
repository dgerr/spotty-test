var postsData = [
  {
    name: 'Diesel Cafe',
    rating: '9.4',
    address: 'Somerville, MA',
    url: 'http://google.com'
  }, 
  {
    name: 'Crema Cafe',
    rating: '9.2',
    address: 'Cambridge, MA',
    url: 'http://google.com'
  }
];

Template.spots.helpers({
  posts: postsData
});