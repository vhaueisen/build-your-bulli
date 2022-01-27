import {
  ChangeObjectColor,
  ChangeObjectVisibility,
  EngineEvent,
} from "./Engine";

export default class StateMachine {
  constructor(model) {
    this.model = model;
    EngineEvent.addEventListener("Loaded", this.onLoad);
    this.handler = {
      setState: (index, i) => {
        model = this.fromIndex(index);
        model.selected = model.options[i].name;
        this.HandleVisibility(model, model.selected == "Yes");
      },
      setModel: (index, i) => {
        model = this.fromIndex(index);
        model.selected = model.options[i].name;
        model.options.forEach((o) => {
          this.HandleVisibility(model, o.target != model.options[i].target);
        });
      },
      setColorPicker: (index, i) => {
        model = this.fromIndex(index);
        model.selected = model.options[i];
        this.HandleColor(model, model.options[i]);
      },
      setColor: (index, i) => {
        model = this.fromIndex(index);
        model.selected = model.options[i].name;
        this.HandleColor(model, model.options[i].color);
      },
    };
  }

  fromIndex(index) {
    return this.model[index.key][index.i];
  }

  onLoad = () => {
    // var keys = ["interior", "exterior"];
    // keys.forEach((k) => {
    //   this.model[k].forEach((item, i) => {
    //     this.HandleVisibility({ key: k, i: i }, false);
    //   });
    // });
  };

  HandleVisibility(model, state) {
    ChangeObjectVisibility(model.target, state);
  }

  HandleColor(model, state) {
    ChangeObjectColor(model.target, state);
  }
}
