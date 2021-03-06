## Запуск

```
npm i
npm start
```
## Конец
При каждом запуске тестовые данные генерируются заново случайным образом.

# Описание багов
1. В файле  **./src/utils/backend-stub.js** ошибка при обращении к API. Приложение не запускается, так как в конфигурационном файле вебпак узаказан параметр предварительной загрузки `initBackendStub`. Решение проблемы следующее: 
    1. Использование операторов spread/rest возможно использовать только после транскомпиляции.
    2. Как один из  вариантов исправления можно сделать merge двух объектов путём `Object.assign(info, details)`. 
    3. Убрать `return {};`. Так как ответом на запрос является res.json(...). `return` в данном случае не требуется.
2. После этого приложение запускается, но появялется ошибка связанная с импортом функции ренерединга карты. Так как initMap функция, то ее необходимо импортировать в фигурных скобках. Решение `import { initMap } from "./map";`
3. Далее необходимо задать блоку с картой размеры. В нашем случае это **100% х 100%**. Добавляем в **public/index.css** нужные значения.
4. Затем необходимо в файле **./src/map.js** привязать менеджер объектов к самой карте.
5. Далее, в `mapServerData` перепутаны координаты. Необходимо поменять местами широту и долготу.
6. Кластеры отображаются, осталось добавить отображение вложенных элементов на балуне. Убираем принудительный закрас кластера.
7. Затем в файле **./src/detail.js** при создании балуна убрать стрелочные функции, так как стрелочные функции не создают собственный контекст, а используют окружающий, а согласно документации, методы `build` и `clear` должны иметь собственный контекст, то решением будет просто заменить стрелочные функции на обычные.
8. Далее необходимо в настройках chart.js, а именно, в `yAxes` заменить максимальное значение на минимальное. 
9. Привести код к общему стайлгайду, поправить отступы.