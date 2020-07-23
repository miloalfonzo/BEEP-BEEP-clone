import React from "react";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import Header from "./components/Header";
import InputTweet from "./components/InputTweet";

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
