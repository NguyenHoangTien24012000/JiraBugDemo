import React, { Fragment } from "react";
import { Route } from "react-router";


export const JiraTemplate = (props) =>{
    const {Component, ...restParam} = props;

    return <Route {...restParam} render = {(propsRoute) =>{
        return <Fragment>
            <Component {...propsRoute} />
        </Fragment>
    }} />
}