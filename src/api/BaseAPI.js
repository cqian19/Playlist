/**
 * Created by cqian19 on 5/23/2017.
 */

import { RENDER_TYPES, DOMAIN_TYPES } from '../core/constants';
import { DOMAIN_PROPS } from '../core/domain-map-constants';

/* An abstract class for APIs */
class BaseAPI {

    static RENDER_TYPES = RENDER_TYPES;
    static DOMAIN_TYPE  = "";

    static _getDomainProps(domainType) {
        return DOMAIN_PROPS[domainType];
    }

    static _isVideoLink(link){
        const domainType = this.DOMAIN_TYPE;
        const videoLinks = this._getDomainProps(domainType).videoLinks;
        if (!videoLinks || !videoLinks.length) {
            return false;
        } else {
            return videoLinks.some((urlMatch) => urlMatch.test(link))
        }
    };

    static _isPlaylistLink(link){
        const domainType = this.DOMAIN_TYPE;
        const playlistLinks = this._getDomainProps(domainType).playlistLinks;
        if (!playlistLinks || !playlistLinks.length) {
            return false;
        } else {
            return playlistLinks.some((urlMatch) => urlMatch.test(link))
        }
    };

    static getRenderType(link, domainType){
        return this._isVideoLink(link, domainType)    ? RENDER_TYPES.VIDEO
            : (this._isPlaylistLink(link, domainType) ? RENDER_TYPES.PLAYLIST
                                                      : RENDER_TYPES.INVALID);
    };
    static getVideoFromResponse(response){};
    static getPlaylistFromResponse(response){};
    static getPlaylistIndexFromLink(link) {
        return 0;
    };
    static fetchPlaylist(link){};
    static fetchVideo(link){};

}

export default BaseAPI;