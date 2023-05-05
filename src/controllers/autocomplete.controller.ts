import { Request, Response } from "express";
import sseHeaders from "../constants/requestConstants";
import getUniqueId from "../utils";

const connectAutocomplete = (req: Request, res: Response)=>{
    res.writeHead(200, sseHeaders);
    const sendData:string = `Something`;
    res.write(sendData);
    res.flush();
    const clientId:string = getUniqueId();
    console.log(`${clientId} - Connection opened`);
    req.on('close', () => {
        console.log(`${clientId} - Connection closed`);
    });
}

export default {
    connectAutocomplete
};

