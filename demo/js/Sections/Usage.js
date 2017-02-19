import React, {PureComponent} from 'react'

import CodeBlock from '../Controls/CodeBlock'

export default class Usage extends PureComponent {
  render() {
    return (
      <div style={styles.container}>
        <h1 id="basic-usage">
          {'Basic Usage'}
        </h1>
        <p>
          {
            'Components all have sensible defaults, with some having required props for when ' +
            'there isn\'t a sensible option available. All transitions default to 600ms. ' +
            'For more detailed information on options view the API reference below.'
          }
        </p>
        <CodeBlock>
          {
            'import React from \'react\'\n' +
            'import ReactWax from \'react-wax\'\n\n' +
            'class MyComponent extends Component {\n' +
            '  state = {\n' +
            '    active: false\n' +
            '  }\n\n' +
            '  handleToggle = () => {\n' +
            '    this.setState(prevState => ({ active: !prevState.active }))\n' +
            '  }\n\n' +
            '  render (\n' +
            '    <div>\n' +
            '      <button onClick={this.handleToggle}>\n' +
            '        Toggle\n' +
            '      </button>\n' + 
            '      <ReactWax.Fade active={this.state.active}>\n' +
            '        <YourChildComponents />\n' +
            '      </ReactWax.Fade>\n' +
            '    </div>\n' +
            '  )\n' +
            '}'
          }
        </CodeBlock>
      </div>
    )
  }
}

const styles = {
  container: {
    marginBottom: 80
  }
}
