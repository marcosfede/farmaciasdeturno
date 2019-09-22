import { IonApp } from '@ionic/react'
import React from 'react'
import * as PropTypes from 'prop-types'

import '@ionic/core/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/core/css/normalize.css'
import '@ionic/core/css/structure.css'
import '@ionic/core/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/core/css/padding.css'
import '@ionic/core/css/float-elements.css'
import '@ionic/core/css/text-alignment.css'
import '@ionic/core/css/text-transformation.css'
import '@ionic/core/css/flex-utils.css'
import '@ionic/core/css/display.css'

import 'ionicons/dist/css/ionicons.css'

interface IProps {
  children: React.ReactNode
}

const Layout = ({ children }: IProps) => <IonApp>{children}</IonApp>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
