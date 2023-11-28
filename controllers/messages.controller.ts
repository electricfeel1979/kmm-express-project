import {Request, Response} from 'express';

function getMessages(req: Request, res: Response) {
  res.render('messages', {
    title: 'Messages to my Friends',
    friend: 'Elon Musk',
  });
}

function postMessage() {
  console.log('Updating messages...');
}

export default {getMessages, postMessage};
