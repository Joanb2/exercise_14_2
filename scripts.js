var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Movie about some wizard', 
		src: "./potter.jpg",
		alt: "potter"
	},
	{
		id: 2,
		title: 'Lion King',
		desc: 'Everyone cry on this',
		src: "./king.jpg",
		alt: "king"
	},
	{
		id: 3,
		title: 'Fight Club',
		desc: 'I should not talk about this',
		src: "./fight.jpg",
		alt: "club"
	},
	{
		id: 4,
		title: 'A Clockwork Orange',
		desc: 'History about charming Alex DeLarge',
		src: "./clock.jpg",
		alt: "orange"
	}
];

var moviesElements = movies.map(function(movie){
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.src, alt: movie.alt}
		));
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Movies'),
		React.createElement('ul', {}, moviesElements),
	);
ReactDOM.render(element, document.getElementById('app'));