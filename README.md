## Як запустити?
Просто запустіть файл /build/index.html
Не потрібно встановлювати залезності і запускати веб сервер.

## Якщо ви захочете запустити веб сервер
Для збірки проекту використовував react-create-app. Але він збирає проект так,
щоб він був в корені веб серверу і тому я виправив шляхи до файлів, замінивши 
в файлі build/index.html шляхи - з 'src="/static/js/main.c4fd2e67.js"' і 'href="/static/css/main.f5f71332.css"'
 на 'src="./static/js/main.c4fd2e67.js"', 'href="./static/css/main.f5f71332.css"'.
 Добавив крапку - тепер можна запускати без веб серверу

## Як працює компонент?
Всі дані зберігаються в state основного компонента Calendar. І якщо потрібно щось замінити в state,
то це можна зробити за допомогою функцій, які міняють state а не напряму. Ці функції створені в основному компоненті і прокидуються в компоненти нижче. Це чимось подібне до redux, але зпрощено.
Після кожної зміни state дані серіалізуються і зберігаються в localStorage.

## Стандартні параметри
Компонент має три опціональні параметри: 
1. view(задати дефолтний вигляд)
2. currentDate(початкова дата календаря)
3. events(список івентів)
перший раз, коли запускається календар, дані івентів беруться з props. Потім це значення ігнорується і 
дані беруться тільки з localStorage.

## Що особливого в моїй роботі?
Для підключення функціональних компонентів я використав техніку яка дозволяє обійти створення
всіх lifecycle-методів реакта, це пришвидшує рендер. [Лінк](https://medium.com/missive-app/45-faster-react-functional-components-now-3509a668e69f)
Також я використав PureComponent замість Component - він робить не глибоку перевірку змін.
І для покращення юзабіліті до івентів можна добавляти emoji 😎 👍

### P.S. Хотілось би почути фідбек по моїй роботі - що можна покращити
