import continueWithSocialAuth from './continue';

export const continueWithGoogle = () =>
	continueWithSocialAuth('google-oauth2', 'google');
export const continueWithFacebook = () =>
	continueWithSocialAuth('facebook', 'facebook');
