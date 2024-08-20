import { app, auth, RecaptchaVerifier, signInWithPhoneNumber , signOut ,onAuthStateChanged } from "./firebase.js"

// console.log('app',app)

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
    console.log('user sign')
  } else {
    // User is signed out
    // ...
    console.log('User is signed out')
  }
});

let sent = document.getElementById('send');

sent.addEventListener('click', () => {
   // console.log(event.type)
   const appVerifier = window.recaptchaVerifier;
   
   let phoneNumber = document.getElementById('number')
signInWithPhoneNumber(auth, `+${phoneNumber.value}`, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
      Swal.fire({
         title: "Verification Sent Successfully",
         text: "Your Verification Sent Is Number",
         icon: "success"
       });
      console.log("confirmationResult",confirmationResult)
    }).catch((error) => {
      // Error; SMS not sent
      // ...
      Swal.fire({
         title: "SMS not sent",
         text: error.message,
         icon: "error"
       });
      console.log('error',error.message)
    });

})

window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha', {
   'size': 'normal',
   'callback': (response) => {
     // reCAPTCHA solved, allow signInWithPhoneNumber.
     // ...
   },
   'expired-callback': () => {
     // Response expired. Ask user to solve reCAPTCHA again.
     // ...
   }
 });
 

let verify = document.getElementById('verify');
verify.addEventListener('click', () => {
   let otp = document.getElementById('otp');
   confirmationResult.confirm(otp.value)
   .then((result) => {
     // User signed in successfully.
     Swal.fire({
      title: "Signed in",
      text: "User signed in successfully.",
      icon: "success"
    });
     const user = result.user;
     // ...
     console.log(user)
     window.location.href = "./dashbord.html"
   }).catch((error) => {
     // User couldn't sign in (bad verification code?)
     // ...
     Swal.fire({
      title: "User couldn't sign in (bad verification code?)",
      text: error.message,
      icon: "error"
    });
   });
    
})
