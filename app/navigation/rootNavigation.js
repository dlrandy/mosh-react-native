import React from 'react';
export const rootNavigationRef = React.createRef();

const navigate = (name, params) => {
rootNavigationRef.current?.navigate(name, params);

}
const rootNavigation = {
    navigate,
}

export default rootNavigation
