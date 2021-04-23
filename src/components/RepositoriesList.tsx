import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTupedSelector } from '../hooks/useTypedSelector';

const RepositoriesList:React.FC = () => {
    const [term, setTerm] = useState('')
    const { searchRepositories } = useActions()
    const {data,error, loading} = useTupedSelector((state)=>state.repositories)
    console.log(data);
    const submitHandler = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        searchRepositories(term)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" value={term} onChange={(e)=>setTerm(e.target.value)} />
                <button>SEARCH</button>
            </form>
            {error && <h3>{error}</h3> }
            {loading && <h3>loading...</h3> }
            {!loading && !error && data.map((item,index)=> <li key={index}>
                {item}
            </li> ) }
        </div>
    );
};

export default RepositoriesList;