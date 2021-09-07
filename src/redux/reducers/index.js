import { combineReducers } from 'redux';
import auth from './auth';
import gfg from './gfg';
import codechef from './codechef';
import codeforces from './codeforces';
import spoj from './spoj';
import playlist from './playlist';
import blog from './blog';

export default combineReducers({
    auth,
    gfg,
    codechef,
    codeforces,
    spoj,
    playlist,
    blog
});