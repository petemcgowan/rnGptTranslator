import React from "react";
// import "../styles.css";

export function ResultsSection(props) {
  // translatePhraseResult={translatePhraseResult}
  // setTranslatePhraseResult={setTranslatePhraseResult}

  return (
    <div>
      {/* <!-- TWEETS (MIDDLE-CONTAINER) --> */}
      <div class="tweets block">
        <h2 class="titular">
          {/* <span class="icon zocial-twitter"></span>Translation Results */}
          <span class="icon entypo-language"></span>Translation Results
        </h2>
        {/* <div class="tweet first">
          <p>
            Ice-cream trucks only play music when out of ice-cream. Well played. On{" "}
            <a class="tweet-link" href="#17">
              @Quora
            </a>
          </p>
          <p>
            <a class="time-ago scnd-font-color" href="#18">
              3 minutes ago
            </a>
          </p>
        </div> */}
        <div class="tweet">
          <p>
            {props.translatePhraseResult}
            {/* <a class="tweet-link" href="#19">
              #CreativeCloud
            </a> */}
          </p>
          {/* <p>
            <a class="scnd-font-color" href="#20">
              6 hours ago
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
}
