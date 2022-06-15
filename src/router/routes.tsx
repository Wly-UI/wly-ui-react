import React from 'react';
import Home from '../views/Home';
import { RoutersType } from '../types';
import App from '../App';
import DButton from 'src/views/DButton';
import DNotiFiction from 'src/views/DNotifaation';
import { DTable } from 'src/views/DTable';

import DInput from 'src/views/DInput';
import DForm from 'src/views/DForm';
import DTabs from 'src/views/DTabs';

const routes: RoutersType = [
	{
		path: '',
		redirect: 'Components'
	},
	{
		path: 'home',
		element: <Home />,
		name: 'Home'
	},
	{
		path: 'Components',
		element: <App />,
		name: 'Components',
		children: [
			{
				path: '',
				redirect: 'dbutton'
			},
			{
				path: 'dbutton',
				element: <DButton />,
				name: 'DBUTTON'
			},
			{
				path: 'dnotifiction',
				element: <DNotiFiction />,
				name: 'DNOTIFICTION'
			},
			{
				path: 'dtable',
				element: <DTable />,
				name: 'DTable'
			},
			{
				path: 'dinput',
				element: <DInput />,
				name: 'DINPUT'
			},
			{
				path: 'dform',
				element: <DForm />,
				name: 'DForm'
			},
			{
				path: 'dtabs',
				element: <DTabs />,
				name: 'DTABS'
			}
		]
	}
];

export { routes };
