import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import MainView from 'views/MainView'
import Home from 'views/Home'
import UserManage from 'views/User'
import MetadataManage from 'views/Metadata'
import MetadataSearch from 'views/Metadata/Search'
import MetadataList from 'views/Metadata/Compare'
import MetadataTableList from 'views/Metadata/Compare/table'
import MetadataColumnList from 'views/Metadata/Compare/column'

// https://reactjs.org/docs/code-splitting.html#suspense
const AsyncView = React.lazy(() => import(/* webpackChunkName: "async" */ 'views/AsyncView'))

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/userManage',
    component: UserManage
  },
  {
    path: '/metadataManage',
    component: MetadataManage
  },
  {
    path: '/metadataList',
    component: MetadataList,
    exact: true
  },
  {
    path: '/metadataList/:databaseId',
    component: MetadataTableList,
    exact: true
  },
  {
    path: '/metadataList/:databaseId/:id',
    component: MetadataColumnList,
    exact: true
  },
  {
    path: '/metadataSearch',
    component: MetadataSearch
  },
  {
    path: '/async',
    component: () => (
      <Suspense fallback={<div>Loading</div>}>
        <AsyncView />
      </Suspense>
    )
  }
]

const RenderRouters = (
  <Switch>
    <Route path='/' component={MainView} />
  </Switch>
)

export {
  routes,
  RenderRouters
}
