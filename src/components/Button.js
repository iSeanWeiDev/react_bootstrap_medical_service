import React from 'react';

const Button = ({
    title,
    style,
    onPress,
    disabled,
    progressBar,
    authButton
}) => {
    const disabledState = authButton ? disabled : false;

    return (
        <button className={style} onClick={onPress} disabled={disabledState}>{progressBar}{title}</button>
    )
}
export default Button;