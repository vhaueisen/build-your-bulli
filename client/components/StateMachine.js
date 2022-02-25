import { getPool, p_colors, resetGlobal } from "./constants";
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
          this.onLockd(model.lock, model.selected === "Yes");
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
      setColorPicker: (index, i, x) => {
        model = this.fromIndex(index);
        model.selected[i] = x.name;
        ChangeObjectColor(model.target[i], x.color);
      },
      setColorDropdown: (index, i) => {
        model = this.fromIndex(index);
        model.selected = i.name;
        ChangeObjectColor(model.target, i.color);
      },
      setMetallicColorDropdown: (index, i) => {
        model = this.fromIndex(index);
        model.selected = model.options[i].name;
        ChangeObjectColorMetallic(
          model.options[i].target,
          model.options[i].color
        );
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

    console.log("hey");
    if (this.updateState) this.updateState(this);
  }

  refreshMainColors() {
    var keys = ["interior", "exterior"];
    keys.forEach((k) => {
      this.model[k].forEach((item, i) => {
        if (item.options && item.options.length > 0) {
          const idx = item.options.map((c) => c.name).indexOf(item.selected);
          if (item.action === "setMetallicColorDropdown" && idx >= 0) {
            ChangeObjectColorMetallic(
              item.options[idx].target,
              item.options[idx].color
            );
          }
        }
      });
    });
  }

  onLockd(lock, state) {
    var id = lock.id;
    var keys = ["interior", "exterior"];
    keys.forEach((k) => {
      this.model[k].forEach((item, j) => {
        if (item.lock && item.lock.id === id) {
          item.lock.state = state;
          if (!item.lock.control && state)
            this.defaultAction({ key: k, i: j }, item);
        }
      });
    });

    if (this.updateState) this.updateState(this);
  }

  onLoad = () => {
    var keys = ["interior", "exterior"];
    var locks = [];
    resetGlobal();
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
        this.handler[item.action](index, 0, p_colors[0]);
        this.handler[item.action](index, 1, p_colors[p_colors.length - 1]);
      } else if (item.action === "setState") {
        this.handler[item.action](index, item.options.length - 1);
      } else if (item.action === "setModel") {
        this.handler[item.action](index, 0);
      } else if (item.action === "setMetallicColorDropdown") {
        this.handler[item.action](index, 0);
      } else if (item.action === "setColorDropdown") {
        this.handler[item.action](index, getPool(item.pool)[0]);
      }
    }
  }

  HandleVisibility(model, state) {
    ChangeObjectVisibility(model.target, state);
  }

  HandleColor(model, state) {
    ChangeObjectColor(model.target, state);
  }
}
