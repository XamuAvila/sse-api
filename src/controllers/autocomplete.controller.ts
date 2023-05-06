import { Request, Response } from "express";
import sseHeaders from "../constants/requestConstants";
import getUniqueId from "../utils";

const clients: Array<{id:string, res: Response}> = [];

const connectAutocomplete = (req: Request, res: Response)=>{
    res.writeHead(200, sseHeaders);
    const sendData:string = `Something`;
    res.write(sendData);
    res.flush();
    const clientId:string = getUniqueId();

    clients.push({
        id: clientId,
        res
    });

    console.log(`${clientId} - Connection opened`);
    req.on('close', () => {
        console.log(`${clientId} - Connection closed`);
    });
}

const sendEvent = (req:Request, res:Response) => {
    for(let i=0; i<clients.length; i++){
        clients[i].res.write(`something`);
        clients[i].res.flush();
     }
}

export {
    connectAutocomplete,
    sendEvent
};

