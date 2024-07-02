import React from "react";

import Reducer from './reduser';

import { createStore } from 'redux';



export const  Store=createStore(Reducer);