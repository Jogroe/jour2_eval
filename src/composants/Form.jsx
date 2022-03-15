import {useState} from "react"

export const Form = () => {
    const [form, setForm] = useState({titre : "" , article : ""})
    const [visible, setVisible] = useState(true);

    function handleChange(e){
        const { name , value } = e.target ;
        setForm({...form , [name]: value});
    }
    function handleSubmit(e){
        e.preventDefault();
        const {titre, article} = form ;
        if(titre.length > 0 && article.length > 0){
            setForm({titre : "" , article : ""})
        }else {
            alert("veuillez mettre un titre et remplir l'article ")
        }
    }

    return <div className="col-4">
        <button className="btn btn-primary my-3" onClick={() => setVisible(!visible)}>Masquer le formulaire</button>
        {visible && (
        <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" name="titre" value={form.titre} onChange={handleChange} />
            <textarea  id="" cols="30" rows="10"  className="form-control my-3" name="article" onChange={handleChange} value={form.article}></textarea>
            <input type="submit" className="btn btn-outline-dark" value="Créer un nouvel article" />
        </form>)}
    </div>
}

// récupérer les valeurs saisies dans le formulaire 
// 1 state qui permet de stocker les valeurs dans le formulaire 
// 2 modifier le html input / textarea 
//    - name 
//    - onChange 
//    - value 
// 3 value={state.nom}
// 4 onChange={fonction}
// 5 submit  
