import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './withSpinner.styles';

const withSpinner = (WrappedComponent) => {
    // if wrapped component is collectionPage, collectionsLoaded will be defined
    // if wrapped component is CollectionsOverview, loading will be defined
    const Spinner = ({collectionsLoaded, loading, ...otherProps }) => {
        console.log(otherProps);
        if (otherProps.match.path === "/shop/:collectionId" && !collectionsLoaded) {
            return (
                <SpinnerOverlay>
                    <SpinnerContainer/>
                </SpinnerOverlay>
            );
        } else if (otherProps.match.path === "/shop/:collectionId" && collectionsLoaded) {
            return (
                <WrappedComponent {...otherProps}/>
            )
        }
        else {
            return loading ? (
                <SpinnerOverlay>
                    <SpinnerContainer/>
                </SpinnerOverlay>
            ) : (
                <WrappedComponent {...otherProps}/>
            );
        }
    }
    return Spinner;
};

export default withSpinner;