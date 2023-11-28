import {Request, Response} from 'express';

import path from 'path';

function getMessages(req: Request, res: Response) {
  //   res.send('<ul><li>Helloo Albert!</li></ul>');
  res.sendFile(path.join(__dirname, '..', 'public', 'skimountain.jpg'));
}

function postMessage() {
  console.log('Updating messages...');
}

export default {getMessages, postMessage};
