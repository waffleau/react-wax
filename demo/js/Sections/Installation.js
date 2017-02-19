import React, {PureComponent} from 'react'

import CodeBlock from '../Controls/CodeBlock'

export default class Installation extends PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <h1 id="installation">
          {'Installation'}
        </h1>
        <h4>{'NPM'}</h4>
        <CodeBlock>
          {'npm install react-wax'}
        </CodeBlock>
        <h4>{'Yarn'}</h4>
        <CodeBlock>
          {'yarn add react-wax'}
        </CodeBlock>
      </div>
    )
  }
}

const styles = {
  container: {
    marginBottom: 60
  }
}
