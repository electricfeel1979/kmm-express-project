import {Request, Response} from 'express';

import path from 'path';

function getMessages(req: Request, res: Response) {
  res.sendFile(
    path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg')
  );
}

function postMessage() {
  console.log('Updating messages...');
}

export default {getMessages, postMessage};
