import './style.scss';
import React from 'react';
import PlayerModal from 'components/business/PlayerModal';
import * as ContentUtils from 'utils/content';

export default class Video extends React.Component {
  state = {
    videoURL: '',
  };

  componentDidMount() {
    const hookReturns = this.props.hooks(
      'insert-video',
      this.props.mediaData,
    )(this.props.mediaData);

    if (hookReturns === false) {
      return false;
    }

    if (Object.prototype.toString.call(hookReturns) === '[object Promise]') {
      hookReturns.then((url) => {
        this.setState({ videoURL: url });
      });
    }
  }

  render() {
    const { mediaData, language } = this.props;
    const { url, name, meta } = mediaData;

    return (
      <div className="bf-video-wrap">
        <PlayerModal
          type="video"
          onRemove={this.removeVideo}
          poster={meta ? meta.poster || '' : ''}
          language={language}
          url={url}
          name={name}
          title={language.videoPlayer.title}
        >
          <div className="bf-video-player">
            <video controls poster={meta ? meta.poster || '' : ''}>
              <source src={this.state.videoURL ? this.state.videoURL : url} />
            </video>
          </div>
        </PlayerModal>
      </div>
    );
  }

  removeVideo = () => {
    this.props.editor.setValue(
      ContentUtils.removeBlock(this.props.editorState, this.props.block),
    );
  };
}
