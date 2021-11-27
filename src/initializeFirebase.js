import config from 'config'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/performance'

export default function initializeFirebase() {

  // Enable Real Time Database emulator if environment variable is set
  if (config.firebase.databaseURL.includes('localhost')) {
    console.debug(`RTDB emulator enabled: ${config.firebase.databaseURL}`) // eslint-disable-line no-console
  }

  // Initialize Firebase instance
  firebase.initializeApp(config.firebase)
  // Initialize Firebase analytics if measurementId exists
  if (config.firebase.measurementId) {
    firebase.analytics()
  }

  // Enable Firestore emulator if environment variable is set
  if (process.env.REACT_APP_FIRESTORE_EMULATOR_HOST) {
    /* eslint-disable no-console */
    console.debug(
      `Firestore emulator enabled: ${process.env.REACT_APP_FIRESTORE_EMULATOR_HOST}`
    )
    /* eslint-enable no-console */
    firebase.firestore().settings({
      host: process.env.REACT_APP_FIRESTORE_EMULATOR_HOST,
      ssl: false
    })
  }
}
