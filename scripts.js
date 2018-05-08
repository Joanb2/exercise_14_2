var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Movie about some wizard'
	},
	{
		id: 2,
		title: 'Lion King',
		desc: 'Everyone cry on this'
	},
	{
		id: 3,
		title: 'Fight Club',
		desc: 'I should not talk about this'
	},
	{
		id: 4,
		title: 'A Clockwork Orange',
		desc: 'History about charming Alex DeLarge'
	}
];

var moviesElements = movies.map(function(movie){
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc)
		);
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Movies'),
		React.createElement('ul', {}, moviesElements),
	);
ReactDOM.render(element, document.getElementById('app'));