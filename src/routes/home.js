import { Router } from 'express';
import { getHome, getHomeID, postHome, patchHome, deleteHome } from '../controllers/home.js';

const router = Router();

router.get('/', getHome);

router.get('/:id', getHomeID);

router.post('/', postHome);

router.patch('/', patchHome);

router.delete('/:id', deleteHome);

const Home = router;
export default Home;