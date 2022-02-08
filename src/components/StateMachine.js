import {
  ChangeObjectColor,
  ChangeObjectVisibility,
  ChangeObjectColorMetallic,
  EngineEvent,
} from "./Engine";

export default class StateMachine {
  constructor(model) {
    this.model = model;
    this.handler = {
      setState: (index, i) => {
        model = this.fromIndex(index);
        model.selected = model.options[i];
        this.HandleVisibility(model, model.selected === "Yes");
        if (model.lock && model.lock.control)
          this.onLock(model.lock, model.selected === "Yes");
      },
      setModel: (index, i) => {
        model = this.fromIndex(index);
        if (i === -1 || !model.options || !model.options[i].target) return;
        model.selected = model.options[i].name;
        model.options.forEach((o) => {
          this.HandleVisibility(o, o.target === model.options[i].target);
        });
        model.options.forEach((o, j) => {
          if (o.lock) this.onLock(o.lock, !(j === i));
        });
      },
      setColorPicker: (index, i, j) => {
        model = this.fromIndex(index);
        model.selected[i] = model.options[i][j];
        ChangeObjectColor(model.target[i], model.options[i][j]);
      },
      setColorDropdown: (index, i) => {
        model = this.fromIndex(index);
        model.selected = model.options[i].name;
        ChangeObjectColor(model.options[i].target, model.options[i].color);
        model.options.forEach((o, j) => {
          if (o.lock) this.onLock(o.lock, !(j === i));
        });
      },
      setMetallicColorDropdown: (index, i) => {
        model = this.fromIndex(index);
        model.selected = model.options[i].name;
        ChangeObjectColorMetallic(
          model.options[i].target,
          model.options[i].color
        );
        model.options.forEach((o, j) => {
          if (o.lock) this.onLock(o.lock, !(j === i));
        });
      },
    };

    EngineEvent.addEventListener("Loaded", this.onLoad);
  }

  fromIndex(index) {
    return this.model[index.key][index.i];
  }

  onLock(lock, state) {
    var id = lock.id;
    var keys = ["interior", "exterior"];
    keys.forEach((k) => {
      this.model[k].forEach((item, j) => {
        if (item.lock && item.lock.id === id) {
          item.lock.state = state;
          if (!item.lock.control && !state)
            this.defaultAction({ key: k, i: j }, item);
        }
      });
    });

    if (this.updateState) this.updateState(this);
  }

  onLoad = () => {
    var keys = ["interior", "exterior"];
    var locks = [];
    keys.forEach((k) => {
      this.model[k].forEach((item, i) => {
        if (item.lock && item.lock.control)
          locks.push(() => this.defaultAction({ key: k, i: i }, item));
        else this.defaultAction({ key: k, i: i }, item);
      });
    });
    locks.forEach((l) => l());
    this.loaded = true;
  };

  defaultAction(index, item) {
    if (item.action) {
      if (item.action === "setColorPicker") {
        this.handler[item.action](index, 0, 0);
        this.handler[item.action](index, 1, 0);
      } else if (item.action === "setState") {
        this.handler[item.action](index, item.options.length - 1);
      } else this.handler[item.action](index, 0);
    }
  }

  HandleVisibility(model, state) {
    ChangeObjectVisibility(model.target, state);
  }

  HandleColor(model, state) {
    ChangeObjectColor(model.target, state);
  }
}
