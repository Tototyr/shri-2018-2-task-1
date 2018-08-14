import {mapServerData} from "./mappers";

export function loadList() {
  return fetch('/api/stations')
    .then((response) => response.json())
    .then((data) => mapServerData(data));
}

export function loadDetails(id) {
  return fetch(`/api/stations/${id}`)
    .then((response) => response.json())
    .then((data) => data);
}
