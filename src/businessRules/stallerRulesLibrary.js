/**
 * @file stallerRulesLibrary.js
 * @module stallerRulesLibrary
 * @description Contains all of the HayStaller defined business rules as a map between function names and function calls.
 * @requires module:stallerRules
 * @requires module:application.business.constants
 * @requires module:application.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/03/23
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_biz from '../constants/application.business.constants.js';
import * as apc from '../constants/application.constants.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

// eslint-disable-next-line no-unused-vars
const {bas, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// application.hayStaller.businessRules.stallerRulesLibrary.
const namespacePrefix = wrd.capplication + bas.cDot + apc.cApplicationName + bas.cDot + wrd.cbusiness + wrd.cRules + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initApplicationRulesLibrary
 * @description Initializes an object map of client business rules and client function calls and returns them.
 * @returns {object} A JSON object that contains a list of business rule names and their associated function calls.
 * @author Seth Hollingsead
 * @NOTE Please be aware that the Commands and BusinessRules data fields in the
 * D-data structure are going to display as empty when printing out the D-data structure even when using JSON.stringify().
 * This is because the functions cannot really be serialized in any way. It actually kind of makes sense,
 * but could be really confusing if you are struggling, trying to debug commands or business rules that do not appear to exist.
 */
const initApplicationRulesLibrary = function() {
  // let functionName = initApplicationRulesLibrary.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  return {
    // Client Business Rules
    // ***********************************************
    // staller rules in order
    // ***********************************************
    // [app_biz.ccustomEcho]: (inputData, inputMetaData) => clientStringParsing.customEcho(inputData, inputMetaData),
  };
}

export default {
  initApplicationRulesLibrary
}