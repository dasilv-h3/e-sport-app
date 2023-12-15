const checkUser = async (data) => {
    // requête http en get pour récupérer les users
    const infos = new Request('http://localhost:3000/users', {
        method: 'get'
    });

    const req = await fetch(infos);
    const res = await req.json();

    const result = res.find( user => user.username === data.username && user.password === data.password);

    return result;
}

export { checkUser }