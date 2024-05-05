import { useState } from 'react'
import React from 'react'
import { ReactMarkdown  } from '../../react-markdown.js';


function App() {
const textareaText = `# title
## This is a sub-heading... 
**bold**

\`<div></div>\`

\`\`\`
\`\` this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == 'a' && lastLine == 'b') {
    return multiLineCode;
  }
}
\`\`\`
[links](https://www.freecodecamp.org)

> Block Quotes!

And of course there are lists.
- Some are bulleted.
- With different indentation levels.
- That look like this.

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`


const[textAreaData, setTextAreaData] = useState({text: textareaText})

function handleChange(event){
  setTextAreaData(prevTextAreaData=> {
    return {
      ...prevTextAreaData,
      [event.target.name]: event.target.value
    }
  })
}
  return (
    <main>
      <div className="editor-area">
        <div className='e-title'>Editor</div>
        <textarea
            name="text" 
            placeholder='text' 
            id="editor" 
            onChange={handleChange}
            value={textAreaData.text}
        ></textarea>
      </div>

      <div className="preview-area">
        <div className='p-title'>Preview</div>
        <div id='preview' className='preview'>
        <ReactMarkdown>{textAreaData.text}</ReactMarkdown>
        </div>
      </div>
    </main>
  )
}

export default App
