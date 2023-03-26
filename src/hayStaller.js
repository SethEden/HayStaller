#!/usr/bin/env node
/* eslint-disable no-undef */

/**
 * @file hayStaller.js
 * @module hayStaller
 * @description This is the main init for the hayStaller application.
 * It contains just enough of the main program loop and basic argument parsing to function an
 * interactive installation/uninstall/update/patch/repair application to fix and update applications that implement the haystacks platform.
 * @requires module:installBroker
 * @requires module:installerRules
 * @requires module:installerCommands
 * @requires module:application.command.constants
 * @requires module:application.constants
 * @requires module:application.function.constants
 * @requires module:application.message.constants
 * @requires module:allApplicationConstantsValidationMetadata
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/url|url}
 * @requires {@link https://www.npmjs.com/package/dotenv|dotenv}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/03/22
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import clientRules from './businessRules/stallerRulesLibrary.js';
import clientCommands from './commands/stallerCommandsLibrary.js';
import * as app_cfg from './constants/application.configuration.constants.js';
import * as apc from './constants/application.constants.js';
import * as app_msg from './constants/application.message.constants.js';
import allAppCV from './resources/constantsValidation/allApplicationConstantsValidationmetadata.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import url from 'url';
import dotenv from 'dotenv';
import path from 'path';

const {bas, msg, sys, wrd} = hayConst;
let rootPath = '';
let baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// application.hayStaller
let namespacePrefix = wrd.capplication + bas.cDot + baseFileName + bas.cDot;
// eslint-disable-next-line no-undef
global.appRoot = path.resolve(process.cwd());
dotenv.config();
// eslint-disable-next-line no-undef
const {NODE_ENV} = process.env;
let exitConditionArrayIndex = 0;

/**
 * @function bootStrapApplication
 * @description Setup all the run-time dependencies, execution environment, data, and configuration settings.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2023/03/22
 */
async function bootStrapApplication() {
  let functionName = bootStrapApplication.name;
  console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  rootPath = url.fileURLToPath(path.dirname(import.meta.url));
  let rootPathArray = [];
  let pathSeparator = '';
  if (rootPath.includes(bas.cBackSlash) === true) {
    pathSeparator = bas.cBackSlash;
  } else if (rootPath.includes(bas.cForwardSlash) === true) {
    pathSeparator = bas.cForwardSlash;
  }
  rootPathArray = rootPath.split(pathSeparator);
  rootPathArray.pop(); // remove any bin or src folder from the path.
  rootPath = rootPathAray.join(pathSeparator);
  let appConfig = {};
  if (NODE_ENV === wrd.cdevelopment) {
    appConfig = {
      FrameworkName: apc.cExpectedActualFrameworkDevName,
      clientRootPath: rootPath,
      appConfigResources: rootPath + apc.cFullDevResourcesPath,
      appConfigReferencePath: rootPath + apc.cFullDevConfigurationPath,
      clientMetaDataPath: apc.cmetaDataDevPath,
      clientCommandAliasesPath: rootPath + apc.cFullDevCommandsPath,
      clientConstantsPath: rootPath + apc.cFullDevConstantsPath,
      clientRegisteredPlugins: rootPath + apc.cFullDevPluginsRegistryPath,
      clientWorkflowsPath: rootPath + apc.cFullDevWorkflowsPath,
      clientThemesPath: rootPath + apc.cFullDevThemesPath,
      applicationConstantsVaidationData: allAppCV.i
    };
  } else if (NODE_ENV === wrd.cproduction) {
    appConfig = {

    };
  } else {
    // WARNING: No .nev file found! Going to default to the DEVELOPMENT ENVIRONMENT!
    console.log(msg.cApplicationWarningMessage1a + msg.cApplicationWarningMessage1b);
    appConfig = {

    };
  }
}