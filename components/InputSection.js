// import "../styles.css";

export function InputSection(props) {
  // translatePhrase={translatePhrase}
  // setTranslatePhrase={setTranslatePhrase}
  // setTranslatePhraseResult={setTranslatePhraseResult}

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log("props.translatePhrase:" + props.translatePhrase);

    props.setTranslatePhraseResult("A Result");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* <!-- Input Text to Translate --> */}
        <div class="join-newsletter block">
          <h2 class="titular">English To German</h2>
          <div class="input-container">
            <input
              value={props.translatePhrase}
              type="text"
              placeholder="English:<input text here> German:"
              onChangeText={(text) => props.setTranslatePhrase(text)}
              class="email text-input"
            />
            {/* <div class="input-icon envelope-icon-newsletter">
            <span class="fontawesome-envelope scnd-font-color"></span>
          </div> */}
          </div>
          <button class="subscribe button" type="submit">
            TRANSLATE
          </button>
        </div>
      </div>
    </form>
  );
}
