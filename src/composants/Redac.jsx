import {useEffect, useState} from "react"
import { Form } from './Form';

export const Redac = () => {
    const [data , setProfils] = useState([]) ;
    useEffect(() => {
        fetch(" https://jsonplaceholder.typicode.com/posts")
        .then(reponse => reponse.json())
        .then(data => setProfils(data))
    } , [])

    return <div className="row">
        <Form></Form>
        <hr className="my-4"/>
        {data.slice(0,3).map( (data , index) => {
            return <article className="col-4" key={index}>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
                <button className="btn btn-danger">Supprimer</button>
            </article>
        } )}
    </div>
}