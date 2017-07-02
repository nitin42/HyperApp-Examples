import { h, app } from 'hyperapp';
import emojiFilter from '../utils';
import './App.css';

const SearchInput = ({ handleChange }) => (
  <div>
    <input
      className="search-bar"
      type="text"
      placeholder="Search for emoji ..."
      onkeyup={handleChange}
      name="search"
    />
  </div>
);

const ShowEmoji = ({ listOfEmoji }) => (
  <div>
    {listOfEmoji.map((emoji, i) => (
      <div className="items">
        <img
          className="image"
          key={i}
          src={`//cdn.jsdelivr.net/emojione/assets/png/${emoji.symbol
            .codePointAt(0)
            .toString(16)}.png`}
        />
        <span className="title">
          {emoji.title}
        </span>
      </div>
    ))}
  </div>
);

let App = app({
  state: {
    arrayOfEmoji: emojiFilter("", 20) || []
  },
  view: (state, actions) => {
    return (
      <div>
        <h1 className="heading">Search your favourite emoji</h1>
        <SearchInput handleChange={actions.handleChange} />
        <ShowEmoji listOfEmoji={state.arrayOfEmoji} />
      </div>
    );
  },
  actions: {
    handleChange: (state, actions, e) => ({
      arrayOfEmoji: emojiFilter(e.target.value, 20)
    })
  },
  root: document.getElementById("app")
});

export default App;