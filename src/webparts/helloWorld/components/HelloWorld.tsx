import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';

// imports from Office UI Fabric
import { TextField } from 'office-ui-fabric-react/lib/TextField';

export default class HelloWorld extends React.Component<IHelloWorldProps, { textFieldValue: string }> {

  constructor(props: IHelloWorldProps) {
    super(props);

    // init state
    this.state = { textFieldValue: '' };
  }

  componentDidMount() {
    // do stuff when component renders initially
  }

  private _onTextFieldChange(newValue: string): void {
    // handle textfield change
    console.log('onTextFieldChange');
    console.log(newValue);

    this.setState({ textFieldValue: newValue });
  }


  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div className={styles.helloWorld}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <TextField label="Enter XSS here:" onChanged={(newValue: string) => this._onTextFieldChange(newValue)} />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              {'Is this below save?'}
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
                {escape(this.state.textFieldValue)}
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              {'Is this below dangerous?'}
            </div>
            <div className={styles.row}>
              <div className={styles.column}>
                {this.state.textFieldValue}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
