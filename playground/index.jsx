import React from 'react'
import ReactDOM from 'react-dom'
import BraftEditor, { utils } from '../src'
import ColorPicker from 'braft-extensions/dist/color-picker'
import Table from 'braft-extensions/dist/table'
import CodeHighlighter from 'braft-extensions/dist/code-highlighter'
import Emoticon, { defaultEmoticons } from 'braft-extensions/dist/emoticon'

import 'braft-extensions/dist/emoticon.css'
import 'braft-extensions/dist/color-picker.css'
import 'braft-extensions/dist/table.css'
import 'braft-extensions/dist/code-highlighter.css'

const emoticons = defaultEmoticons.map(item => require(`braft-extensions/dist/assets/${item}`))

const hooks = {
  'set-image-alignment': () => {
    return 'left'
  }
}

BraftEditor.use([
  Emoticon({
    emoticons: emoticons
  }),
  // ColorPicker({
  //   theme: 'dark'
  // }),
  Table(),
  CodeHighlighter()
])

class Demo extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      count: 0,
      readOnly: false,
      editorState: BraftEditor.createEditorState('<p></p><div class="media-wrap attachment-wrap" data-card-type="attachment" data-card-url="https://media.w3.org/2010/05/sintel/trailer.mp4" data-card-meta="%7B%22fileSize%22%3A%2212kb%22%2C%22fileType%22%3A%22PPT%22%2C%22fileName%22%3A%22draftEditor_test_file.ppt%22%7D"><div class="attachment-icon attachment-icon-ppt">PPT</div><div class="attachment-content"><div class="attachment-content-title">draftEditor_test_file.ppt</div><div class="attachment-content-desc">12kb</div></div></div><p></p>')
    }
  }

  handleChange = (editorState) => {
    console.log('change')
    this.setState({ editorState })
  }

  logHTML = () => {
    console.log(this.state.editorState.toHTML())
  }

  insertImage = () => {
    const newEditorState = utils.ContentUtils.insertMedias(this.state.editorState, [
      {
        type: 'IMAGE',
        url: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*G0nDS5-aESoAAAAAAAAAAABkARQnAQ',
      },
    ]);
    this.setState({
      editorState: newEditorState
    })
  }

  insertVideo = () => {
    const newEditorState = utils.ContentUtils.insertMedias(this.state.editorState, [
      {
        type: 'VIDEO',
        url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        meta: {
          poster: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*G0nDS5-aESoAAAAAAAAAAABkARQnAQ'
        }
      },
    ]);
    this.setState({
      editorState: newEditorState
    })
  }

  insertAttachment = () => {
    const newEditorState = utils.ContentUtils.insertMedias(this.state.editorState, [
      {
        type: 'ATTACHMENT',
        url: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
        meta: {
          fileSize: '12kb',
          fileType: 'PPT',
          fileName: 'draftEditor_test_file.ppt'
        }
      },
    ]);
    this.setState({
      editorState: newEditorState
    })
  }

  logRAW = () => {
    console.log(this.state.editorState.toRAW())
  }

  render() {

    const { readOnly, editorState } = this.state

    return (
      <div>
        <div className="demo" id="demo">
          <BraftEditor
            extendControls={[{
              key: 'log-raw',
              type: 'button',
              text: 'Log RAW',
              // disabled: true,
              onClick: this.logRAW,
            }, {
              key: 'log-html',
              type: 'button',
              text: 'Log HTML',
              // disabled: true,
              onClick: this.logHTML,
            }, {
              key: 'my-modal',
              type: 'modal',
              text: 'modal',
              // disabled: true,
              modal: {
                id: 'a',
                closeOnBlur: true,
                confirmable: true,
                closeOnConfirm: false,
                component: <div>123123</div>
              }
            },{
              key: 'insert Image',
              type: 'button',
              text: 'Insert Image',
              onClick: this.insertImage,
            },{
              key: 'insert Video',
              type: 'button',
              text: 'Insert Video',
              onClick: this.insertVideo,
            },
            {
              key: 'insert Attachment',
              type: 'button',
              text: 'Insert Attachment',
              onClick: this.insertAttachment,
            }]}
            colors={['#e25041']}
            headings={['header-one', 'unstyled']}
            placeholder="Hello World!"
            fixPlaceholder={true}
            allowInsertLinkText={true}
            triggerChangeOnMount={false}
            value={editorState}
            onChange={this.handleChange}
            readOnly={readOnly}
            hooks={hooks}
            imageResizable={true}
          />
        </div>
      </div>
    )

  }

}

ReactDOM.render(<Demo />, document.querySelector('#root'))
