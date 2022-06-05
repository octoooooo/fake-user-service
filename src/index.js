/* eslint-disable import/prefer-default-export */

import express from 'express';

const faas = express();

faas.get('/', (_, res) => res.json({ message: 'ok' }));

export { faas };
