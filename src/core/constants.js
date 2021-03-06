/**
 * Created by cqian19 on 5/21/2017.
 */
import isElectron from 'is-electron';

/* ENUMS */
// Determines domain of videoplayer and how it should be played
export const DOMAIN_TYPES = {
    'YOUTUBE': 'YOUTUBE',
    'VIMEO': 'VIMEO',
    'SOUNDCLOUD': 'SOUNDCLOUD',
    'USTREAM': 'USTREAM',
    'DAILYMOTION': 'DAILYMOTION',
    'FACEBOOK': 'FACEBOOK',
    'TWITCH': 'TWITCH'
};

// Determines if link is to a playlist or to a videoplayer, or to neither
export const RENDER_TYPES = {
    'INVALID': 'INVALID',
    'VIDEO': 'VIDEO',
    'PLAYLIST': 'PLAYLIST',
    'STREAM': 'STREAM'
};

export const DRAG_TYPES = {
    'PLAYLIST_VIDEO': 'PLAYLIST_VIDEO',
    'INSERTABLE_VIDEO': 'INSERTABLE_VIDEO',
    'PLAYLIST_ITEM': 'PLAYLIST_ITEM'
};

/* CONSTANTS */
export const APP_TITLE = 'OmniPlaylist';
export const BASE_VIDEO_HEIGHT = isElectron() ? 400 : window.innerHeight * .8;
export const BASE_VIDEO_WIDTH  = isElectron() ? 600 : window.innerWidth * 2/3;
export const VIDEO_MIN_HEIGHT = 250;
export const VIDEO_MIN_WIDTH  = 300;

/* API Backend URL */
export const API_URL = 'https://allinoneplaylist.herokuapp.com/api';

/* ACTION TYPES */
// App
export const APP_LOAD = 'APP_LOAD';
export const TOGGLE_HIDE_EXTRA = 'TOGGLE_HIDE_EXTRA';

// Import bar
export const LINK_FAILED = 'LINK_FAILED';
export const ADD_PLAYLIST_SUCCESS = 'ADD_PLAYLIST_SUCCESS';
export const ADD_VIDEO_SUCCESS = 'ADD_VIDEO_SUCCESS';
export const IMPORT_START = 'IMPORT_START';
export const IMPORT_SUCCESS = 'IMPORT_SUCCESS';
export const IMPORT_FAILED = 'IMPORT_FAILED';
export const RESET_IMPORT_FORM ='RESET_IMPORT_FORM';

// Playlist
export const ON_VIDEO_ADD = 'ON_VIDEO_ADD';
export const ON_VIDEO_MOVE = 'ON_VIDEO_MOVE';
export const ON_VIDEO_REMOVE = 'ON_VIDEO_REMOVE';
export const ON_VIDEO_PREV = 'ON_VIDEO_PREV';
export const ON_VIDEO_SKIP = 'ON_VIDEO_SKIP';
export const ON_VIDEO_END = 'ON_VIDEO_END';
export const ON_VIDEO_SWITCH = 'ON_VIDEO_SWITCH';
export const ON_VIDEO_ACTION_FAILED = 'ON_VIDEO_ACTION_FAILED';
export const ON_PLAYLIST_MAKE = 'ON_MAKE_NEW_PLAYLIST';
export const ON_PLAYLIST_MOVE = 'ON_PLAYLIST_MOVE';
export const ON_PLAYLIST_REMOVE = 'ON_PLAYLIST_REMOVE';
export const ON_PLAYLIST_CHANGE = 'ON_PLAYLIST_CHANGE';
export const ON_PLAYLIST_NAME_CHANGE = 'ON_PLAYLIST_NAME_CHANGE';
export const ON_PLAYLISTS_LOAD = 'ON_PLAYLISTS_LOAD';
export const ON_PLAYER_RELOAD = 'ON_PLAYER_RELOAD';
export const SAVE_PLAYER_TIME = 'SAVE_PLAYER_TIME';
// Player
export const ON_VIDEO_SAVE_SIZE = 'ON_VIDEO_SAVE_SIZE';
export const ON_VIDEO_COLLAPSE_TOGGLE = 'ON_VIDEO_COLLAPSE_TOGGLE';

// Sidebar
export const ON_SIDEBAR_TOGGLE = 'SIDEBAR_TOGGLE';
export const ON_PLAYLIST_SELECTED_CHANGE = 'ON_PLAYLIST_SELECTED_CHANGE';