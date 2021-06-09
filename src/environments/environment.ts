// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//remplazar datos con su proyecto de firebase
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCuS7aHEwM3YbpnzZoNTy8638-dtwTyNyI",
    authDomain: "capturapreguntas.firebaseapp.com",
    projectId: "capturapreguntas",
    storageBucket: "capturapreguntas.appspot.com",
    messagingSenderId: "212753247120",
    appId: "1:212753247120:web:d7eb035961ef9998432115"
  }
};



/*

firebaseConfig: {
    apiKey: "AIzaSyCuS7aHEwM3YbpnzZoNTy8638-dtwTyNyI",
    authDomain: "capturapreguntas.firebaseapp.com",
    projectId: "capturapreguntas",
    storageBucket: "capturapreguntas.appspot.com",
    messagingSenderId: "212753247120",
    appId: "1:212753247120:web:d7eb035961ef9998432115"
  },

  firebaseConfig: {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXXXXXXX",
    measurementId: "xXXXXXXXXXXXXXXXXXXXXX"
  }
  
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
