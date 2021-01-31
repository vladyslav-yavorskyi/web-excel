import { DomListener } from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.subscribe = options.subscribe || [];
    this.store = options.store;
    this.unsubscribers = [];

    this.prepare();
  }
  // Setting our component for init
  prepare() {}

  // Return template of components
  toHTML() {
    return '';
  }
  // Notifies listeners about event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }
  // Subcribe on event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribers.push(unsub);
  }

  $dispatch(action) {
    this.store.dispatch(action);
  }

  // comes only fiels we subscribed
  storeChanged() {}

  isWatching(key) {
    return this.subscribe.includes(key);
  }

  // Init our component
  // Add DOM listeners
  init() {
    this.initDOMListeners();
  }
  // Remove component
  // Clear listeners
  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach((unsub) => unsub());
  }
}
