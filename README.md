## :open_file_folder: Установка

-   установите NodeJS (если требуется) и Yarn
-   установите gulp глобально: yarn global add gulp-cli
-   установите bem-tools-core глобально: yarn global add bem-tools-core

# Working with git_mode

To use shortcuts you enter git_mode first.

-   To enter git_mode, open a terminal and press `g` `<Enter>`.
-   To exit git_mode, close the terminal or enter `ge`.

| Key              | Description  |
| ---------------- | ------------ |
| `a or add `      | git add      |
| `s or status`    | git status   |
| `c or commit`    | git commit   |
| `push`           | git push     |
| `d or diff`      | git diff     |
| `grep or search` | git search   |
| `m or merge`     | git merge    |
| `b`              | git branch   |
| `remote`         | git remote   |
| `pull`           | git pull     |
| `i or init`      | git init     |
| `clone`          | git clone    |
| `ch or checkout` | git checkout |

## :open_file_folder: Файловая структура

```
gulp-scss-starter
├── dist
├── gulp-tasks
├── src
│   ├── blocks
│   ├── fonts
│   ├── img
│   ├── js
│   ├── styles
│   ├── views
│   └── .htaccess
├── gulpfile.babel.js
├── webpack.config.js
├── package.json
├── .babelrc.js
├── .bemrc.js
├── .eslintrc.json
├── .stylelintrc
├── .stylelintignore
└── .gitignore
```

-   Корень папки:
    -   `.babelrc.js` — настройки Babel
    -   `.bemrc.js` — настройки БЭМ
    -   `.eslintrc.json` — настройки ESLint
    -   `.gitignore` – запрет на отслеживание файлов Git'ом
    -   `.stylelintrc` — настройки Stylelint
    -   `.stylelintignore` – запрет на отслеживание файлов Stylelint'ом
    -   `gulpfile.babel.js` — настройки Gulp
    -   `webpack.config.js` — настройки Webpack
    -   `package.json` — список зависимостей
-   Папка `src` - используется во время разработки:
    -   БЭМ-блоки: `src/blocks`
    -   шрифты: `src/fonts`
    -   изображения: `src/img`
    -   JS-файлы: `src/js`
    -   страницы сайта: `src/views/pages`
    -   SCSS-файлы: `src/styles`
    -   HTML-файлы: `src/views`
    -   конфигурационный файл веб-сервера Apache с настройками [gzip](https://habr.com/ru/post/221849/) (сжатие без потерь): `src/.htaccess`
-   Папка `dist` - папка, из которой запускается локальный сервер для разработки (при запуске `yarn run dev`)
-   Папка `gulp-tasks` - папка с Gulp-тасками
