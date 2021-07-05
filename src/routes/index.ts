import express, { Router } from 'express';
// utility routes
import error from './error_handler';
import not_found from './not_found';
// entities
import city from '../entities/city/index';
import state from '../entities/state/index';
import country from '../entities/country/index';

const router: Router = express.Router();
router.get('/', (req, res) => { res.send('user_service') })
router.use('/country', country);
router.use('/state', state)
router.use('/city', city)
router.use(not_found);
router.use(error);

export default router;