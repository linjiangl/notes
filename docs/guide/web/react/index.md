``` javascript
import React, { useState } from 'react';
import RcUEditor from 'react-ueditor-wrap';

type UEditorProps = {
  defaultValue: string;
  width?: number | string;
  zIndex?: number;
  height?: number | string;
  maxWords?: number;
  config?: object;
  onResult: (value: string) => void;
};

const UEditor: React.FC<UEditorProps> = (props) => {
  const { width, zIndex, height, maxWords, config, onResult } = props;
  const [content] = useState<string>(props.defaultValue);

  const editorConfig = {
    serverUrl: '/backend/public/ueditor',
    autoClearinitialContent: false,
    autoFloatEnabled: false,
    autoHeightEnabled: false,
    focus: true,
    enableAutoSave: false,
    ...config,
    initialFrameWidth: width, // 初始化编辑器宽度
    initialFrameHeight: height,
    zIndex,
    maximumWords: maxWords,
  };

  return (
    <RcUEditor
      value={content}
      ueditorUrl="http:xxx.com/static/ueditor.all.min.js"
      ueditorConfigUrl="http:xxx.com/static/ueditor.config.js"
      editorConfig={editorConfig}
      onChange={(value: string) => onResult(value)}
    />
  );
};

UEditor.defaultProps = {
  width: 'auto',
  zIndex: 1,
  height: 480,
  maxWords: 10000,
  config: {},
};

export default UEditor;

```

