import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import Routes from './src/screens/routes';
import {applyFilter, setAllTasks} from './src/services/redux/actions';
import store from './src/services/redux/store';

// eslint-disable-next-line no-shadow
export default function App() {
  useEffect(() => {
    store.dispatch(
      setAllTasks([
        {
          description: 'Just a second meeting',
          taskType: 'Important',
          title: 'Second event',
          startDateTime: '2021-04-06T20:00:10+01:00',
          endDateTime: '2021-04-06T22:00:10+01:00',
          uid: '1617715210315',
          isDone: false,
        },
        {
          description: 'Going fishing',
          taskType: 'Important',
          title: 'Go Fishing',
          startDateTime: '2021-04-07T09:00:10+01:00',
          endDateTime: '2021-04-07T10:00:10+01:00',
          uid: '1617715210312',
          isDone: false,
        },
        {
          title: 'Run with Ade',
          taskType: 'Planned',
          startDateTime: '2021-04-08T12:00:10+01:00',
          endDateTime: '2021-04-08T13:30:10+01:00',
          uid: '1617715210319',
          isDone: false,
        },
        {
          description: 'Play FIFA',
          taskType: 'Planned',
          title: 'Play FIFA',
          startDateTime: '2021-05-21T12:00:10+01:00',
          endDateTime: '2021-05-21T13:30:10+01:00',
          uid: '16177152103129',
          isDone: false,
        },
      ]),
    );

    store.dispatch(applyFilter(null));
  }, []);

  return (
    <Provider store={store}>
      <React.Fragment>
        <StatusBar translucent={true} />
        <Routes />
      </React.Fragment>
    </Provider>
  );
}
