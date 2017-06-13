# React Project Starter

Uses React, React Router, Webpack, Babel and Yarn.

Duplicate as a new repo, or build from scratch. Instructions below...


## Built-in commands

* Install dependencies (required)
```
yarn install
```

* Add new dependency
```
yarn add [package-name]
```

* Add new dependency for development only
```
yarn add [package-name] --dev
```

* Start dev server and load page
```
yarn start
```

* Build for production
```
yarn run build
```

* Initialize Firebase Project
```
yarn run firebase-init
```

* Deploy to firebase
```
yarn run deploy
```


## Duplicate

Create a new repo on github, then clone the template.

```
git clone --bare git@github.com:gooWee/react-template.git
```
```
git push --mirror [new repo]
```
```
cd..
```
```
git clone [new repo]
```


## Build from scratch

1. Make a new project folder and cd in

2. Run `yarn init`

3. Add React, ReactDOM and React Router
```
yarn add react react-dom react-router-dom
```

4. Create a file in root called `.gitignore`, and add the following:
```
node_modules
dist
.DS_store
```

5. Create an `app` folder inside root and add `index.css` and `index.js`

6. Create a `components` folder inside the `app` folder

7. Create an `App.js` file inside the `components` folder

8. Import React, React Router, and Home and Nav components in `App.js`
```
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
```

9. Create top level component with routing in `App.js`
```
class App extends React.Component {
  render() {
    return (
      <Router>
      <div className='container'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route render={function() {
            return <p>Not found</p>
          }} />
        </Switch>
      </div>
    </Router>
    )
  }
}
```

10. Export App
```
module.exports = App;
```

11. Create a `Nav.js` in `components` and add the following code
```
import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
 return (
   <ul className='nav'>
     <li>
       <NavLink exact activeClassName='active' to='/'>
         Home
       </NavLink>
     </li>
   </ul>
 )
}

module.exports = Nav;

```

12. Add a `Home.js` component in `components` and add a boilerplate component
```
import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return (

    )
  }
}

module.exports = Home;
```

13. Import React, React-DOM, App, and css to `index.js`
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
```

14. Render the component to the DOM.
```
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

15. Add some font control to `index.css`
```
body {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;
}
```

16. Add Webpack and Babel to your project.
```
yarn add --dev babel-core babel-loader babel-preset-env babel-preset-react css-loader style-loader html-webpack-plugin webpack webpack-dev-server
```

17. Create a `webpack.config.js` file in root, and add the config.
```
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  )
}

module.exports = config;
```

18. Add babel presents to `package.json`
```
"babel": {
  "presets": ["env", "react"]
},
```

19. Create a `index.html` file in the app folder. Include html boilerplate and a div for the app.
```
<div id="app"></div>
```

20. Add the following scripts to `package.json`
```
"scripts": {
  "start": "webpack-dev-server --open",
  "build": "NODE_ENV='production' webpack -p",
  "firebase-init": "firebase login && firebase init",
  "deploy": "yarn run build && firebase deploy"
},
```

21. Add firebase tools
```
yarn add -dev firebase-tools
```
