# Project 1: Local Business Service Portal

## Overview
Find trusted local services and track your requests.

## Technology
- HTML5 semantic structure
- CSS3 responsive layout and focus states
- Vanilla JavaScript for interactions and client-side validation
- Browser `localStorage` for demonstration data

## Run locally
1. Download or clone this repository.
2. Open `index.html` in a modern browser. No build step or package installation is required.
3. Try the forms and interactions. Data is stored only in the current browser.

## Main features
Responsive service catalogue, validated enquiry form, generated request ID and request status lookup.

## Validation and test checklist
- [ ] Open the page on desktop and a narrow mobile viewport.
- [ ] Submit the main form with all fields empty; confirm validation message appears.
- [ ] Submit an invalid email; confirm it is rejected.
- [ ] Submit valid sample data; confirm success feedback.
- [ ] Refresh the page and confirm saved demo data persists where applicable.
- [ ] Try an unknown tracking ID / unmatched search and confirm a useful empty state.
- [ ] Use keyboard Tab navigation and confirm visible focus.
- [ ] Check browser console for errors.

## Scope and limitations
This is a front-end prototype. Data is stored locally in the browser and is not shared with an administrator or other devices. There is no real authentication, backend API, database, email delivery, payment processing or production deployment. Do not enter real personal or sensitive information.

## Future improvements
Add a secure backend API, database, authentication and role-based authorization; add server-side validation, automated tests, accessibility audit and production hosting.

## Author
Raghavi — Web Development Internship (student project)
