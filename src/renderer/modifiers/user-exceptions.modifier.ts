import { ValidatorModifier, UserExceptions } from '../../models';
import * as unique_ids from "../../lib/helpers/unique-ids";
import * as _ from "lodash";

let versionUp = (version: number) => { return version + 1 };


export const userExceptions: ValidatorModifier<UserExceptions> = {
  controlProperty: 'exceptionsVersion',
  latestVersion: 0,
  fields: {
    undefined: {
      'exceptionsVersion': { method: () => 0 },
      'titles': {
        method: ((oldValue: any, oldExceptions: any) => {
          if(!!oldExceptions.titles) {
            return oldExceptions.titles
          } else {
            let result = _.cloneDeep(oldExceptions);
            delete result.exceptionsVersion;
            for(let key of Object.keys(result)) {
              result[key].searchTitle = '';
            }
            return result;
          }
        })
      }
    }
  }
}

