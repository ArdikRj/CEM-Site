import { jsx, jsxFrag, init, Variable } from "@betarost/cemserver/cem.js";
import svg from "@assets/svg/index.js";
import images from "@assets/images/index.js";
import Swiper from "swiper/bundle";

import "swiper/css/bundle";
// import { AboutAnimation } from "@src/component/blocks/AboutAnimation";

const team = [
  {
    name: "Ян Кривоносов",
    foto: "startaps-inner/team1",
    position: "Основатель проекта «Сrypto Emergency»",
  },
  {
    name: "Игорь Еньшин",
    foto: "startaps-inner/team4",
    position: "Web-программист",
  },
  {
    name: "Анна Рыжкова",
    foto: "startaps-inner/team2",
    position: "Основатель проекта «Сrypto Emergency»",
  },
  {
    name: "Дмитрий Белов",
    foto: "startaps-inner/team3",
    position: "Основатель проекта «Сrypto Emergency»",
  },
  {
    name: "Анна Шалбузова",
    foto: "startaps-inner/team7",
    position: "Основатель проекта «Сrypto Emergency»",
  },
  {
    name: "Дмитрий Белов",
    foto: "startaps-inner/team3",
    position: "Основатель проекта «Сrypto Emergency»",
  },
];

function showTeam(team) {
  return team.map((item) => {
    return (
      <div class="team-item swiper-slide">
        <div class="team-img">
          <img src={images[item.foto]}></img>
        </div>
        <h5>{item.name}</h5>
        <span>{item.position}</span>
      </div>
    );
  });
}

const start = function (data, ID) {
  const swiperGo = function (index) {
    let swiperItem = new Swiper(".mySwiper", {
      // grid: {
      //   rows: 2,
      // },
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        100: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        620: {
          //600
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        910: {
          //800
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1240: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
      spaceBetween: 20,
    });
  };
  init(
    null,
    () => {
      return (
        <div class="c-aboutus about_us_container c-main__body" id="test2">
          {/* <div>
            <AboutAnimation></AboutAnimation>
          </div> */}
          <div class="c-aboutus__whowe c-whowe">
            <div class="c-whowe__inner">
              {/* <h2 class="c-whowe__title"
              >
                {Variable.lang.h.who_are_we}
              </h2> */}
              <img
                class="c-whowe__img"
                src={svg["background/about_us_vector-1"]}
              />
              <h2 class="title-animation">Crypto Emergency</h2>
              <p style="font-size: 22px; font-weight: 600">
                {Variable.lang.p.aboutObjectiveTitle}
              </p>
              <p>{Variable.lang.p.aboutObjective}</p>
              <p style="font-size: 22px; font-weight: 600">
                {Variable.lang.p.aboutСonceptTitle}
              </p>
              <p>{Variable.lang.p.aboutСoncept}</p>
            </div>
            <div class="c-whowe__bg"></div>
          </div>
          <div class="c-aboutus__content c-container">
            <div class="c-aboutus__goals c-goals">
              <h2 class="c-goals__title">{Variable.lang.h.our_goals}</h2>

              {/* <div class="list-goals">
                <div class="list-goals_item crypto">
                  <div class="goal-img">
                    <img
                      alt={Variable.lang.p.goalOne}
                      src={svg["icon/about_us_portfolio"]}
                    ></img>
                  </div>

                  <div class="goal-content">
                    <h4>{Variable.lang.p.goalOne}</h4>
                    <div class="goal-content_desc">
                      {Variable.lang.p.goalOneDesc}
                    </div>
                  </div>
                </div>

                <div class="list-goals_item unite">
                  <div class="goal-img">
                    <img
                      alt={Variable.lang.p.goalTwo}
                      src={svg["icon/about_us_protection"]}
                    ></img>
                  </div>

                  <div class="goal-content">
                    <h4>{Variable.lang.p.goalTwo}</h4>
                    <div class="goal-content_desc">
                      {Variable.lang.p.goalTwoDesc}
                    </div>
                  </div>
                </div>
                <div class="list-goals_item access">
                  <div class="goal-img">
                    <img
                      alt={Variable.lang.p.goalThree}
                      src={svg["icon/about_us_cryptocurrencies"]}
                    ></img>
                  </div>

                  <div class="goal-content">
                    <h4>{Variable.lang.p.goalThree}</h4>
                    <div class="goal-content_desc">
                      {Variable.lang.p.goalThreeDesc}
                    </div>
                  </div>
                </div>
                <div class="list-goals_item meta">
                  <div class="goal-img">
                    <img
                      alt={Variable.lang.p.goalFour}
                      src={svg["icon/about_us_quality"]}
                    ></img>
                  </div>

                  <div class="goal-content">
                    <h4>{Variable.lang.p.goalFour}</h4>
                    <div class="goal-content_desc">
                      {Variable.lang.p.goalFourDesc}
                    </div>
                  </div>
                </div>
              </div> 

              <div class="team">
                <h2 class="startap-title">{Variable.lang.h.our_team}</h2>
                <div class="swiper mySwiper" After={() => swiperGo()}>
                  <div class="swiper-wrapper">{showTeam(team)}</div>
                  <div class="swiper-pagination"></div>
                </div>
              </div>*/}

              <div class="c-goals__list">
                <div class="c-goals__item">
                  <div class="c-goals__wrap">
                    <i class="c-goals__icon c-goals__icon--cryptoliteracy"></i>
                  </div>
                  <div>
                    <p class="c-goals__subtitle">{Variable.lang.p.goalOne}</p>
                    <span class="c-goals__text">
                      {Variable.lang.p.goalOneDesc}
                    </span>
                  </div>
                </div>
                <div class="c-goals__item">
                  <div class="c-goals__wrap">
                    <i class="c-goals__icon c-goals__icon--community"></i>
                  </div>
                  <div>
                    <p class="c-goals__subtitle">{Variable.lang.p.goalTwo}</p>
                    <span class="c-goals__text">
                      {Variable.lang.p.goalTwoDesc}
                    </span>
                  </div>
                </div>
                <div class="c-goals__item">
                  <div class="c-goals__wrap">
                    <i class="c-goals__icon c-goals__icon--freeaccess"></i>
                  </div>
                  <div>
                    <p class="c-goals__subtitle">{Variable.lang.p.goalThree}</p>
                    <span class="c-goals__text">
                      {Variable.lang.p.goalThreeDesc}
                    </span>
                  </div>
                </div>
                <div class="c-goals__item">
                  <div class="c-goals__wrap">
                    <i class="c-goals__icon c-goals__icon--metauniverse"></i>
                  </div>
                  <div>
                    <p class="c-goals__subtitle">{Variable.lang.p.goalFour}</p>
                    <span class="c-goals__text">
                      {Variable.lang.p.goalFourDesc}
                    </span>
                  </div>
                </div>
              </div>

              <img
                class="c-whowe__img c-whowe__img--right"
                src={svg["background/about_us_vector-2"]}
              />
            </div>
            <div class="c-aboutus__roadmap">
              <h2>{Variable.lang.h.road_map}</h2>
              <div class="c-aboutus__wrapper">
                <div class="c-aboutus__toppart">
                  <div class="c-aboutus__dateitem c-aboutus__dateitem--1">
                    <p>{Variable.lang.p.mapDateOne}</p>
                    <span>{Variable.lang.span.mapDescOne}</span>
                  </div>
                  <div class="c-aboutus__dateitem c-aboutus__dateitem--2">
                    <p>{Variable.lang.p.mapDateTwo}</p>
                    <span>{Variable.lang.span.mapDescTwo}</span>
                  </div>
                  <div class="c-aboutus__dateitem c-aboutus__dateitem--3">
                    <p>{Variable.lang.p.mapDateThree}</p>
                    <span>{Variable.lang.span.mapDescFive}</span>
                  </div>
                </div>
                <img class="c-aboutus__axis" src={images["road_map"]} />
                <div class="c-aboutus__bottompart">
                  <div class="c-aboutus__dateitem c-aboutus__dateitem--4">
                    <p>{Variable.lang.p.mapDateFour}</p>
                    <span>{Variable.lang.span.mapDescThree}</span>
                  </div>
                  <div class="c-aboutus__dateitem c-aboutus__dateitem--5">
                    <p>{Variable.lang.p.October2022}</p>
                    <span>{Variable.lang.span.mapDescFour}</span>
                  </div>
                  <div class="c-aboutus__dateitem c-aboutus__dateitem--6">
                    <p>{Variable.lang.p.mapDateSix}</p>
                    <span>{Variable.lang.span.mapDescSix}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <div class="accordeon">
              <div class="accordeon-item">
                <div
                  class="accordeon-header"
                  onclick={function () {
                    this.nextElementSibling.classList.toggle("content-hidden");
                  }}
                >
                  <h5 class="accordeon-header_title">Цель Crypto Emergency?</h5>
                </div>
                <div class="accordeon-content">
                  Объединить криптоэнтузиастов со всего мира на
                  многофункциональной платформе, где собраны все необходимые
                  инструменты для общения, обучения, заработка и создания
                  собственного контента.
                </div>
              </div>

              <div class="accordeon-item">
                <div
                  class="accordeon-header"
                  onclick={function () {
                    this.nextElementSibling.classList.toggle("content-hidden");
                  }}
                >
                  <h5 class="accordeon-header_title">Вопрос 2</h5>
                </div>
                <div class="accordeon-content content-hidden">
                  Это означает, что узел не может находиться в двух точках
                  документа одновременно. Поэтому, если у узла уже есть
                  родитель, он сначала удаляется, а затем добавляется в новую
                  позицию. Node.cloneNode() можно использовать для создания
                  копии узла перед добавлением его в новый родительский элемент.
                  Обратите внимание, что копии, сделанные с помощью cloneNode ,
                  не будут автоматически синхронизироваться.
                </div>
              </div>

              <div class="accordeon-item">
                <div
                  class="accordeon-header"
                  onclick={function () {
                    this.nextElementSibling.classList.toggle("content-hidden");
                  }}
                >
                  <h5 class="accordeon-header_title">Вопрос 3</h5>
                </div>
                <div class="accordeon-content content-hidden">
                  Это означает, что узел не может находиться в двух точках
                  документа одновременно. Поэтому, если у узла уже есть
                  родитель, он сначала удаляется, а затем добавляется в новую
                  позицию. Node.cloneNode() можно использовать для создания
                  копии узла перед добавлением его в новый родительский элемент.
                  Обратите внимание, что копии, сделанные с помощью cloneNode ,
                  не будут автоматически синхронизироваться.
                </div>
              </div>

              <div class="accordeon-item">
                <div
                  class="accordeon-header"
                  onclick={function () {
                    this.nextElementSibling.classList.toggle("content-hidden");
                  }}
                >
                  <h5 class="accordeon-header_title">Вопрос 4</h5>
                </div>
                <div class="accordeon-content content-hidden">
                  Это означает, что узел не может находиться в двух точках
                  документа одновременно. Поэтому, если у узла уже есть
                  родитель, он сначала удаляется, а затем добавляется в новую
                  позицию. Node.cloneNode() можно использовать для создания
                  копии узла перед добавлением его в новый родительский элемент.
                  Обратите внимание, что копии, сделанные с помощью cloneNode ,
                  не будут автоматически синхронизироваться.
                </div>
              </div>
            </div> */}

            <div class="c-aboutus__projects">
              <h2>{Variable.lang.h.our_projects}</h2>
              <div class="c-aboutus__list">
                <div class="c-aboutus__project">
                  <img
                    class="c-aboutus__banner"
                    src={images["about_us_banner5"]}
                  />
                  <span class="c-aboutus__projectcompany">
                    {Variable.lang.span.aboutProjectNameOne}
                  </span>
                  <p class="c-aboutus__projecttitle">
                    {Variable.lang.p.aboutProjectDateOne}
                  </p>
                </div>
                <a
                  class="c-aboutus__project"
                  target="_blank"
                  href="https://cemblockchain.com/"
                >
                  <img
                    class="c-aboutus__banner"
                    src={images["about_us_banner8"]}
                  />
                  <span class="c-aboutus__projectcompany">Cemblockchain</span>
                  <p class="c-aboutus__projecttitle">
                    {Variable.lang.p.aboutProjectDate19May2022}
                  </p>
                </a>
                <a
                  class="c-aboutus__project"
                  target="_blank"
                  href="https://cemwallet.com/"
                >
                  <img class="c-aboutus__banner" src={images["CemWallet"]} />
                  <span class="c-aboutus__projectcompany">CEM Wallet</span>
                  <p class="c-aboutus__projecttitle">
                    {Variable.lang.p.aboutProjectDateAugust2022}
                  </p>
                </a>
                {/*<div class="c-aboutus__project">
                  <img class="c-aboutus__banner" src={images["about_us_banner6"]} />
                  <span class="c-aboutus__projectcompany">
                    {Variable.lang.span.aboutProjectNameTwo}
                  </span>
                  <p class="c-aboutus__projecttitle">{Variable.lang.p.aboutProjectDateTwo}</p>
                </div>
                <div class="c-aboutus__project">
                  <img class="c-aboutus__banner" src={images["about_us_banner7"]} />
                  <span class="c-aboutus__projectcompany">
                    crypto vpn
                  </span>
                  <p class="c-aboutus__projecttitle">{Variable.lang.p.aboutProjectDateTwo}</p>
      </div>*/}
              </div>
            </div>
          </div>
        </div>
      );
    },
    ID
  );
};
export default start;
// OK
