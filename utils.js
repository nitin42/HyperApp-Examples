import emojis from './emojiList.json';

let filterEmoji = (value, no) => {
	return emojis.filter((emoji) => {
		if (emoji.title.includes(value)) {
			return true;
		}

		if (emoji.keywords.includes(value)) {
			return true;
		}

		return false;
	}).slice(0, no);
}

export default filterEmoji;