import './App.css';
import Letter from './Letter.js'

function App() {

	let lettersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

	return (
		<div className='main'>
			<div className='titleContainer'>
				<h1 className='title'>Learn the Alphabet with CupcakKe!</h1>
			</div>
			{lettersArray.map(eachLetter =>
				<Letter key={eachLetter} letter={eachLetter} />
			)}

			<div className='footer'>
				<span>made by <a href='https://github.com/aaronhash' target='_blank' rel='noreferrer'>aaronhash</a></span>
				<span>emojis from <a href='https://emojipedia.org/' target='_blank' rel='noreferrer'>Emojipedia</a> and <a href='https://www.reddit.com/r/Emoticonporn/comments/ksyzoh/mmm_emoji_boobs/' target='_blank' rel='noreferrer'>Reddit</a></span>
				<span>based on the Tiktok by <a href='https://www.tiktok.com/@arianagrindrbussayshart/video/7090122967274867974' target='_blank' rel='noreferrer'>@arianagrindrbussayshart</a></span>
				<span>stream cupcakKe on <a href='https://open.spotify.com/artist/76SlrtEaq2oViRXulxjfuM' target='_blank' rel='noreferrer'>Spotify!</a></span>
			</div>
		</div>
	);
}

export default App;
