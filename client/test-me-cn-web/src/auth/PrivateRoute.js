import React, { Component } from 'react'
import { Route, Navigate } from 'react-router-dom'
import { Links } from '../links/links'
import auth from './auth-helper'

const PrivateRoute = ({childern}) =>{
    if(!auth.isAuthenticated()){
        return <Navigate to={Links.SignInPage.path} />
    }
    return childern;
}

export default PrivateRoute