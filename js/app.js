var news = [
	{
		author: 'Гарри Каспаров',
		text: 'Я должен признаться, что я киборг'
	},
	{
		author: 'Марк Цукерберг',
		text: 'Наша компания занимается поглащением Google'
	},
	{
		author: 'Anonymous',
		text: 'We are Anonymous. We are Legion. We do not forgive. We do not forget. Expect us.'
	}
];

class Article extends React.Component {
	render() {
		var author = this.props.data.author,
			text = this.props.data.text;
		return 	(	
			<div className='article'>
				<p className='news__author'>{author}:</p>
				<p className='news__text'>{text}</p>
			</div>
		);
	}
}

class News extends React.Component {
	render() {
		var data = this.props.data;
		var newsTemplate;
		if(data.length > 0) {
			newsTemplate = data.map(function(item, index) {
				return (
					<div key={index}>
						<Article data={item} />
					</div>
				)
			});
		} else {
			newsTemplate = <p>Новостей всё ещё нет :(</p>
		}
		
		return (
			<div className='news'>
				{newsTemplate}
				<strong className={'news__count ' + (data.length > 0 ? '' : 'none')}>Всего новостей: {data.length}</strong>
			</div>
		);
	}
};

class App extends React.Component {
	render() {
		return (
			<div className='app'>
				<h3>Новости</h3>
				<News data={news}/> {/* передаётся список новостей в data */}
			</div>
		);
	}
};

ReactDOM.render(
	<App />,
	document.getElementById('root')
);