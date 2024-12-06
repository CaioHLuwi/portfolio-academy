async function getLinkedinInformation() {
    const linkedinProfile = 'https://www.linkedin.com/in/caiohenriquelw'

    let req = await fetch(`https://api.lix-it.com/v1/person?profile_link=${linkedinProfile}`, { 
        method: 'GET', 
        headers: {
            'Access-Control-Allows-Origin': '',
            'Accept': 'application/json'
        }
    });
    let response  = await req.json();
    response.catch((err) => {
        console.log(err)
    })
    console.log(response);
}

getLinkedinInformation();