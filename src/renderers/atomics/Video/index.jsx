import './style.scss';
import React from 'react';
import PlayerModal from 'components/business/PlayerModal';
import * as ContentUtils from 'utils/content';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

export default class Video extends React.Component {
  state = {
    videoURL: '',
  };

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.mediaData &&
      prevProps.mediaData.meta &&
      prevProps.mediaData.meta.status
    ) {
      if (prevProps.mediaData.meta.status === 'done' && prevState.videoURL === '') {
        const hookReturns = prevProps.hooks(
          'insert-video',
          prevProps.mediaData,
        )(prevProps.mediaData);

        if (hookReturns === false) {
          return null;
        }

        if (
          Object.prototype.toString.call(hookReturns) === '[object Promise]'
        ) {
          let url = await hookReturns;
          this.setState({
            videoURL: url,
          });
        }
      }
    }
  }

  render() {
    const { mediaData, language } = this.props;
    const { url, name, meta } = mediaData;
    const { status = 'done', percent = 0 } = meta;

    if (status === 'uploading') {
      return (
        <div className="bf-media">
          <div className="bf-media-progress">
            <CircularProgressbar
              value={percent}
              strokeWidth={8}
              text={`上传中 ${percent}%`}
              styles={buildStyles({
                textSize: 12,
                pathColor: '#66C2B9',
                textColor: '#66C2B9',
                pathTransition:
                  percent === 0 ? 'none' : 'stroke-dashoffset 0.5s ease 0s',
              })}
            />
          </div>
        </div>
      );
    }

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
