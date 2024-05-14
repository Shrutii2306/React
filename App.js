const parent = React.createElement(
    'div',
    {id : 'parent'},
    React.createElement(
        'div',
        {id : 'child'},
        [React.createElement(
            'h1',
            {},
            'this is a h1 tag in the child!'
        ),
        React.createElement(
            'h2',
            {},
            'this is a h2 tag in the child!'
        )]
    )
)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent)