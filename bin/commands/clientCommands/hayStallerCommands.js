/**
 * @file hayStallerCommands.js
 * @module hayStallerCommands
 * @description Contains all client defined commands for execution of client actions with various operations,
 * specific for installing, uninstalling, updating repairing or patching.
 * @requires module:installBroker
 * @requires module:application.command.constants
 * @requires module:application.message.constants
 * @requires module:application.system.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/03/23
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import installBroker from '../../brokers/installBroker.js';
import * as apc from '../../constants/application.constants.js';
import * as app_msg from '../../constants/application.message.constants.js';
import * as app_sys from '../../constants/application.system.constants.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// application.hayStaller.commands.clientCommands.tutoringCommands.
const namespacePrefix = wrd.capplication + bas.cDot + apc.cApplicationName + bas.cDot + wrd.ccommands + bas.cDot + wrd.cclient + wrd.cCommands + bas.cDot + baseFileName + bas.cDot;

export default {
  
}