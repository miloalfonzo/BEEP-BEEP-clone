import React from "react";
import Menu from "./components/Menu";
import Profile from "./components/Profile";

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
            {/* boton twittear */}
            <button className="btn btn-primary">Twittear</button>
            {/* componente de usuario */}
            <Profile />
          </div>
        </div>
        <div className="sec-two">
          {/* header de inicio */}
          {/* componente de tweetear */}
          {/* componente de tweets */}
        </div>
        <div className="sec-three">
          {/* componente buscador */}
          {/* componente de tendencias */}
          {/* componente de sugerencias de seguir */}
          {/* componente footer */}
        </div>
      </div>
    </div>
  );
}

export default App;
