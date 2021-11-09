# React keyboard key
[![npm](https://img.shields.io/npm/v/react-keyboard-key?style=plastic)](https://www.npmjs.com/package/react-keyboard-key)
[![NPM](https://img.shields.io/npm/dy/react-keyboard-key?style=plastic)](https://www.npmjs.com/package/react-keyboard-key)

## Technologies
`#typescript` `#hooks` `#react`

## Overview
React keyboard key is a simply package for projects using React JS. It is a library based on keydown and keyup events. The package is listening for what key on keyboard was pressed and it returns the whole event data.
It can be used as a component or a hook as well.

## Usage
### Types
```javascript
keyInfo: {
  key: string | null;
  code: string | null;
  keyCode: number | null;
  output: KeyboardEvent | null,
};
addKeyListener: () => void;
removeEventListener: () => void;
onKeyDownCallback: (event: KeyboardEvent) => void;
```

### Container
```javascript
import { KeyListenerContainer } from 'react-keyboard-key';
...
const ExampleComponent: FC<Props> = ({ children }) => {
  return (
    <KeyListenerContainer
      onKeyDownCallback={e => {
        e.preventDefault();
      }}
    >
      {keyInfo => (
        <div>
          {keyInfo.code}
        </div>
      )}
    </KeyListenerContainer>
  );
};
```

### Hook
```javascript
import { useKeyboardKey } from 'react-keyboard-key';

const ExampleComponent: FC<Props> = () => {
  const { keyInfo } = useKeyboardKey(onKeyDownCallback);

  const onKeyDownCallback = (e: KeyboardEvent) => {
    e.preventDefault
  };

  return (
    <div>
      {keyInfo.code}
    </div>
  );
};
```

## Sources
  * [Github project react-keyboard-key](https://github.com/patrikmasiar/react-keyboard-key)
  * [NPM Package](https://www.npmjs.com/package/react-keyboard-key)
  * [Github project whatdidipress.com](https://github.com/patrikmasiar/what-did-i-press/)
  * [whatdidipress.com](https://whatdidipress.com/)