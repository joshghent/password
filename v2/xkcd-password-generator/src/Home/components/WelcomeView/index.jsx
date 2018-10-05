import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Form, Message } from "semantic-ui-react";

import { TOGGLE_ACTION_MAP } from "Home/constants";
import withStyles from "Common/components/withStyles";
import stylesGenerator from "./styles";

class WelcomeView extends PureComponent {
  static propTypes = {
    computedStyles: PropTypes.shape({
      checkbox: PropTypes.string.isRequired
    }).isRequired,
    history: PropTypes.objectOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
    showCopiedMessage: PropTypes.bool.isRequired,
    numWords: PropTypes.number.isRequired,
    mixCase: PropTypes.bool.isRequired,
    includeNumbers: PropTypes.bool.isRequired,
    includeSpecialChars: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
      emitIsLoading: PropTypes.func.isRequired,
      emitShowCopiedMessage: PropTypes.func.isRequired,
      emitNumWordsChanged: PropTypes.func.isRequired,
      emitMixCaseChanged: PropTypes.func.isRequired,
      emitIncludeNumbersChanged: PropTypes.func.isRequired,
      emitSpecialCharsChanged: PropTypes.func.isRequired
    }).isRequired
  };

  contactHandler = () => {
    const { isLoading, actions, history } = this.props;
    actions.emitIsLoading({ isLoading: !isLoading });
    history.push("/contactUs");
  };

  copyToClipboardHandler = () => {
    const { actions } = this.props;
    const passwordField = document.getElementById("passwordField");

    passwordField.select();
    document.execCommand("copy");
    actions.emitShowCopiedMessage({ showCopiedMessage: true });

    setTimeout(this.dismissMessage, 3000);
  };

  toggleChangedHandler = e => {
    const {
      actions,
      mixCase,
      includeNumbers,
      includeSpecialChars
    } = this.props;

    const dataType = e.currentTarget.getAttribute("data-type");
    const actionType = TOGGLE_ACTION_MAP[dataType];

    switch (dataType) {
      case "mixCase":
        actions[actionType]({ mixCase: !mixCase });
        break;
      case "includeNumbers":
        actions[actionType]({ includeNumbers: !includeNumbers });
        break;
      case "includeSpecialChars":
        actions[actionType]({ includeSpecialChars: !includeSpecialChars });
        break;
      default:
        break;
    }
  };

  numWordsChangedHandler = (e, { value }) => {
    const { actions } = this.props;
    e.preventDefault();
    actions.emitNumWordsChanged({ numWords: value });
  };

  dismissMessage = () => {
    const { actions } = this.props;
    actions.emitShowCopiedMessage({ showCopiedMessage: false });
  };

  render() {
    const {
      computedStyles,
      showCopiedMessage,
      numWords,
      mixCase,
      includeNumbers,
      includeSpecialChars
    } = this.props;

    const options = [
      { key: "1", text: "1", value: 1 },
      { key: "2", text: "2", value: 2 },
      { key: "3", text: "3", value: 3 },
      { key: "4", text: "4", value: 4 },
      { key: "5", text: "5", value: 5 },
      { key: "6", text: "6", value: 6 },
      { key: "7", text: "7", value: 7 },
      { key: "8", text: "8", value: 8 },
      { key: "9", text: "9", value: 9 },
      { key: "10", text: "10", value: 10 }
    ];

    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Input id="passwordField" placeholder="Password" width={12} />
            <Form.Button
              width={4}
              content="Copy to Clipboard"
              icon="copy"
              labelPosition="right"
              onClick={this.copyToClipboardHandler}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Select
              fluid
              inline
              options={options}
              value={numWords}
              placeholder="Please Select"
              label="Number of words in password"
              onChange={this.numWordsChangedHandler}
            />
            <Form.Checkbox
              toggle
              checked={mixCase}
              data-type="mixCase"
              label="Mix UPPERCASE and lowercase"
              className={computedStyles.checkbox}
              onChange={this.toggleChangedHandler}
            />
            <Form.Checkbox
              toggle
              checked={includeNumbers}
              data-type="includeNumbers"
              label="Include Numbers"
              className={computedStyles.checkbox}
              onChange={this.toggleChangedHandler}
            />
            <Form.Checkbox
              toggle
              checked={includeSpecialChars}
              data-type="includeSpecialChars"
              label="Include Special Characters"
              className={computedStyles.checkbox}
              onChange={this.toggleChangedHandler}
            />
          </Form.Group>
          <Message
            visible={showCopiedMessage}
            success
            header="Copy Sucessful!!!"
            content="The generated password has been copied to your clipboard."
          />
        </Form>
      </div>
    );
  }
}

export default withRouter(withStyles(stylesGenerator)(WelcomeView));
