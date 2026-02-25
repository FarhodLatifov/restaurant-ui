# Restaurant Massimo

Веб-приложение на `Next.js` (App Router) для демонстрации food-ordering интерфейса: каталог, карточка товара, корзина, контактная форма и служебные страницы.

## Технологии

- `Next.js 16` + `React 19`
- `TypeScript`
- `Tailwind CSS v4`
- `Redux Toolkit` + `react-redux`
- `react-countdown`

## Что реализовано

- Главная страница с промо-блоками и featured товарами.
- Динамические страницы категорий: `/menu/[category]`.
- Динамическая страница товара: `/product/[id]`.
- Корзина с глобальным состоянием через Redux Toolkit:
  - добавление товара (`Add to Cart`)
  - учет количества и опций
  - удаление позиций
  - расчет subtotal/total
  - персист в `localStorage`
- Контактная страница с клиентской формой и валидацией.
- Адаптивная навигация (desktop/mobile menu).

## Структура проекта

- `src/app` — роуты App Router и layout.
- `src/components` — UI-компоненты.
- `src/store` — Redux store, slice и typed hooks.
- `src/data.ts` — mock-данные товаров и категорий.

## Запуск локально

```bash
npm install
npm run dev
```

Открой: `http://localhost:3000`

## Полезные команды

```bash
npm run lint
npm run build
npm run start
```

## Примечания

- Данные товаров сейчас моковые (`src/data.ts`).
- Авторизация/заказы пока демонстрационные и не подключены к backend API.
