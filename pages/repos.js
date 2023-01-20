import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const List = (props) => {
    const { repos } = props; 
    if (!repos || repos.length === 0) return <p>Can't find github Repo List </p>
    return(
        <ul className='my-4 ml-6'>
            <h2 className='font-bold text-2xl my-6'> Public repos list fetched using Axios </h2>
            {repos.map((repo) => {
            return (
                <li key={repo.id} className='ml-6 my-2'>
                <span className='mr-10 text-xl underline'>{repo.name}</span>
                <span className="italic">{repo.description}</span>
                <span className= 'ml-4'><Link href={repo.html_url}>Link 🔗</Link></span>
                </li>
            );
        })}
        </ul>
    );
};

function WithListLoading(Component) {
    return function WithLoadingComponent({ isLoading, ...props}) {
        if (!isLoading) return <Component {...props} />
        return (
            <p> Fetching data... </p>
        );
    };
}

function repos() {
    const ListLoading = WithListLoading(List);
    const [appState, setAppState ] = useState({
        loading: false,
        repos: null, 
    });

    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `https://api.github.com/users/chiragneb/repos`;
        axios.get(apiUrl).then((repos) => {
            const allRepos =  repos.data;
            setAppState({ loading: false, repos: allRepos })
    });
}, [setAppState]);

return (
    <div className='ml-10'>
        <h1 className='font-bold text-3xl my-6'> My Repositories </h1>
        <div><ListLoading isLoading={appState.loading} repos={appState.repos} /></div>
    </div>
)
}
export default repos;
