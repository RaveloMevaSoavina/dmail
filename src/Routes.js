import {lazy} from 'react'
import {READ_MAIL_PAGE, HOME_PAGE} from './settings/constants'

const routes = [
        {
          path: HOME_PAGE,
          name : "home page",
          exact: true,
          component : lazy(()=> import('./container/Home/Home.js'))
        },
        // {
        //   path: READ_MAIL_PAGE,
        //   name : "readmail",
        //   exact: true,
        //   component : lazy(()=> import('./container/ReadOneMail/ReadOneMail.js'))
        // },
]

export default routes;
