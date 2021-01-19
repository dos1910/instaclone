import * as _ from 'lodash';

export function unsubscribeAll(subscriptions) {
  _.each(subscriptions, subscription => {
    try {
      subscription.unsubscribe();
    } catch (error) {
      console.error('unsubscribeAll:', subscription, error);
    }
  });
}

