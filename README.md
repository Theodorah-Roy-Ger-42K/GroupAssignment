# DrivePNG Rentals

DrivePNG Rentals is a responsive, multi-page vehicle rental website. Visitors can learn about the service, browse a sample fleet, filter vehicles, send an enquiry, and view a registration form.

## Pages and Features

- **Home** (`index.html`): Brand introduction, featured vehicles, service highlights, and links to the fleet.
- **About** (`pages/about.html`): Company information, mission, service values, statistics, and team profiles with expandable details.
- **Vehicles** (`pages/vehicles.html`): Five vehicle listings with descriptions, daily rates, category filters, text search, and links to the contact page to enquire about booking.
- **Contact** (`pages/contact.html`): Enquiry form for name, email, enquiry type, and message, with inline validation and submission feedback.
- **Login/Register** (`pages/register.html`): Account registration form with browser-required fields, password length constraints, and terms acceptance.

All pages share site navigation and footer links. The layouts include responsive styles for smaller screens, and the navigation menu can be toggled on mobile.

## Technologies

- HTML5
- CSS3, including responsive media queries
- Vanilla JavaScript
- Local JPG and PNG image assets

No package installation, build step, or external JavaScript library is required.

## Run Locally

1. Clone or download this repository.
2. Open `index.html` in a modern web browser. Alternatively, serve the project directory with any static web server.

Keep the `pages`, `css`, `js`, and `images` directories in their current locations so the relative links and image paths continue to work.

## Project Structure

```text
.
├── index.html
├── pages/
│   ├── about.html
│   ├── contact.html
│   ├── register.html
│   └── vehicles.html
├── css/
│   ├── about.css
│   ├── contact.css
│   ├── register.css
│   ├── style.css
│   └── vehicles.css
├── js/
│   ├── about.js
│   ├── form-validation.js
│   ├── main.js
│   └── vehicles.js
├── images/
└── README.md
```

### JavaScript

- `js/main.js` toggles the mobile navigation and updates its accessible label and expanded state.
- `js/about.js` expands and collapses team member profile details.
- `js/vehicles.js` filters the fleet by vehicle type and matches search text against vehicle names and descriptions. It displays a message when there are no matches.
- `js/form-validation.js` validates contact form fields, displays field-level errors, focuses the first invalid field, and shows a success message for valid submissions.

## Image Assets

All image files are stored in `images/` and are referenced locally by the website.

| File | Use |
|---|---|
| `drivepng-logo.png` | Site branding and contact page logo |
| `drivepng-hero.png` | Home page hero image |
| `toyota-land-cruiser-79.jpg` | Home page featured Land Cruiser |
| `toyota-mark-ii.jpg` | Home page featured Toyota Mark II |
| `ford-ranger-raptor.jpg` | Home page featured Ford Ranger Raptor |
| `toyota-hilux.jpg` | About page hero image |
| `landcruiser79.jpg` | Fleet listing: Toyota Land Cruiser 79 Series |
| `mark2.jpg` | Fleet listing: Toyota Mark II |
| `raptor.jpg` | Fleet listing: Ford Ranger Raptor |
| `crv.jpg` | Fleet listing: Honda CR-V |
| `hilux.jpg` | Fleet listing: Toyota Hilux |
| `honda-crv.jpg` | Additional Honda CR-V image asset |

## Current Scope

This repository is a static front-end project. The contact form currently validates input and displays an on-page confirmation; it does not send or store enquiries. The registration form does not create or authenticate accounts, and there is no separate login page. Vehicle booking links take visitors to the contact page; online booking and payment are not implemented.

## Final Checks

Before submission, test the site in the target browsers and check:

- [ ] Navigation and page links work from both the home page and subpages.
- [ ] The mobile menu opens and closes and reports its expanded state.
- [ ] Vehicle search and each category filter show the expected listings, including the no-results state.
- [ ] Contact form validation and success feedback behave as expected.
- [ ] Registration required fields and password length are enforced by the browser.
- [ ] Every image loads, and the layout remains usable on mobile, tablet, and desktop.
- [ ] No JavaScript errors appear in the browser console.
- [ ] HTML and accessibility checks have been completed.

## AI Use Declaration

Generative AI was used to help prepare and refine this README based on the project files. The project team is responsible for reviewing the documentation and the final submission. No AI functionality is integrated into the website.

