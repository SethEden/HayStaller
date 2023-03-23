/* eslint-disable no-undef */
/**
 * @file installBroker.js
 * @module installBroker
 * @description Contains all code for managing accounts, and account data.
 * @requires module:application.configuration.constants
 * @requires module:application.constants
 * @requires module:application.message.constants
 * @requires module:application.system.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/chalk|chalk}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/03/23
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports

// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import chalk from 'chalk';
import path from 'path';

const {bas, biz, clr, cfg, gen, msg, phn, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// application.hayStaller.brokers.installBroker.
const namespacePrefix = wrd.capplication + bas.cDot + apc.cApplicationName + bas.cDot + wrd.cbrokers + bas.cDot + baseFileName + bas.cDot;

export default {
  
}