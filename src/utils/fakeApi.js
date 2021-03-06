import faker from 'faker';

const contactsQuantity = 14; // should be even
const callsPerContact = 20;
const FAKE_CONTACTS = [];
const FAKE_CALLS = [];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generatePerson = () => {
  return {
    name: faker.fake('{{name.firstName}} {{name.lastName}}'),
    phone: getRandom(1000000000, 9999999999),
    age: getRandom(20, 70),
    country: faker.fake('{{address.county}}'),
    city: faker.fake('{{address.city}}'),
    street: faker.fake('{{address.streetName}}'),
    apt: faker.fake('{{address.streetAddress}}'),
    id: faker.random.uuid(),
  };
};


for (let i = 1; i <= Math.floor(contactsQuantity / 2); i++) {
  const fakeCaller = generatePerson();
  FAKE_CONTACTS.push({
    ...fakeCaller,
  });
  const fakeRecipient = generatePerson();
  FAKE_CONTACTS.push({
    ...fakeRecipient,
  });

  for (let j = 1; j <= callsPerContact; j++) {
    FAKE_CALLS.push({
      started: faker.fake('{{date.future}}'),
      finished: faker.fake('{{date.past}}'),
      caller: {
        name: fakeCaller.name,
        phone: fakeCaller.phone,
        id: fakeCaller.id,
      },
      recipient: {
        name: fakeRecipient.name,
        phone: fakeRecipient.phone,
        id: fakeRecipient.id,
      },
      id: faker.random.uuid(),
    });
  }
}

// const fakesRoutes = [
//   {
//     url: 'calls',
//     methods: ['get'],
//   },
//   {
//     url: 'contacts',
//     methods: ['get', 'post', 'put', 'delete'],
//   },
// ];


// export const isFake = (endpoint, method) => {
//   return fakesRoutes.some((f) => {
//     const url = endpoint.split('/')[0];
//     const routeMatched = f.url === url;
//     const methodMatched = f.methods.includes(method);
//
//     return routeMatched && methodMatched;
//   });
// };

export const isFake = (endpoint, method) => {
  return true;
};

export const getFakeResponse = (endpoint, method, body) => {
  const url = endpoint.split('/')[0];
  const id = endpoint.split('/')[1];
  const response = {
    contacts: {
      get: FAKE_CONTACTS,
      delete: { id },
      put: body,
      post: { ...body, id: faker.random.uuid() },
    },
    calls: {
      get: FAKE_CALLS.filter(c => c.caller.id === id || c.recipient.id === id),
    },
  };

  return response[url][method];
};
