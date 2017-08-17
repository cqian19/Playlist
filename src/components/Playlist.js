/**
 * Created by cqian19 on 5/22/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withScrolling from 'react-dnd-scrollzone';
import classNames from 'classnames';
import ReactResizeDetector from 'react-resize-detector';
import { findDOMNode } from 'react-dom';
import { applyContainerQuery } from 'react-container-query';


import PlaylistVideoContainer from '../containers/PlaylistVideoContainer';
import { scrollTo } from '../utils';

const ScrollingComponent = withScrolling('div');

class Playlist extends React.Component {

    constructor() {
        super();
        this.state = {
            activeElem: null,
            minimized: false
        }
    }

    setActiveElem = (elem) => {
        this.state.activeElem = findDOMNode(elem);
    };

    _scrollToActiveVideo() {
        const domNode = this.state.activeElem;
        if (domNode) {
            this.state.activeElem = null;
            const scroll = findDOMNode(this.refs.scroll);
            scrollTo(scroll, domNode);
        }
    }

    componentDidMount() {
        this._scrollToActiveVideo();
    }

    componentDidUpdate() {
        this._scrollToActiveVideo();
    }

    handleResize = (width, _) => {
        const { changeFlexDir } = this.props;
        const { minimized } = this.state;
        // Move playlist below player
        if (!minimized && width < 420) {
            this.state.minimized = true;
            changeFlexDir(true);
        // Move playlist beside player
        } else if (minimized && width > 425) {
            this.state.minimized = false;
            changeFlexDir(false);
        }
    };

    render(){
        const { containerQuery, playlistIndex, videos } = this.props;
        const { minimized } = this.state;
        const scrollClassNames = classNames({
            'playlist': true,
            'playlist-snap': minimized,
            'width-collapse': true,
        });
        return (
            <ScrollingComponent ref='scroll' className={scrollClassNames}>
                {videos.map((video,index) => (
                    <PlaylistVideoContainer
                        key={video.uniqueId}
                        index={index}
                        scrollToElem={this.setActiveElem}
                        playlistIndex={playlistIndex}
                        video={video}
                    />
                ))}
                <ReactResizeDetector handleWidth onResize={this.handleResize} />
            </ScrollingComponent>
        )
    }

}

Playlist.propTypes = {
    containerQuery: PropTypes.object.isRequired,
    changeFlexDir: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    playlistIndex: PropTypes.number.isRequired,
    videos: PropTypes.arrayOf(PropTypes.object)
};

export default Playlist;