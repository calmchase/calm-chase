import { getContext, setContext } from "svelte";

export class ParamsState {
  params: Map<string, string> | null = null;
  name: string = "";
  state: string = "";
  constructor() {}
  get(key: string) {
    if (!this.params || !this.params.size) {
      try {
        this.params = new Map(
          JSON.parse(localStorage.getItem("params") ?? "[]") as [
            string,
            string,
          ][],
        );
      } catch {
        this.params = new Map();
      }
    }
    return this.params?.get(key);
  }
  getAll() {
    if (!this.params || !this.params.size) {
      try {
        this.params = new Map(
          JSON.parse(localStorage.getItem("params") ?? "[]") as [
            string,
            string,
          ][],
        );
      } catch {
        this.params = new Map();
      }
    }
    return this.params;
  }
  append(key: string, value: string) {
    this.params?.set(key, value);
  }
  save(newParams: Map<string, string>) {
    this.params = new Map([...(this.params ?? new Map()), ...newParams]);
    localStorage.setItem("params", JSON.stringify([...this.params]));
  }
  getState() {
    return this.state.trim() ? this.state : "US";
  }
}

const PARAMS_KEY = Symbol("PARAMS");

export function setParamsState() {
  return setContext(PARAMS_KEY, new ParamsState());
}

export function getParamsState() {
  return getContext<ReturnType<typeof setParamsState>>(PARAMS_KEY);
}
