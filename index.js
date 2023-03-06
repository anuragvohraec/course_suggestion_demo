import { Bloc, BlocBuilder } from "./js/bloc-them/index.js";
import { html } from "./js/lit-html/lit-html.js";
import { repeat } from "./js/lit-html/directives/repeat.js";

const ALL_COURSES=[
  {
    name:"Arts & Humanities",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    img: "./index_files/fg.jpg"
  },
  {
    name:"Health & Medicine",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    img: "./index_files/22.jpg"
  },
  {
    name:"Engineering",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    img: "./index_files/fgfgg.jpg"
  },
];

class MyAppBloc extends Bloc {
  constructor() {
    super(ALL_COURSES);
  }

  search=(e)=>{
    const c = e.currentTarget;
    const v = c.value;
    if(!v || v.trim().length===0){
        this.emit(ALL_COURSES);
    }else{
      const regex = new RegExp(v.trim().toLowerCase(), "gi");
      const newState = this.state.filter(e=>e.name.match(regex));
      this.emit(newState);
    }
  }
}

customElements.define("my-app", class MyAppWidget extends BlocBuilder {
  constructor() {
    super("MyAppBloc", {
      blocs_map: {
        MyAppBloc: new MyAppBloc()
      }
    })
  }

  builder(state) {
    return html`<section class="u-align-center u-clearfix u-container-align-center u-gradient u-section-1" id="sec-0989">
  <div class="u-clearfix u-sheet u-valign-middle u-sheet-1 main-container" style="width: 100%!important;">
    <nav class="navbar bg-body-tertiary" style="--bs-navbar-brand-color:white;--bs-tertiary-bg-rgb: #fff;">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="./img/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        </a>
        <form class="d-flex" role="search" style="width: calc(100% - 50px);">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
            style="--bs-form-control-bg:#ffffff38;--bs-body-color:white;--bs-secondary-color:#ffffffbf;" @keyup=${this.bloc.search}>
        </form>
      </div>
    </nav>


    <div class="main-box">
      <h2 class="u-align-center u-text u-text-body-alt-color u-text-1" style="margin-top: 0px;"> Free Online Courses
      </h2>
      <p class="u-align-center u-text u-text-body-alt-color u-text-2"> Best Online courses</p>
      <div class="u-expanded-width u-list u-list-1">
        <div class="u-repeater u-repeater-1">
          ${repeat(state,e=>e.name,(e)=>{
            return html`<div
            class="u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-video-cover u-white u-list-item-1">
            <div class="u-container-layout u-similar-container u-valign-top u-container-layout-1">
              <img class="u-expanded-width u-image u-image-round u-radius-15 u-image-1" src=${e.img}
                alt="" data-image-width="812" data-image-height="812">
              <h5 class="u-hover-feature u-text u-text-3"> ${e.name} </h5>
              <p class="u-hover-feature u-text u-text-4">${e.desc}</p>
              <a href="#"
                class="u-border-1 u-border-active-black u-border-hover-black u-border-no-left u-border-no-right u-border-no-top u-border-palette-1-base u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-button-style u-hover-feature u-none u-radius-0 u-text-active-black u-text-body-color u-text-hover-black u-top-left-radius-0 u-top-right-radius-0 u-btn-1">more</a>
            </div>
          </div>`;
          })}  
        </div>
        </div>
      </div>
    </div>

    <div class="u-backlink u-clearfix u-grey-80">
      <a class="u-link" href="#">
        <span>Demo App</span>
      </a>
      <p class="u-text">
        <span>Course Suggestion </span>
      </p>
      <p class="u-align-center u-text u-text-body-alt-color u-text-9">Images from <a href="https://www.freepik.com/"
          class="u-border-1 u-border-active-palette-4-light-1 u-border-hover-palette-4-light-1 u-border-no-left u-border-no-right u-border-no-top u-border-white u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-button-link u-button-style u-none u-radius-0 u-text-body-alt-color u-top-left-radius-0 u-top-right-radius-0 u-btn-4"
          target="_blank">Freepik</a>
      </p>
    </div>

  </div>

</section>



`;
  }
});