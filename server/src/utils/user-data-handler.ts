// generate an id according to teh user type(patient, doctor, laboratory)
export const generateUserId = (userType: string) => {
  const userPrefix = generateUserTypePrefix(userType);
  const timeStamp = new Date().getTime();
  const randomNumber = Math.floor(Math.random() * 10000);
  const userId = userPrefix + `${timeStamp}-${randomNumber}`;
  return userId;
};

// generate prefix according user type
const generateUserTypePrefix = (userType: string) => {
  let userIdPrefix = 'pat-';
  switch (userType) {
    case 'doctor':
      userIdPrefix = 'doc-';
      break;
    case 'laboratory':
      userIdPrefix = 'lab-';
      break;
  }
  return userIdPrefix;
};
