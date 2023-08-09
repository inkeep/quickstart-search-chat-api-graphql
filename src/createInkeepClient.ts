import { createClient } from './inkeepApiClient'

const createInkeepClient = (orgAlias?: string) => {
    if(!process.env.INKEEP_API_KEY) {
        throw new Error('INKEEP_API_KEY environment variable is not defined. Please set it before running the application.')
    }
    
    console.log(process.env.INKEEP_API_KEY);

    const headers: { [key: string]: any } = {
        Authorization: `Bearer ${process.env.INKEEP_API_KEY}`,
    };

    const client = createClient({
        url: 'https://api.inkeep.com',
        headers: headers,
    })

    return client;
}

export default createInkeepClient;
