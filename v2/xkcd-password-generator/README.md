# Kennedy Brother's Construction - Website Client

A single page, reactive, javascript web app for Kennedy Brother's Construction.

Please read through this entire document to learn about getting started and maintaining the project.

## Getting Started

- Clone the project to a local workspace of your choice. SSH Key method is reccomended.
- **`SSH`**: `git@gitlab.com:kb-construction/kb-construction-client.git`
- :point_right:[LEARN MORE](https://gitlab.com/help/ssh/README#gitlab-and-ssh-keys) about creating SSH keys in GitLab.

### Prerequisites

- Node `>=10.8.0`
- NPM `^6.2.0` -or- Yarn `^1.9.4`

### Installing

- From your CLI, navigate to the project root and run `npm install` -or- `yarn` and wait for installation to complete.

- To launch the webserver and serve the app locally, run `npm start` -or- `yarn start`

- Drink Beer and get coding. :beers:

## Running the tests

This project uses `Jest` for unit tests. Linting is performed by both `ESLint` and `Prettier`.

### Break down into unit and end to end tests

`@TODO` Explain what these tests test and why

```
Give an example
```

### Linting and Coding Style

- ESLint can be run with `yarn lint`.

- Prettier can be run to maintain coding style. It's highly recommended to use an IDE extension to run [Prettier](https://github.com/prettier/prettier) on file saves. Otherwise, it can be run from your CLI by running `yarn prettify` -or- `npm prettify`.

Prettier IDE extensions:

- [Vim](https://github.com/prettier/prettier#vim)

- [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (add `"editor.formatOnSave": true` and `"prettier.eslintIntegration": true` to your user settings)

- [Atom](https://github.com/prettier/prettier-atom)

- [Emacs](https://github.com/prettier/prettier/tree/master/editors/emacs)

- [Sublime](https://packagecontrol.io/packages/JsPrettier)

- [JetBrains](https://github.com/prettier/prettier#jetbrains)

## Deployment

To create an optimized production build...

run `yarn build` -or- `npm build`. This will create a `/build` directory at the root of the project which contains all the compiled code and static assets to be deployed.

- Now you can serve the build folder on a production web server or run it locally to demo or test...

  > `yarn global add serve`

  > `serve -s build`

- :point_right: Learn more about deployment and other options [HERE](http://bit.ly/2vY88Kr)

## Built With

- [React](https://github.com/facebook/create-react-app) - The web framework used _(Bootstrapped From Create React App)_
- [Redux](https://redux.js.org/) - State management
- [Emotion](https://emotion.sh/) - CSS-in-JS

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://gitlab.com/kb-construction/kb-construction-client/tags).

## Authors

- **Burton Podczerwinski** - _Initial work_ - [BPod](https://github.com/bpod)

`@TODO` ADD Contributors

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

Copyright © 2018 Burton Podczerwinski <befreestudios@gmail.com>
This work is free. You can redistribute it and/or modify it under the
terms of the `WTFPL`, Version 2,
as published by Sam Hocevar.

See the [LICENSE.md](COPYING.md) file for more details.

## Acknowledgments

`@TODO` Add Acknowledgments here
