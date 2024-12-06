async function getLinkedinInformation() {
    const linkedinProfile = 'https://www.linkedin.com/in/caiohenriquelw';
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer SSDBwtExzWQvFRtczfAGtPOp0KV27TL0JqU2Hth5VIXZIzy3BwhCv6mRI6mL`,
    }

    let req = await fetch(`https://api.lix-it.com/v1/person?profile_link=https://linkedin.com/in/alfie-lambert`, { 
        method: 'GET',
        headers
    });
    let response  = await req.json();
    response.catch((err) => {
        console.log(err)
    })
    console.log(response);
}

getLinkedinInformation();