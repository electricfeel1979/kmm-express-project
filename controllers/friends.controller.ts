import {Request, Response} from 'express';

import model from '../models/friends.model';

function postFriend(req: Request, res: Response) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing friend name',
    });
  }

  const newFriend = {
    name: req.body.name,
    id: model.length,
  };

  model.push(newFriend);

  res.json(newFriend);
}

function getFriends(req: Request, res: Response) {
  res.json(model);
}

function getFriend(req: Request, res: Response) {
  const friendId = Number(req.params.friendId);
  const friend = model[friendId];

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: 'Friend does not exist',
    });
  }
}

export default {postFriend, getFriends, getFriend};
