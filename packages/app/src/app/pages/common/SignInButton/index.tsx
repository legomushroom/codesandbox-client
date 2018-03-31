import * as React from 'react';
import { connect, WithCerebral } from 'app/fluent';

import GithubIcon from 'react-icons/lib/go/mark-github';
import Button from 'app/components/Button';
import Row from 'common/components/flex/Row';

type Props = WithCerebral;

const SignInButton: React.SFC<Props> = (props) => {
    const { signals } = props;

    return (
        <Button
            small
            onClick={() => {
                signals.signInClicked();
            }}
            {...props}
        >
            <Row>
                <GithubIcon style={{ marginRight: '0.5rem' }} /> Sign in with GitHub
            </Row>
        </Button>
    );
};

export default connect<Props>()(SignInButton);
