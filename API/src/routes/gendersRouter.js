const { getGenderById } = require('../handlers/gendersHandlers');

const gendersRouter = require('express').Router();

gendersRouter.get('/:id', getGenderById);

module.exports = gendersRouter;