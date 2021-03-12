# Extending CluedIn UI
## Prerequisites
* You will need node v10 or greater installed locally.
* You will need a CluedIn personal access token (PAT) in order to access the NPM feeds.
* You will need an instance of CluedIn running for your backend.
## Getting Started
1. Ensure your PAT token is base64 encoded and exposed through an environment variable called `NPM_TOKEN`.
2. Clone this repo to a local folder.
3. In the root of the folder install dependencies

   `npm i`.
4. Build and run the application locally

   `npm run start`.
5. When the build is ready, visit

   `http://foobar.cluedin.test:3000/`

   to view the application, replacing _foobar_ with your organisation name.

Once up and running further docs can be followed below.

The code has examples of all the extension points. These examples can be amended/removed as appropriate for your needs.
## Further Reading
1. [Adding a main menu item (pillar)](./docs/PILLAR.md)
2. [Adding modules to your pillar](./docs/MODULE.md)
3. [Custom display for entity types](./docs/ENTITY_TEMPLATES.md)
4. [Building a docker image](./docs/BUILD.md)
