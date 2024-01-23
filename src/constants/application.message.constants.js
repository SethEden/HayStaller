/**
 * @file application.message.constants.js
 * @module application.message.constants
 * @description Contains many re-usable application message constants.
 * @requires module:application.command.constants
 * @requires module:application.configuration.constants
 * @requires module:application.constants
 * @requires module:application.system.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2023/03/23
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal Imports
import * as app_cmd from './application.command.constants.js';
import * as app_cfg from './application.configuration.constants.js';
import * as apc from './application.constants.js';
import * as app_sys from './application.system.constants.js';

// External imports
import hayConst from '@haystacks/constants';
const {bas, gen, msg, num, sys, wrd} = hayConst;

// General application messages

// Application messages
export const cinstructionsMessage00 = wrd.cInstructions + bas.cSpace + wrd.cto + bas.cSpace + wrd.cend + bas.cSpace + wrd.cuser + bas.cColon; // Instructions to end user:

// Constants Validation
export const callClientConstantsValidationDataIs = wrd.call + wrd.cClient + wrd.cConstants + wrd.cValidation + wrd.cData + sys.cSpaceIsColonSpace; // allClientConstantsValidationData is:
export const cresolvedConstantsPath_ApplicationBusinessIs = app_sys.cresolvedConstantsPath_Application + wrd.cBusiness + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationBusiness is:
export const cresolvedConstantsPath_ApplicationCommandIs = app_sys.cresolvedConstantsPath_Application + wrd.cCommand + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationCommand is:
export const cresolvedConstantsPath_ApplicationConfigurationIs = app_sys.cresolvedConstantsPath_Application + wrd.cConfiguration + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationConfiguration is:
export const cresolvedConstantsPath_ApplicationConstantIs = app_sys.cresolvedConstantsPath_Application + wrd.cConstant + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationConstant is:
export const cresolvedConstantsPath_ApplicationMessageIs = app_sys.cresolvedConstantsPath_Application + wrd.cMessage + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationMessage is:
export const cresolvedConstantsPath_ApplicationSystemIs = app_sys.cresolvedConstantsPath_Application + wrd.cSystem + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationSystem is:

export const cApplicationBusinessConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cBusiness + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Business Constants Phase 1 Validation
export const cApplicationCommandConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cCommand + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Command Constants Phase 1 Validation
export const cApplicationConfigurationConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cConfiguration + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Configuration Constants Phase 1 Validation
export const cApplicationConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Constants Phase 1 Validation
export const cApplicationMessageConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cMessage + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Message Constants Phase 1 Validation
export const cApplicationSystemConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cSystem + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application System Constants Phase 1 Validation

export const cApplicationBusinessConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cBusiness + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Business Constants Phase 2 Validation
export const cApplicationCommandConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cCommand + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Command Constants Phase 2 Validation
export const cApplicationConfigurationConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cConfiguration + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Configuration Constants Phase 2 Validation
export const cApplicationConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Constants Phase 2 Validation
export const cApplicationMessageConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cMessage + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Message Constants Phase 2 Validation
export const cApplicationSystemConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cSystem + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application System Constants Phase 2 Validation

export const capplicationMessage01 = wrd.cBEGIN + bas.cSpace + wrd.cmain + bas.cSpace + wrd.cprogram + bas.cSpace + wrd.cloop; // BEGIN main program loop
export const capplicationMessage02 = wrd.cBEGIN + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cparser; // BEGIN command parser
export const capplicationMessage03 = wrd.cEND + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cparser; // END command parser
export const capplicationMessage04 = wrd.cEND + bas.cSpace + wrd.cmain + bas.cSpace + wrd.cprogram + bas.cSpace + wrd.cloop; // END main program loop
export const capplicationMessage05 = wrd.cExiting + bas.cSpace + wrd.cHay + wrd.cStaller + bas.cSpace + wrd.capplication; // Exiting HayStaller application

export const cscanPathErrorMessage01 = msg.cERROR_Colon + wrd.cYou + bas.cSpace + wrd.cmust + bas.cSpace + wrd.cspecify + bas.cSpace + bas.ca + bas.cSpace + wrd.cfolder + bas.cSpace + wrd.cor + bas.cSpace + wrd.cpath + bas.cSpace + wrd.cto + bas.cSpace + wrd.cbe + bas.cSpace + wrd.cscanned + bas.cDot; // ERROR: You must specify a folder or path to be scanned.
export const csaveFolderScanOutputMessage01 = msg.cERROR_Colon + wrd.cYou + bas.cSpace + wrd.cmust + bas.cSpace + wrd.cspecify + bas.cSpace + bas.ca + bas.cSpace + wrd.cfile + bas.cSpace + wrd.cname + bas.cSpace + wrd.cand + bas.cSpace + wrd.cpath + bas.cSpace + wrd.cto + bas.cSpace + wrd.csave + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cto + bas.cDot; // ERROR: You must specify a file name and path to save the data to.