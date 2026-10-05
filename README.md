# Skylar Robinson — Engineering Portfolio

A responsive static portfolio with a project gallery, category filters, and accessible project detail dialogs. No build step, dependency installation, account, or API key is required to view the site.

## Preview

Open `index.html` in a browser. For a local server, run `python3 -m http.server 8000` in this directory and visit `http://localhost:8000`.

## Add your work

1. Put screenshots, renders, photos, and PDF reports into `assets/`. Use simple filenames with hyphens.
2. Add project entries to the `projects` array in `projects.js`, using its commented example.
3. Add your email, LinkedIn, GitHub profile, and resume path in `contact`. Blank contact fields are hidden.
4. Review the introduction and About text in `index.html` for accuracy before publishing.

The draft includes six project pages: Aqua Research electrolytic cell housing, Digital Image Correlation, electric ATV powertrain, PVC scooter design and testing, bottling station and Geneva drive, and shifter fork assembly. The two team reports are included as Word downloads, with extracted CAD images, drawings, analysis screenshots, and a prototype photo displayed in the site. The supplied motion video and drawing PDFs are also included. The hero uses the supplied Aqua Research housing CAD image. Project text describes only what the files establish; confirm your individual role on the team projects, design ownership, and any additional outcomes before expanding the case studies.

## GitHub Pages

This folder is ready to become a GitHub Pages repository. It uses relative asset paths, so it supports both a profile site and a project site. The included `.nojekyll` file makes it suitable for direct static hosting. GitHub access and a target repository are still needed to publish it; this draft has not been deployed.

Upload the contents of this folder, including `index.html` at the repository root, rather than an extra enclosing folder. Use GitHub Pages' branch publishing option for the branch and root directory containing the site.

## Files

- `index.html`: layout, responsive styles, hero illustration, and gallery behavior.
- `projects.js`: project information and contact links.
- `assets/`: your project files.
- `.nojekyll`: static hosting marker.

The site loads no external fonts, analytics, or third-party scripts.

The DIC project and internship experience section are based on Skylar_Robinson_Resume(3).pdf. DIC uses a typographic card without a project image. Internship dates and in-progress work reflect the supplied resume and should be reviewed before publishing.

A dedicated senior-project section describes the Raytheon Autonomous Vehicle Competition UAV effort, with an in-progress label, current requirements and research work, planned deliverables, and a download of the supplied September 2026 scope of work. It does not claim completed flight or mission verification.


