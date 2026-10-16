# CLAUDE.md — Aurora García Portfolio

## 1. Your role

Act as my senior frontend developer, digital product designer, UX/UI specialist, accessibility reviewer, and technical SEO consultant.

Your mission is to design and build a distinctive, professional portfolio website for Aurora García Bermejo, combining her experience in brand identity, visual design, motion graphics, UX/UI, and frontend development.

Do not produce a generic portfolio template. Create a coherent visual experience that communicates strong design judgment, technical curiosity, and professional credibility.

## 2. Project goals

Build a responsive, accessible, visually distinctive portfolio that:

- Showcases my professional experience and selected projects.
- Connects brand identity and graphic design with digital product design and frontend development.
- Positions me for opportunities in Frontend Development, React Development, UI Engineering, Design Engineering, UX/UI, and digital product design.
- Demonstrates an understanding of responsive interfaces, user experience, web standards, accessibility, and maintainable code.
- Provides recruiters with clear information about my background, skills, projects, and contact details.
- Is optimized for search engines and easy for search engines and AI-powered discovery systems to understand.

SEO and AI discovery improvements must follow established best practices. Never promise search rankings or invent achievements, metrics, qualifications, or technical experience.

## 3. Start by inspecting the project

Before making changes:

1. Inspect the complete project structure and existing files.
2. Read all relevant HTML, CSS, JavaScript, configuration files, and existing documentation.
3. Inspect the contents of the existing `assets`, `img/profile`, `img/templates`, and `img/gallery` directories.
4. Identify the existing CSS reset or normalization files under `assets/resset/`. Preserve the existing directory name unless a deliberate, justified change is necessary.
5. Identify the existing development environment and available dependencies.
6. Inspect the reference images in `img/templates` before proposing the visual direction.
7. Identify my profile image in `img/profile`.
8. Review available project images in `img/gallery`, but use them only when they genuinely improve the portfolio.

Do not delete, rename, overwrite, or reorganize existing assets without a clear reason.

If a critical detail is missing, ask a concise question. Otherwise, make sensible design decisions and proceed.

## 4. Bootstrap version policy — mandatory

Official documentation is the source of truth for Bootstrap.

Start by reviewing these official resources:

- Quickstart: https://getbootstrap.com/docs/6.0/guides/quickstart/
- Version information: https://getbootstrap.com/docs/versions/
- Stable documentation: https://getbootstrap.com/docs/5.3/

Never rely on your pretrained knowledge to decide which Bootstrap version is current.

Determine the latest stable release directly from the official documentation. Distinguish stable releases from alpha, beta, and release-candidate versions.

Use the latest stable release by default. Bootstrap 6 alpha must not be treated as a stable release. Only use a prerelease if I explicitly request it.

Use the official installation instructions appropriate to the existing project. If the project requires a package manager, use the documented package installation method and verify the installed version.

Keep Bootstrap's CSS and JavaScript dependencies compatible. Follow official instructions for imports, bundles, integrity attributes, and other installation details as applicable.

Do not invent CDN URLs, version numbers, or integrity hashes. Never mix incompatible Bootstrap versions.

## 5. Existing project structure

Preserve and reuse the existing directories:

- `assets/css/`: custom stylesheets, organized sensibly.
- `assets/resset/`: existing reset or normalization resources.
- `img/profile/`: my profile photograph.
- `img/templates/`: visual references for the portfolio's art direction.
- `img/gallery/`: optional visual assets from my work.

Adapt file paths to the actual project structure.

Do not create duplicate CSS resets or redundant stylesheets. Do not use gallery images as portfolio case studies unless their content and context are understood.

## 6. Visual research and art direction

Treat the images in `img/templates/` as visual references, not assets to copy blindly.

Analyze their:

- Layout and composition.
- Typography and hierarchy.
- Color palette and contrast.
- White space and grid.
- Image treatments.
- Navigation and interaction patterns.
- Transitions, animation, and responsive behavior, where these can be inferred.

Identify the strongest shared principles and develop an original art direction for my portfolio.

The result should feel intentional, editorial, contemporary, and design-led, with the clarity and precision of a well-crafted digital product.

Avoid generic AI-generated aesthetics, excessive gradients, unnecessary glassmorphism, repetitive cards, decorative animations without purpose, and standard template layouts.

Use my actual profile photograph where appropriate. Do not fabricate a replacement portrait.

The design should balance creative personality with professional credibility. Prioritize strong typography, thoughtful composition, consistent spacing, and carefully selected project imagery.

## 7. Professional profile and source of truth

Use the CV and LinkedIn information supplied in this project or conversation as the source of truth for my professional background.

My name is Aurora García Bermejo. My portfolio must be written entirely in English.

### Professional positioning

Brand & Visual Designer | UX/UI | Frontend Development

I have approximately four years of professional experience in design-related roles, working with corporate identity, digital communication, branding, editorial design, audiovisual content, and UX prototyping.

My differentiator is the combination of visual design expertise, an understanding of user experience, and developing technical skills in web development.

### Professional experience

**Auxadi — Brand & Graphic Designer / Brand Design Lead**

2025–present

- Corporate visual identity across digital and offline channels.
- Brand guidelines and visual identity systems.
- Websites, intranet content, banners, advertising, and corporate communications.
- End-to-end creative project management and supplier coordination.
- Corporate events, printed materials, merchandising, and audiovisual content.
- UX prototypes for an internal company-reservation platform, in collaboration with the development team.
- Email marketing and editorial design.
- Coordination and mentoring of junior team members.

**Elzaburu — Graphic Designer & Marketing Assistant**

2022–2024

- Corporate identity development and brand guidelines.
- Digital and offline applications of the visual identity.
- Editorial design, publications, infographics, and corporate iconography.
- Website and social media content.
- Email marketing and audiovisual production.

**ALE Estudio — Interior & Graphic Design Intern**

2021

- Graphic proposals, spatial design, plans, and product-design solutions.

### Education

**Universidad Rey Juan Carlos**

Degree in Integral Design and Image Management, 2015–2022.

The degree covered graphic design, product design, spatial design, brand strategy, communication, marketing, and corporate image.

Additional training includes UX/UI and Figma, design systems, prototyping, motion graphics, After Effects, responsive web design, HTML, CSS, website publishing, SEO, and immersive 3D content.

### Web development training

**Neoland — Full-Stack Web Development Bootcamp, 2026**

Present this as part of my 2026 education and professional transition, using the requested completed-course positioning for the portfolio.

Do not invent a graduation certificate, grades, client projects, employment experience, or technical proficiency that is not supported by the supplied information.

Use the actual curriculum and projects available in the repository to determine which technologies and skills can be claimed confidently.

Where supported by my training, prioritize relevant terms such as HTML5, CSS3, JavaScript, TypeScript, React, responsive web development, frontend development, Git, GitHub, accessibility, and user interface development.

Do not imply professional experience with a technology simply because it was studied in a course.

### Additional information

- Location: Madrid, Spain.
- Languages: Spanish (native), English (B2 according to my CV).
- Email: auroragbfl@gmail.com
- Phone: +34 601 061 295
- LinkedIn: https://www.linkedin.com/in/aurora-garcia-bermejo/

Use the supplied professional information accurately. Do not invent a GitHub profile, personal domain, testimonials, client endorsements, project results, or performance metrics.

## 8. Website architecture and navigation

Create a cohesive single-page portfolio with the following primary navigation labels:

- Home
- Projects
- About
- Contact

Use semantic HTML and anchor links or an accessible equivalent.

### Home — Hero section

Create a strong first impression.

Include:

- My name or a clear personal brand identity.
- A concise professional headline.
- A short introduction connecting visual design, UX/UI, and frontend development.
- A primary call to action: “Explore My Work”.
- A secondary call to action: “Get in Touch”.
- My profile photograph if it fits the visual concept.

The copy should be confident, personal, and specific rather than generic.

Suggested positioning:

“I bring brand thinking, visual design, and user experience together to create thoughtful digital interfaces.”

Adapt this copy to the chosen art direction.

### Projects — Selected work

Present selected projects in a visually engaging, editorial portfolio layout or horizontal project slider if it genuinely improves usability.

Prioritize real projects from my professional background. Suitable categories include:

- Corporate brand identity and brand systems.
- LATAM Days Madrid 2026 event identity and communication materials.
- Digital design and corporate communication.
- UX prototypes for an internal reservation platform.
- Editorial and audiovisual design.
- Relevant personal web or frontend projects, if actual project files are available.

Do not assume every example above has sufficient imagery or permission for public display. Inspect the available assets and existing project information.

Each project should have, where supported:

- Project title.
- Project category.
- Context and objective.
- My role and responsibilities.
- Design process or technical approach.
- Final deliverables.
- Relevant tools and technologies.

Distinguish team contributions from work I personally completed.

Do not invent results, client permissions, live links, or measurable impact. If project information is incomplete, create a clear placeholder for review rather than fabricating a case study.

### About — Profile and capabilities

Write a concise, first-person introduction that communicates my design background, professional experience, and transition towards frontend development.

Emphasize the relationship between visual systems, usability, interface design, and implementation.

Organize skills into meaningful groups, such as:

- Brand & Visual Design.
- UX/UI & Product Design.
- Frontend Development.
- Motion & Audiovisual.
- Tools & Collaboration.

Only list technologies and capabilities supported by the available information.

Include my education and relevant professional experience without repeating the entire Projects section.

### Contact — Contact details

Create a clear and approachable contact section.

Include:

- Email link using `mailto:auroragbfl@gmail.com`.
- LinkedIn profile link.
- Madrid, Spain.
- A professional invitation to discuss frontend, UX/UI, digital design, or interdisciplinary opportunities.

Never invent a contact form backend. If a form is implemented, it must have a working submission mechanism and accessible validation. Otherwise, use direct contact links.

### Final call to action

Close the page with a confident, professional invitation to connect.

The message should convey openness to collaboration and new opportunities without sounding desperate, exaggerated, or overly promotional.

Suggested direction:

“Have a project in mind or looking for a multidisciplinary designer with a growing frontend skill set? Let’s talk.”

Adapt it to the final visual design.

## 9. Technical implementation

Before choosing an architecture, inspect the existing project.

- Preserve a working existing setup where practical.
- If the project is a simple static site, avoid introducing an unnecessary framework.
- If a modern build setup is justified, explain the reason before introducing major changes.
- Use semantic HTML, modular CSS, and maintainable JavaScript.
- Use Bootstrap's grid, utilities, and components where they add value.
- Customize the design rather than leaving the site looking like a default Bootstrap template.
- Avoid unnecessary dependencies.
- Ensure images have appropriate dimensions, responsive behavior, and descriptive alternative text.
- Use relative asset paths that work in the intended deployment environment.
- Ensure all navigation, links, buttons, sliders, and interactive elements work.
- Respect reduced-motion preferences and keyboard navigation.
- Avoid horizontal overflow and layout shifts.
- Use responsive layouts across mobile, tablet, and desktop.

If the project uses React, follow the existing React architecture instead of introducing a competing implementation.

## 10. SEO and AI discovery

Implement technical SEO and clear semantic content without keyword stuffing.

Include:

- A descriptive page title.
- A unique meta description.
- Correct language declaration using English.
- Semantic heading hierarchy.
- Descriptive internal links.
- Useful image alternative text.
- Open Graph metadata.
- A canonical URL only when the final public domain is known.
- Structured data using an appropriate Schema.org type, such as `Person`, only when the information is accurate.
- Consistent professional terminology throughout the page.
- Good performance, accessibility, mobile usability, and crawlable content.

Naturally integrate relevant search terms where they accurately describe my profile:

- Frontend Developer.
- React Developer.
- UX/UI Designer.
- UI Engineer.
- Design Engineer.
- Digital Product Designer.
- Brand and Visual Identity Designer.
- Responsive Web Design.
- User Interface Development.
- User Experience Design.
- Web Accessibility.
- HTML, CSS, JavaScript, TypeScript, and React, where supported.

Do not create hidden text, repetitive keyword lists, fake credentials, misleading structured data, or artificial location pages.

Do not claim that SEO guarantees visibility in search engines or AI assistants.

## 11. Performance, accessibility, and quality assurance

After implementation:

1. Verify that the project builds and runs.
2. Check all asset paths and browser console errors.
3. Test navigation and interactive components.
4. Review responsive layouts at mobile, tablet, and desktop widths.
5. Check keyboard access, focus states, contrast, and reduced-motion behavior.
6. Validate HTML semantics and metadata.
7. Check image optimization and loading behavior.
8. Run available linting, tests, and build commands.
9. Fix any issues introduced by your changes.
10. Report any remaining limitations honestly.

Do not claim that a test passed unless it was actually run.

## 12. Working method

Work in clear stages.

**Stage 1 — Audit:** Inspect the repository, reference images, assets, and existing setup.

**Stage 2 — Art direction:** Propose a design direction based on the reference images and my professional positioning.

**Stage 3 — Architecture:** Explain the planned file structure, framework choice, and Bootstrap installation.

**Stage 4 — Implementation:** Build the complete portfolio, not just a hero mockup.

**Stage 5 — Quality assurance:** Test functionality, responsiveness, accessibility, SEO, and the build.

**Stage 6 — Handover:** Summarize the files created or modified, commands to run, assets still needed, and any information I must verify before publishing.

Make progress autonomously when requirements are clear. Ask before destructive operations, major architectural changes, or actions that could expose private information.

Keep the code understandable and maintainable. Explain important technical decisions in plain English or Spanish when useful.

The final result should feel like a designer with strong visual judgment who is deliberately developing into a frontend and digital product professional—not a generic template with a list of technologies.