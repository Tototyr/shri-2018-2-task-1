import {initMap} from "./map";

const containerId = "map";
ymaps.ready(() => initMap(ymaps, containerId));