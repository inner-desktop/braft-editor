import React from 'react';
import * as ContentUtils from 'utils/content';
import './style.scss';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

export default class Attachment extends React.Component {
  render() {
    const { mediaData } = this.props;
    const {
      meta: { fileSize, fileType, fileName, status = 'done', percent = 0 },
    } = mediaData;

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
      <div className="bf-attachment">
        <button onMouseDown={this.removeAttachment} className="button-remove">
          <i className="bfi-close" />
        </button>
        <div
          className={`bf-attachment-icon bf-attachment-icon-${fileType.toLowerCase()}`}
        >
          {fileType}
        </div>
        <div className="bf-attachment-content">
          <div className="bf-attachment-content-title">{fileName}</div>
          <div className="bf-attachment-content-desc">{fileSize}</div>
        </div>
      </div>
    );
  }

  removeAttachment = () => {
    this.props.editor.setValue(
      ContentUtils.removeBlock(this.props.editorState, this.props.block),
    );
  };
}
