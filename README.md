# getshop-test-app

## Микросайт состоит из серии экранов:
### промо-видео с баннером (верстать не обязательно)
### экран ввода номера (с экранной клавиатурой)
### финальный инфо-экран
##### Необходимо реализовать вёрстку экранов микросайта, а также навигацию и механизм ввода номера при помощи экранной клавиатуры. Кнопка «Получить предложение» должна становиться доступной для выбора (enabled) только при полностью введенном номере и согласии с обработкой ПД. Валидацию номера проводить не нужно, достаточно проверять, что номер введен полностью.
##### Неинтерактивные статичные элементы (включая текст) разрешается не верстать, а использовать как часть (фоновой) картинки. 


#### Для первого экрана добавить видео и баннер, появляющийся через 5 секунд от начала проигрывания ролика.

### Навигация должна осуществляться также и с клавиатуры:
стрелки для навигации между кнопками;
цифры и BACKSPACE для быстрого ввода номера;
ENTER для выбора кнопки;


## Требования:
Используйте React (использование TypeScript будет плюсом)
Если сочтете нужным, можете использовать сторонние библиотеки.
Разрешение микросайта фиксированное, 1280х720.


## На выходе ожидается:
Ссылка на github/gitlab с осмысленной историей коммитов
Ссылка на развернутую версию микросайта


## Бонусные задания:
Переход из экрана с видео и баннером должен паузить видео. Переход обратно должен продолжать воспроизведение.
добавить валидацию номера при помощи открытого сервиса (например, https://numverify.com/documentation).
Вместо финального инфо-экрана сверстайте экран со слайдером. Управление слайдером осуществляется также и с помощью клавиатуры. Пример 