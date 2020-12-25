import { combineReducers } from 'redux';
import user from './user';
import category from './category';
import news from './news';
import signup from './signup';
import postaproject from './postaproject';
import header from './header';
import billing from './billing';

export default combineReducers({
    user,
    category,
    news,
    signup,
    postaproject,
    header,
    billing
});