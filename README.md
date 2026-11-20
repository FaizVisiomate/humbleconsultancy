# Humble Project Management FZ LLC — Website

Static website (HTML, CSS, JavaScript, Bootstrap 5). No build step: open `index.html` or upload the folder to any web host.

## Pages
- `index.html` – Home
- `about.html` – About Us (story, mission, licensed activities, journey)
- `services.html` – Services overview (links to each service page)
- `documents-clearing.html` – Documents Clearing & Visa Services
- `travel-tourism.html` – Travel & Tourism
- `manpower-recruitment.html` – Manpower & Recruitment
- `consultancy.html` – Project Management & Job Consultancy
- `careers.html` – Jobs & Recruitment (employers + job seekers, form, FAQ)
- `contact.html` – Contact details, form, map

## Edit contact details (one place)
Open `assets/js/main.js` and change the `SITE` object at the top: phone, WhatsApp, email, address, hours, social links.
They update automatically on every page.

## Before going live
- Check the numbers in the Home page stats (5000+, 1200+, 300+) and change them to real figures.

## WhatsApp
Every enquiry button opens WhatsApp with a ready-made message for that service.
To change a message, edit the `data-wa="..."` text on that button in the HTML.
The default message and the number are in `assets/js/main.js` (`WA_DEFAULT` and `SITE.whatsapp`).

## Forms
Forms need no server: on submit they open WhatsApp with the message pre-filled.
To send by email instead, add `data-send="email"` to the `<form>` tag.

## Animations
Animation styles are in `assets/css/animations.css`; the scripts that drive them are at the bottom of `assets/js/main.js`.
Visitors who turn on "reduce motion" on their device get a calm version automatically.
