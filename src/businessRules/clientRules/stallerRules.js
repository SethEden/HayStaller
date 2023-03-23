/**
 * @file stallerRules.js
 * @module stallerRules
 * @description Contains all client defined business rules for the HayStaller application.
 * @requires module:application.constants
 * @requires module:application.message.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/03/23
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports

// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// application.hayStaller.businessRules.clientRules.stallerRules.
const namespacePrefix = wrd.capplication + bas.cDot + apc.cApplicationName + bas.cDot + wrd.cbusiness + wrd.cRules + bas.cDot + wrd.cclient + wrd.cRules + bas.cDot + baseFileName + bas.cDot;

export default {

};