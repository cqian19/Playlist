/**
 * Created by cqian19 on 5/24/2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import YoutubeVideoPlayer from 'youtube-player';

import BasePlayer from './BasePlayer';

const stateNames = {
    '-1': 'unstarted',
    0: 'ended',
    1: 'playing',
    2: 'paused',
    3: 'buffering',
    5: 'videoplayer cued'
};

/* API reference: https://github.com/gajus/youtube-player */
export class YoutubePlayer extends BasePlayer {

    _initializePlayer() {
        const player = YoutubeVideoPlayer(this.iframe);
        player.on('stateChange', (event) => {
            switch (stateNames[event.data]) {
                case 'ended':
                    return this.props.onEnded();
                default:
                    return;
            }
        });
        return player;
    }

    _playVideo(video) {
        this.player.loadVideoById(video.linkId);
    }

    componentDidMount() {
        this.player = this._initializePlayer();
        this._playVideo();
    }

    componentWillUpdate(nextProps) {
        this._playVideo(nextProps.video);
    }


    componentWillUnmount() {
        this.player.destroy();
    }

    render() {
        return (
            <div id="player-video">
                <div ref={(e) => {
                    this.iframe = e;
                }}/>
            </div>
        );
    }
}

YoutubePlayer.propTypes = {
    onEnded: PropTypes.func.isRequired,
    reload: PropTypes.bool.isRequired,
    video:  PropTypes.object.isRequired,
    videos: PropTypes.arrayOf(PropTypes.object).isRequired
};