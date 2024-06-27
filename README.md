# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Приемочное тестирование

- Пользователь может авторизоватся или зарегестрироватся в приложении. При этом валидируются поля: нельзя ввести пустые значения. Если с сервера приходят ошибки, то ошибка отображается на странице.
- Авторизованный пользователь может смотреть доску с карточками.
- Авторизованный пользователь может создать новую карточку с задачей.
- Авторизованный пользователь может просматривать существующие задачи.
- Авторизованный пользователь может редактировать существующие задачи.
- Авторизованный пользователь может выйти из аккаунта.
- Если авторизованный пользователь попытается ввести некоректный адрес, его перенаправит на страницу с ошибкой.
- При создании и редактировании задач, ошибки отображаются в соответсвующем поле.
