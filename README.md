# Wolox Frontend Technical Test

<p align="center">
  <a href="https://www.wolox.com.ar/">
    <img src="https://s3.amazonaws.com/cdn.wolox.com/icons/ic_logo.svg" alt="Logo WOLOX" width=200>
  </a>

  <p align="center">
    Awesome Frontend Technical Test
  </p>
</p>

## Table of contents

- [Wolox Frontend Technical Test](#wolox-frontend-technical-test)
  - [Table of contents](#table-of-contents)
  - [Quick start](#quick-start)
  - [Project structure](#project-structure)
  - [Components](#components)
  - [Pages](#pages)
  - [Contexts](#contexts)

## Quick start

This application has been deploy with Firebase Hosting

- <https://wolox-frontend.web.app/>

## Project structure

- **\_\_test\_\_** Folder with all components tests.
- **Components** All components [see the list](#components).
- **Contexts** Here you can find the unique UserContext which handles authentication.
- **Locales** Language files (es/en) and i18n config file (locale.js).
- **Pages** Page components (Home, Login and TechList).
- **Services** App services for requesting info (Wolox API).
- **Styles** Main SCSS Files (Theme, Reset, Fonts, etc).
- **Utils** Some usefull utils javascript functions.

## Components

- <**Card** />: Render a info card with optional image. **Props:**

  - **className**: CSS aditional classnames.
  - **title**: Title for card, also used for image alt
  - **image**: Optional image full url.
  - **children**: React Component to render inside card container.

- <**CardList** />: Render a grid of Card items. **Props:**

  - **data**: Object of {className, title, image, content}.

- <**ErrorBoundary** />: Class Component for handle global \<App /> errors.
- <**FilterContent** />: Simple footer component.
- <**Header** />: Simple header component with Menu component call.
- <**Hero** />: A hero component which render right side image and left side HTML content.
  - **images**: Relative url images for render at right side with srcset compatibility.
  - **type**: Type of image (icon or image).
  - **title**: Title for image alt.
  - **className**: Aditional component classnames.
  - **children**: React Component to render inside the left side.
- <**LoginForm** />: Simple React-Hook-Form component to do sign in with using UserContext login(email,password,save) function.
- <**Menu** />: Responsive menu, uses MenuData.json file to render menu links, can render anchor links and react-router links.
  - **location**: this prop comes from withRouter HOC.
- <**Menu** />: Responsive menu, uses MenuData.json file to render menu links, can render anchor links and react-router links.
- **Portal**: Simple react component which renders another react component outside \<App> root div.
- **RouteComponent**: This is a custom \<Route> react-router component, which handles authentication flag (restricted prop) and redirect to default route on non-authorized visitor.
  - **component**: Page Component to be render.
  - **restricted**: Authorized only flag.
  - **location**: location prop from router.
  - **...rest**: All another props propagation.
- **Svg**: This component render a inline SVG choiced from id prop.
- **TwoColumns**: This component render a two columns divs with posibility to render an background image or color and HTML content.

## Pages

- **Home** Default landing page, the content of this page renders from /locales/es/page.js file content.
- **Login** Login form page.
- **TechList** only authorized page with a request to get list of technologies.

## Contexts

- **UserContext** This context handle authentication for the user throught all APP:
  - Functions:
    - **auth:** string of login token flag.
    - **login(email, password, save)**: login function, the save parameter, use localStorage to save the token retrived from login service.
    - **logout()**: removes the auth token state and the localStorage auth variable.
