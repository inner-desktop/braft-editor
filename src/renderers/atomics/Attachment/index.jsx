import React from 'react'
import * as ContentUtils from 'utils/content'
import './style.scss'

export default class Attachment extends React.Component {
  render () {
    const { mediaData } = this.props
    const { meta: { fileSize, fileType, fileName } } = mediaData

    return (
      <div className='bf-attachment'>
        <button onMouseDown={this.removeAttachment} className="button-remove">
          <i className='bfi-close' />
        </button>
        <div className={`bf-attachment-icon bf-attachment-icon-${fileType.toLowerCase()}`}>
          {fileType}
        </div>
        <div className='bf-attachment-content'>
          <div className='bf-attachment-content-title'>{fileName}</div>
          <div className='bf-attachment-content-desc'>{fileSize}</div>
        </div>
      </div>
    )
  }

  removeAttachment = () => {
    this.props.editor.setValue(ContentUtils.removeBlock(this.props.editorState, this.props.block))
  }

}
