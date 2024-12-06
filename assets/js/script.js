async function getLinkedinInformation() {
    const linkedinProfile = 'https://www.linkedin.com/in/caiohenriquelw'

    let req = await fetch(`https://api.lix-it.com/v1/person?profile_link=${linkedinProfile}`, { 
        method: 'GET', 
        headers: {
            'Access-Control-Allows-Origin': 'https://portfolio-njuqpaezf-caiohluwis-projects.vercel.app/',
            'Access-Control-ALlow-Method': 'GET',
            'Authorization': 'SSDBwtExzWQvFRtczfAGtPOp0KV27TL0JqU2Hth5VIXZIzy3BwhCv6mRI6mL',
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