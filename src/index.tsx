import React from 'react';
import Base, {
    Props         as Base_Props,
    State         as Base_State
} from '@nodestrap/button/src/index';
import Icon from '@nodestrap/icon/src/index';
import './index.scss';



export interface Props extends Base_Props {
    icon?    : string;
}

export interface State extends Base_State {
}

/**
 * A button UI with a common icon set using "image based icon"
 * and fallback using "font based icon" (Google's Material Icons -or- Font Awesome).
 */
export default class Button<TProps extends Props = Props, TState extends State = State> extends Base<TProps, TState> {
    /*override*/ render() {
        const props = this.props;
        return React.createElement(
            Base,
            props,
            <React.Fragment>
                {(props.icon && <Icon icon={props.icon!} size={props.size} theme={props.theme} />) || null}
                {props.children}
            </React.Fragment>
        )
    }
}