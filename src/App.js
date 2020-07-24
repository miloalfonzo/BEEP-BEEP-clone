import React from "react";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import Header from "./components/Header";
import InputTweet from "./components/InputTweet";
import Tweet from "./components/Tweet";
import Search from "./components/Search";
import Trends from "./components/Trends";
import Suggestions from "./components/Suggestions";
import Footer from "./components/Footer";

import styled from "styled-components";

function App() {
  const Container = styled.div`
    .title {
      background: #1f3040;
      border-radius: 10px 10px 0 0;
      border-bottom: 1px solid #686f75;
    }
    .bottom {
      background: #1f3040;
      border-radius: 0 0 10px 10px;
    }
    .more {
      color: #31a1e1;
    }
    .bottom:hover {
      background-color: #344350;
    }
  `;
  return (
    <div className="App">
      <div className=" row">
        <div className="one col-lg-3">
          <div className="ml-5">
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

        <div className="two col-lg-6">
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
            tweet="¡Lindo día para jugar con mi perro y mi hija!"
          />
          <Tweet
            img="https://img1.ak.crunchyroll.com/i/spire4/7a23a2506c87cb8cd68707738d48a8541508245018_full.jpg"
            name="Riza"
            user="shootYou"
            tweet="Me tienen podrida"
          />
          <Tweet
            img="https://vignette.wikia.nocookie.net/fullmetal-alchemist-database/images/d/dc/LingYaoEp15.png/revision/latest/scale-to-width-down/340?cb=20121007024747"
            name="Ling Yao"
            user="notgreedy"
            tweet="🤡🤡🤡 <--- yo"
          />
        </div>

        <div className="three col-lg-3">
          {/*  buscador */}
          <Search />
          {/*  de tendencias */}

          <Container>
            <div className=" col-lg-11">
              <div className="title p-2">
                <h5>
                  <b>Qué está pasando</b>
                </h5>
              </div>
              <Trends
                trendType="Tendencia en Amestris"
                trendTitle="King Bradley"
                cant="40 mil tweets"
              />
              <Trends
                trendType="Tendencia global"
                trendTitle="Padre"
                cant="100 mil tweets"
              />
              <Trends
                trendType="General • Hace 5 minutos "
                trendTitle="Eligen al Alquimista más joven"
                cant="2 mil tweets"
              />
              <div className="bottom p-2 mb-3">
                <p className="more ml-1 mt-2">Mostrar más</p>
              </div>
            </div>

            <div className=" col-lg-11">
              <div className="title p-2">
                <h5>
                  <b>A quien seguir</b>
                </h5>
              </div>
              {/* sugerencias de seguir */}
              <Suggestions
                img="https://vignette.wikia.nocookie.net/fma/images/8/85/Envidia_rostro.png/revision/latest?cb=20141228003215&path-prefix=es"
                name="envy"
                user="wantyours"
              />
              <Suggestions
                img="https://vignette.wikia.nocookie.net/fma/images/e/ed/Manga_Bradley_portrait_small.jpg/revision/latest/top-crop/width/360/height/450?cb=20131216214329&path-prefix=es"
                name="King ✔️ "
                user="officialfurher"
              />
              <Suggestions
                img="https://i.pinimg.com/originals/20/c4/f7/20c4f7bc300e69d365b63a9c4f002875.jpg"
                name="TRUTH"
                user="imall"
              />
              <div className="bottom p-2">
                <p className="more ml-1 mt-2">Mostrar más</p>
              </div>
            </div>
          </Container>

          {/*  footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
