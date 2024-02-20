import './Content.css'
import { useState } from 'react'

export function Content(){

    const [content, setContent] = useState("Ecrivez ici.....")
    const changeContent = e => {
        setContent(e.target.value)
    }

    return (
        <div>
            <textarea name="content" id="content" cols="150" rows="10" defaultValue={content} onChange={changeContent}></textarea>
            <div dangerouslySetInnerHTML={{__html: content}}>

            </div>
        </div>
    )
}