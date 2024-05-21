import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  return Promise
    .allSettled(promises).then((result) => (result.map((obj) => {
      if (Object.hasOwn(obj, 'reason')) {
        return { status: obj.status, value: String(obj.reason) };
      }
      return obj;
    })
    ));
}
