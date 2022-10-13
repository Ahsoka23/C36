class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Ingresa tu nombre");
    this.playButton = createButton("jugar");
    this.titleImg = createImg("./assets/title.png", "Titulo del juego");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {

  }

  setElementsStyle() {

  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
  }
}
