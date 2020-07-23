import React from "react";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import Header from "./components/Header";
import InputTweet from "./components/InputTweet";
import Tweet from "./components/Tweet";

function App() {
  return (
    <div className="App">
      <div className="container row">
        <div className="sec-one">
          <div class="ml-5">
            {/* logo */}
            <div className="logo mt-2 mb-2 ml-2">
              <i className="fas fa-dove"></i>
            </div>
            {/* menu */}
            <Menu icon="fas fa-house-user " title="Inicio" />
            <Menu icon="fas fa-hashtag" title="Explorar" />
            <Menu icon="far fa-bell" title="Notificaciones" />
            <Menu icon="far fa-envelope" title="Mensajes" />
            <Menu icon="far fa-bookmark" title="Guardados" />
            <Menu icon="far fa-list-alt" title="Listas" />
            <Menu icon="far fa-user" title="Perfil" />
            <Menu icon="fas fa-ellipsis-h" title="Más opciones" />
            {/* tweet button */}
            <button className="btn btn-primary">Twittear</button>
            {/* user profile */}
            <Profile />
          </div>
        </div>
        <div className="sec-two">
          {/* header */}
          <Header />
          {/* tweetear */}
          <InputTweet />
          {/* tweets */}
          <Tweet
            img="https://i.pinimg.com/564x/28/e9/61/28e961fbf24666dacb11c5e6a5e6f07e.jpg"
            name="Roy Mustang"
            user="firebender"
            tweet="Bien flama 🔥🔥🔥"
          />
          <Tweet
            img="https://66.media.tumblr.com/4eb30011ea1c84d3e3e317299c26a031/tumblr_pccakcos2A1vj7siio3_500.png"
            name="Alphonse Elric"
            user="al_elric"
            tweet=" Si pudiese dormir estaria cansado"
          />
          <Tweet
            img="https://e.snmc.io/i/300/w/30d5ab2df798b5e6170f7bb148dc7009/6320917"
            name="Tucker"
            user="bestfather_besthuman"
            tweet="¡Lindo día para jugar con mi perro y mi hija"
          />
        </div>
        <div className="sec-three">
          {/*  buscador */}
          {/*  de tendencias */}
          {/* sugerencias de seguir */}
          {/*  footer */}
        </div>
      </div>
    </div>
  );
}

export default App;
