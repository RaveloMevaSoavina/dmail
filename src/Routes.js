import {lazy} from 'react'
import {CONTACT_PAGE, HOME_PAGE} from './settings/constants'

const routes = [
        {
          path: HOME_PAGE,
          name : "home page",
          exact: true,
          component : lazy(()=> import('./container/Home/Home.js'))
        },
        {
          path: CONTACT_PAGE,
          name : "contact",
          exact: true,
          component : lazy(()=> import('./container/Contact/Contact.js'))
        },
]

export default routes;
