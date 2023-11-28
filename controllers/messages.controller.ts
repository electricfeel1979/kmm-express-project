import {Request, Response} from 'express';

function getMessages(req: Request, res: Response) {
  res.send('<ul><li>Helloo Albert!</li></ul>');
}

function postMessage() {
  console.log('Updating messages...');
}

export default {getMessages, postMessage};
