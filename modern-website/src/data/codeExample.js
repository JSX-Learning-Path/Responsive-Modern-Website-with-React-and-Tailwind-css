export const codeExample = {
  "App.jsx": `
    import {useState} from 'react';
    import {CodeFlow} from 'react;


    function App(){
    const [ code , setCode ] = useState ('');

    const handleCompletion = async () =>{
        const suggestion = await CodeFFlow.complete(code);
        setCode(suggestion);
    };
    return (
    <div className="app">
    <CodeFlow
    code={code}
    onCodeChange={setCode}
    onCompletion={handleCompletion}
    />
    </div>
    )
    `,
  "Hero.jsx": `
    import {useState} from 'react';
    import {CodeFlow} from 'react;


    function App(){
    const [ code , setCode ] = useState ('');

    const handleCompletion = async () =>{
        const suggestion = await CodeFFlow.complete(code);
        setCode(suggestion);
    };
    return (
    <div className="app">
    <CodeFlow
    code={code}
    onCodeChange={setCode}
    onCompletion={handleCompletion}
    />
    </div>
    )
    `,
  "Navbar.jsx": `
    import {useState} from 'react';
    import {CodeFlow} from 'react;


    function App(){
    const [ code , setCode ] = useState ('');

    const handleCompletion = async () =>{
        const suggestion = await CodeFFlow.complete(code);
        setCode(suggestion);
    };
    return (
    <div className="app">
    <CodeFlow
    code={code}
    onCodeChange={setCode}
    onCompletion={handleCompletion}
    />
    </div>
    )
    `,
};
