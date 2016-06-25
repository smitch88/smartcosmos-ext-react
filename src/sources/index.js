/*
* Datasources
* Just using mock endpoint for now that resolves from a promise
*/

const generateObjects = function( objects = 10 ){
  return [ ...Array( objects ).keys() ].map(function( item, index ){
    return {
      id: index,
      title: 'Object - ' + item,
      text: 'Some object text to display ' + item
    };
  });
};

const mockObjects = {

  // People
  'urn:person:small':
  {
    'activeFlag': true,
    'description': '',
    'moniker': '',
    'lastModified': new Date('2016-05-04T21:05:58.213Z'),
    'objectUrn': 'urn:person:small',
    'type': 'person',
    'accountUrn': 'urn:account:335eecb2-94ee-4187-8609-3f733a398592',
    'urn': 'urn:e75ee010-1fdf-4c29-94e7-ef29769c4cf5',
    'name': 'Small'
  },
  'urn:person:norris':
  {
    'activeFlag': true,
    'description': '',
    'moniker': '',
    'lastModified': new Date('2016-05-04T21:05:58.213Z'),
    'objectUrn': 'urn:person:norris',
    'type': 'person',
    'accountUrn': 'urn:account:335eecb2-94ee-4187-8609-3f733a398592',
    'urn': 'urn:6a07fb22-f94a-48b1-a4f2-73d85822cd3f',
    'name': 'Norris'
  },
  'urn:person:juliette':
  {
    'activeFlag': true,
    'description': '',
    'moniker': '',
    'lastModified': new Date('2016-05-04T21:05:58.213Z'),
    'objectUrn': 'urn:person:juliette',
    'type': 'person',
    'accountUrn': 'urn:account:335eecb2-94ee-4187-8609-3f733a398592',
    'urn': 'urn:3bdf003b-825a-41e7-9722-c31086d8d2d7',
    'name': 'Juliette'
  },
  'urn:person:francesca':
  {
    'activeFlag': true,
    'description': '',
    'moniker': '',
    'lastModified': new Date('2016-05-04T21:05:58.213Z'),
    'objectUrn': 'urn:person:francesca',
    'type': 'person',
    'accountUrn': 'urn:account:335eecb2-94ee-4187-8609-3f733a398592',
    'urn': 'urn:202d5a0e-d5ea-473c-900e-5b704bfdee51',
    'name': 'Francesca'
  },

  // Company
  'urn:company:coriander':
  {
    'activeFlag': true,
    'description': '',
    'moniker': '',
    'lastModified': new Date('2016-05-04T21:05:58.213Z'),
    'objectUrn': 'urn:company:coriander',
    'type': 'company',
    'accountUrn': 'urn:account:335eecb2-94ee-4187-8609-3f733a398592',
    'urn': 'urn:2b97d9c7-330b-4032-bf74-c7079a27070f',
    'name': 'Coriander'
  },
  'urn:company:imant':
  {
    'activeFlag': true,
    'description': '',
    'moniker': '',
    'lastModified': new Date('2016-05-04T21:05:58.213Z'),
    'objectUrn': 'urn:company:imant',
    'type': 'company',
    'accountUrn': 'urn:account:335eecb2-94ee-4187-8609-3f733a398592',
    'urn': 'urn:994c70e8-229e-4049-b2c3-ad3a071597b1',
    'name': 'Imant'
  },
  'urn:company:kongene':
  {
    'activeFlag': true,
    'description': '',
    'moniker': '',
    'lastModified': new Date('2016-05-04T21:05:58.213Z'),
    'objectUrn': 'urn:company:kongene',
    'type': 'company',
    'accountUrn': 'urn:account:335eecb2-94ee-4187-8609-3f733a398592',
    'urn': 'urn:ce7b86a6-19da-4e42-bd8e-7f1b6ba0d24a',
    'name': 'Kongene'
  },
  'urn:company:naxdis':
  {
    'activeFlag': true,
    'description': '',
    'moniker': '',
    'lastModified': new Date('2016-05-04T21:05:58.213Z'),
    'objectUrn': 'urn:company:naxdis',
    'type': 'company',
    'accountUrn': 'urn:account:335eecb2-94ee-4187-8609-3f733a398592',
    'urn': 'urn:795362c7-90ee-410d-9f64-fe9d48b65748',
    'name': 'Naxdis'
  }
};

// Mock data fetcher
const Databroker = function( timeout, data ){
  return (new Promise(function( resolve, reject ){
    window.setTimeout(function(){
      resolve( data );
    }, timeout)}));
};

export { Databroker, mockObjects, generateObjects };
