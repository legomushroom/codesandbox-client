import { types } from 'mobx-state-tree';

const Creator = types.model('Creator', {
  uid: types.string,
});

const Scale = types.model('Scale', {
  current: types.maybeNull(types.integer),
  min: types.maybeNull(types.integer),
  max: types.maybeNull(types.integer),
});

const Alias = types.model('Alias', {
  alias: types.string,
  created: types.string,
  uid: types.string,
});

const Deploy = types.model('Deploy', {
  uid: types.string,
  name: types.string,
  url: types.string,
  created: types.integer,
  state: types.enumeration('types', [
    'DEPLOYING',
    'INITIALIZING',
    'DEPLOYMENT_ERROR',
    'BOOTED',
    'BUILDING',
    'READY',
    'BUILD_ERROR',
    'FROZEN',
    'ERROR',
  ]),
  instanceCount: types.maybeNull(types.integer),
  alias: types.maybeNull(types.array(Alias)),
  scale: types.maybeNull(Scale),
  creator: Creator,
  type: types.enumeration('types', ['NPM', 'DOCKER', 'STATIC']),
});

export default {
  hasAlias: types.boolean,
  deployToDelete: types.maybeNull(types.string),
  deploying: types.boolean,
  url: types.maybeNull(types.string),
  gettingDeploys: types.boolean,
  sandboxDeploys: types.array(Deploy),
};
