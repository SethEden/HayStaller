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
import installBroker from './brokers/installBroker.js';
import stallerRules from './businessRules/stallerRulesLibrary.js';
import stallerCommands from './commands/stallerCommandsLibrary.js';
import * as app_cmd from './constants/application.command.constants.js';
import * as app_cfg from './constants/application.configuration.constants.js';
import * as apc from './constants/application.constants.js';
import * as app_msg from './constants/application.message.constants.js';
import * as app_sys from './constants/application.system.constants.js';
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
  // let functionName = bootStrapApplication.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
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
  rootPath = rootPathArray.join(pathSeparator);
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
      applicationConstantsValidationData: allAppCV.initializeAllClientConstantsValidationData,
      clientBusinessRules: {},
      clientCommands: {}
    };
  } else if (NODE_ENV === wrd.cproduction) {
    appConfig = {
      FrameworkName: apc.cExpectedActualFrameworkProdName,
      clientRootPath: rootPath,
      appConfigResources: rootPath + apc.cFullProdResourcesPath,
      appConfigReferencePath: rootPath + apc.cFullProdConfigurationPath,
      clientMetaDataPath: apc.cmetaDataDevPath,
      clientCommandAliasesPath: rootPath + apc.cFullProdCommandsPath,
      clientConstantsPath: rootPath + apc.cFullProdConstantsPath,
      clientRegisteredPlugins: rootPath + apc.cFullProdPluginsRegistryPath,
      clientWorkflowsPath: rootPath + apc.cFullProdWorkflowsPath,
      clientThemesPath: rootPath + apc.cFullProdThemesPath,
      applicationConstantsValidationData: allAppCV.initializeAllClientConstantsValidationData,
      clientBusinessRules: {},
      clientCommands: {}
    };
  } else {
    // WARNING: No .nev file found! Going to default to the DEVELOPMENT ENVIRONMENT!
    console.log(msg.cApplicationWarningMessage1a + msg.cApplicationWarningMessage1b);
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
      applicationConstantsValidationData: allAppCV.initializeAllClientConstantsValidationData,
      clientBusinessRules: {},
      clientCommands: {}
    };
  }
  appConfig[sys.cclientBusinessRules] = await stallerRules.initApplicationRulesLibrary();
  appConfig[sys.cclientCommands] = await stallerCommands.initApplicationCommandsLibrary();
  // console.log('appConfig is: ', appConfig);
  await haystacks.initFramework(appConfig);
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function application
 * @description This is the main program loop, the init for the hayStaller application.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2023/03/27
 */
async function application() {
  let functionName = application.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  let commandInput;
  let commandResult;

  await haystacks.enqueueCommand(app_cmd.cApplicationStartupWorkflow);
  // Make sure to process all of the startup command workflow commands before we go into the main program loop.
  while (await haystacks.isCommandQueueEmpty() === false) {
    commandResult = await haystacks.processCommandQueue();
  } // End-while (await haystacks.isCommandQueueEmpty() === false)

  // BEGIN the main program loop
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage01);

  // BEGIN command parser
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage02);
  while (programRunning === true) {
    if (await haystacks.isCommandQueueEmpty() === true) {
      commandInput = await haystacks.executeBusinessRules([bas.cGreaterThan, ''], [wrd.cprompt]);
      await haystacks.enqueueCommand(commandInput);
    } // End-if (await haystacks.isCommandQueueEmpty() === true)
    commandResult = await haystacks.processCommandQueue();
    if (commandResult[exitConditionArrayIndex] === false) {
      // END command parser
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage03);
      programRunning = false;
      // END main program loop
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage04);
      // Exiting hayStaller application
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage05);
      break;
    } // End-if (commandResult[exitConditionArrayIndex] === false)
  } // End-while (programRunning === true)
}

// Launch the application!
let programRunning = false;
await bootStrapApplication();
programRunning = true;
await application();
process.exit();