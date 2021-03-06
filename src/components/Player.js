/**
 * Created by cqian19 on 5/22/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';

import { DOMAIN_TYPES } from '../core/constants';
import { DOMAIN_PROPS } from '../core/domain-map-constants';

import ResizableVideoContainer from '../containers/ResizablePlayerWrapperContainer';

class Player extends React.Component {

    generatePlayerSection = () =>{
        const { video, videos } = this.props;
        if (videos.length) {
            const videoDomain = video.domainType;
            const DomainPlayer = DOMAIN_PROPS[videoDomain].player;
            return (
                <DomainPlayer
                    {...this.props}
                />
            );
        }
    };

    componentWillUpdate(prevProps) {
        if (prevProps.reload) {
            this.props.onPlayerReload();
        }
    }

    render() {
        const { videos, video, onPrev, onSkip } = this.props;
        const playerSection = this.generatePlayerSection();
        return (
            <div className="player">
                <div className="player__inner">
                    {videos.length ? (
                        <ResizableVideoContainer>
                            {playerSection}
                            <div className="player__footer display-row">
                                {/* Previous Video Button */}
                                <span className="btn icon-btn" onClick={onPrev}>
                                    <i className="glyphicon glyphicon-fast-backward"/>
                                </span>
                                {/* Skip Video Button */}
                                <span className="btn icon-btn" onClick={onSkip}>
                                    <i className="glyphicon glyphicon-fast-forward"/>
                                </span>
                            </div>
                        </ResizableVideoContainer>
                    ) : (
                        <div className="player-placeholder "></div>
                    )
                    }
                </div>
            </div>
        )
    }
}

Player.propTypes = {
    index:   PropTypes.number.isRequired,
    onEnded: PropTypes.func.isRequired,
    onPlayerReload: PropTypes.func.isRequired,
    onPrev:  PropTypes.func.isRequired,
    onSkip:  PropTypes.func.isRequired,
    onStart: PropTypes.func.isRequired,
    reload:  PropTypes.bool.isRequired,
    savePlayerTime: PropTypes.func.isRequired,
    video:   PropTypes.object,
    videos:  PropTypes.arrayOf(PropTypes.object)
};

export default Player;
