import { StyleSheet, css } from 'aphrodite';
import { h, app } from 'hyperapp';

const styles = StyleSheet.create({
	heading: {
		fontSize: '4em',
		color: 'red'
	}
});

let App2 = app({
	state: 'Hello World!',
	view: (state, actions) => {
		return (
			<h1 className={css(styles.heading)}>{state}</h1>
		);
	}
})

export default App2;

