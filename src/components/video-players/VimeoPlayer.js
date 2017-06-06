/**
 * Created by cqian19 on 6/1/2017.
 */
import React from 'react';
import VimeoVideoPlayer from '@vimeo/player';

/* API reference: https://github.com/vimeo/player.js */
export class VimeoPlayer extends React.Component {

    _initializePlayer() {
        // Vimeo API requires video id on instantiation
        const player = new VimeoVideoPlayer(this.iframe, {
            id: this.props.video.id,
        });
        player.on('ended', this.props.onEnded);
        return player;
    }

    _playVideo(props=this.props) {
        this.player.loadVideo(props.video.id).then(() => {
            this.player.play();
        });
    }

    componentDidMount() {
        this.player = this._initializePlayer();
        this.player.play();
    }

    componentWillUpdate(nextProps) {
        this._playVideo(nextProps);
    }

    render() {
        return (
            <div id="player-video" ref={(e) => {
                this.iframe = e;
            }}/>
        );
    }
}