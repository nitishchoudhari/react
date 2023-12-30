
/* React code*/

const root = ReactDOM.createRoot(document.getElementById('root'));

const heading = React.createElement('div', {id : 'parent'}, 
 React.createElement('div', {id : 'child'},
 [React.createElement('h1', {}, 'I am h1 tag'), 
 React.createElement('h2', {}, 'I am h2 tag')])
)

root.render(heading)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const heading = React.createElement('h1', {}, 'Hello world');
// root.render(heading);