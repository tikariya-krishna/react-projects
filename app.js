const heading = React.createElement("h1",{},"Hello ");
const paraghraph = React.createElement("p",{},"This is paraghraph");
const parant = React.createElement("div",{id:"parant"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"Hello 1"),
        React.createElement("h2",{},"Hello 2"),
        React.createElement("h3",{},"Hello 3"),
        React.createElement("h4",{},"Hello 4"),
        React.createElement("h5",{},"Hello 5"),
        React.createElement("h6",{},"Hello 6")
    ]),
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"Hello 1"),
        React.createElement("h2",{},"Hello 2"),
        React.createElement("h3",{},"Hello 3"),
        React.createElement("h4",{},"Hello 4"),
        React.createElement("h5",{},"Hello 5"),
        React.createElement("h6",{},"Hello 6")
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parant);
        