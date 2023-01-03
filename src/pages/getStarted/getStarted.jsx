import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import SignUpForm from "../../components/sign-ip-form/sign-up-form.component";
const Started = () => {
  const logGoogleUser = async () => {
    const user = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div className="p-20">
      <h1>Form Get Started</h1>
      <button
        className="px-10 py-4 rounded-md bg-orange-500 text-white text-xl"
        onClick={logGoogleUser}
      >
        Sign Up
      </button>
      <SignUpForm />
    </div>
  );
};

export default Started;
